"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageDropdown = ({
  theme: r = "dark"
}) => {
  const {
      language: e,
      setLanguage: t
    } = useLanguage(),
    [n, i] = React.useState(!1),
    a = React.useRef(null),
    o = [{
      code: "de",
      label: "Deutsch (DE)"
    }, {
      code: "en",
      label: "English (EN)"
    }, {
      code: "ar",
      label: "العربية (AR)"
    }],
    l = o.find(u => u.code === e)?.code.toUpperCase() || "DE";
  return React.useEffect(() => {
    const u = c => {
      a.current && !a.current.contains(c.target) && i(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []), <div className="language-dropdown-wrapper" ref={a} style={{
    position: "relative",
    display: "inline-block",
    fontFamily: "'DM Sans', sans-serif"
  }}>
          <button onClick={() => i(!n)} style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: r === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(10px)",
      border: r === "light" ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(255, 255, 255, 0.15)",
      borderRadius: "20px",
      padding: "6px 14px",
      color: r === "light" ? "#1a1a1a" : "#ffffff",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      outline: "none",
      boxShadow: r === "light" ? "0 4px 12px rgba(0, 0, 0, 0.06)" : "0 4px 12px rgba(0, 0, 0, 0.1)"
    }} onMouseEnter={u => {
      u.currentTarget.style.background = r === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)", u.currentTarget.style.borderColor = r === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.25)";
    }} onMouseLeave={u => {
      u.currentTarget.style.background = r === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.08)", u.currentTarget.style.borderColor = r === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.15)";
    }}>
            <span>🌐</span>
            <span>{l}</span>
            <span style={{
        fontSize: "8px",
        transition: "transform 0.3s ease",
        transform: n ? "rotate(180deg)" : "rotate(0deg)"
      }}>
              ▼
            </span>
          </button>
          {n && <ul style={{
      position: "absolute",
      top: "calc(100% + 8px)",
      right: e === "ar" ? "auto" : "0",
      left: e === "ar" ? "0" : "auto",
      background: r === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(20px)",
      border: r === "light" ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "12px",
      padding: "6px",
      margin: "0",
      listStyle: "none",
      minWidth: "140px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      zIndex: 99999,
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }}>
              {o.map(u => {
        const c = e === u.code;
        return <li key={u.code}>
                    <button onClick={() => {
            t(u.code), i(!1);
          }} style={{
            width: "100%",
            textAlign: "left",
            background: c ? r === "light" ? "rgba(22, 101, 52, 0.1)" : "rgba(13, 92, 52, 0.2)" : "transparent",
            border: "none",
            borderRadius: "8px",
            padding: "8px 12px",
            color: c ? r === "light" ? "#166534" : "#4ade80" : r === "light" ? "#333333" : "#cccccc",
            fontSize: "12px",
            fontWeight: c ? "600" : "500",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }} onMouseEnter={d => {
            c || (d.currentTarget.style.background = r === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)", d.currentTarget.style.color = r === "light" ? "#000000" : "#ffffff");
          }} onMouseLeave={d => {
            c || (d.currentTarget.style.background = "transparent", d.currentTarget.style.color = r === "light" ? "#333333" : "#cccccc");
          }}>
                      <span>{u.label}</span>
                      {c && <span style={{
              color: r === "light" ? "#166534" : "#4ade80",
              fontSize: "10px"
            }}>
                          ✓
                        </span>}
                    </button>
                  </li>;
      })}
            </ul>}
        </div>;
};

export { LanguageDropdown };
