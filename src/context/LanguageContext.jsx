"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Same storage key the original i18next detector used, so saved choices carry over.
const STORAGE_KEY = "i18nextLng";
const SUPPORTED = ["de", "en", "ar"];
const FALLBACK = "de";

const LanguageContext = createContext(undefined);

function detectLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const code = stored.slice(0, 2).toLowerCase();
      if (SUPPORTED.includes(code)) return code;
    }
  } catch {}
  for (const lang of navigator.languages || [navigator.language]) {
    const code = (lang || "").slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(code)) return code;
  }
  return FALLBACK;
}

export function LanguageProvider({ children }) {
  // Server render always uses the fallback; the real choice is applied after mount.
  const [language, setLanguageState] = useState(FALLBACK);

  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    const link = document.getElementById("bootstrap-theme");
    if (link) link.href = language === "ar" ? "/css/bootstrap.rtl.min.css" : "/css/bootstrap.min.css";
  }, [language]);

  const setLanguage = (code) => {
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
