"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Only a language the visitor picked in the switcher is remembered under this key.
// (The old i18next key "i18nextLng" also cached the browser's language, so it is
// ignored on purpose — otherwise English browsers would never see the German default.)
const STORAGE_KEY = "deutpakLang";
const SUPPORTED = ["de", "en"];
const DEFAULT_LANGUAGE = "de";

const LanguageContext = createContext(undefined);

function detectLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;
  } catch {}
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  // Server render always uses the default; a saved choice is applied after mount.
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (code) => {
    if (!SUPPORTED.includes(code)) return;
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {}
    setLanguageState(code);
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (ctx === undefined) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
