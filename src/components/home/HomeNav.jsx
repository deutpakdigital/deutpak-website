"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { logoEng } from "@/lib/assets";
import { translations } from "@/i18n";
import { LanguageDropdown } from "@/components/LanguageDropdown";

const HomeNavBase = ({
  currentPage: r,
  totalPages: e,
  scrollToPage: t,
  theme: n,
  toggleTheme: i
}) => {
  const [a, o] = React.useState(!1),
    {
      language: l
    } = useLanguage();
  React.useEffect(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]);
  const u = c => {
    t(c), o(!1);
  };
  return <>
        <nav id="nav" className={`dd-nav ${r >= 1 ? "vis" : ""}`} dir="ltr" style={{
      pointerEvents: "auto"
    }}>
          <div className="logo">
            <img src={logoEng} alt="DeutPak Digital Logo" className="nav-logo-img" />
          </div>
          <ul className="nav-links" style={{
        display: "flex",
        alignItems: "center"
      }}>
            <li className="has-dropdown desktop-only-link">
              <span className="nav-btn-link">
                {translations[l].menuAbout} <span className="dd-arrow">▼</span>
              </span>
              <div className="nav-dropdown">
                <button className="nav-dropdown-item" onClick={() => t(4)}>
                  {translations[l].navOverview}
                </button>
                <button className="nav-dropdown-item" onClick={() => t(5)}>
                  {translations[l].navWhoWeAre}
                </button>
                <button className="nav-dropdown-item" onClick={() => t(6)}>
                  {translations[l].navHowWeWork}
                </button>
                <button className="nav-dropdown-item" onClick={() => t(7)}>
                  {translations[l].navCoreValues}
                </button>
                <button className="nav-dropdown-item" onClick={() => t(8)}>
                  {translations[l].navMeetTeam}
                </button>
              </div>
            </li>
            <li className="has-dropdown desktop-only-link">
              <span className="nav-btn-link">
                {translations[l].navSolutions} <span className="dd-arrow">▼</span>
              </span>
              <div className="nav-dropdown">
                <button className="nav-dropdown-item" onClick={() => t(11)}>
                  {translations[l].navServices}
                </button>
                <button className="nav-dropdown-item" onClick={() => t(12)}>
                  {translations[l].navProducts}
                </button>
              </div>
            </li>
            <li className="desktop-only-link">
              <a href="https://deutpak.com" target="_blank" rel="noopener noreferrer" className="nav-btn-link" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            color: "var(--accent)",
            fontWeight: 600,
            fontSize: "0.88rem",
            textDecoration: "none",
            padding: "0.4rem 0.75rem",
            borderRadius: "6px",
            background: "rgba(212, 175, 55, 0.08)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            transition: "all 0.3s ease"
          }}>
                <span>{translations[l].mobilityDivision}</span>
                <span style={{
              fontSize: "0.75rem"
            }}>
                  ↗
                </span>
              </a>
            </li>
            <li className="desktop-only-link">
              <a className="nav-cta" onClick={() => t(13)}>
                {translations[l].navLetsBuild}
              </a>
            </li>
            <li className="desktop-only-link">
              <button className="theme-toggle-nav-btn" onClick={i} aria-label="Toggle Theme">
                <div className="icon-wrapper">
                  <span className={`theme-icon sun-icon ${n === "dark" ? "active" : "inactive"}`}>
                    ☀️
                  </span>
                  <span className={`theme-icon moon-icon ${n === "light" ? "active" : "inactive"}`}>
                    🌙
                  </span>
                </div>
              </button>
            </li>
            <li className="desktop-only-link" style={{
          marginLeft: "10px"
        }}>
              <LanguageDropdown theme={n} />
            </li>
            <li className="hamburger-wrapper d-lg-none">
              <button className={`hamburger-toggle-btn ${a ? "open" : ""}`} onClick={() => o(!a)} aria-label="Toggle mobile menu">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </button>
            </li>
          </ul>
        </nav>
        <div className={`mobile-menu-drawer ${a ? "open" : ""}`} style={{
      display: a ? "flex" : "none"
    }}>
          <div className="mobile-menu-header">
            <img src={logoEng} alt="DeutPak Digital Logo" style={{
          height: "50px",
          objectFit: "contain"
        }} />
            <button className="mobile-menu-close" onClick={() => o(!1)} aria-label="Close menu">
              ✕
            </button>
          </div>
          <div className="mobile-menu-controls" style={{
        display: "flex",
        alignItems: "center",
        gap: "15px"
      }}>
            <button className="theme-toggle-nav-btn" onClick={() => {
          i(), o(!1);
        }} aria-label="Toggle Theme">
              <div className="icon-wrapper">
                <span className={`theme-icon sun-icon ${n === "dark" ? "active" : "inactive"}`}>
                  ☀️
                </span>
                <span className={`theme-icon moon-icon ${n === "light" ? "active" : "inactive"}`}>
                  🌙
                </span>
              </div>
            </button>
            <LanguageDropdown theme={n} />
          </div>
          <div className="mobile-menu-items">
            <div className="mobile-menu-group">
              <h3>{translations[l].menuAbout}</h3>
              <button className="mobile-menu-drawer-item" onClick={() => u(4)}>
                {translations[l].navOverview}
              </button>
              <button className="mobile-menu-drawer-item" onClick={() => u(5)}>
                {translations[l].navWhoWeAre}
              </button>
              <button className="mobile-menu-drawer-item" onClick={() => u(6)}>
                {translations[l].navHowWeWork}
              </button>
              <button className="mobile-menu-drawer-item" onClick={() => u(7)}>
                {translations[l].navCoreValues}
              </button>
              <button className="mobile-menu-drawer-item" onClick={() => u(8)}>
                {translations[l].navMeetTeam}
              </button>
            </div>
            <div className="mobile-menu-group">
              <h3>{translations[l].navSolutions}</h3>
              <button className="mobile-menu-drawer-item" onClick={() => u(11)}>
                {translations[l].navServices}
              </button>
              <button className="mobile-menu-drawer-item" onClick={() => u(12)}>
                {translations[l].navProducts}
              </button>
            </div>
            <div className="mobile-menu-group" style={{
          marginTop: "1rem"
        }}>
              <a href="https://deutpak.com" target="_blank" rel="noopener noreferrer" className="mobile-menu-drawer-item" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--accent)",
            fontWeight: 600,
            textDecoration: "none"
          }}>
                {translations[l].mobilityDivision}
                {" ↗"}
              </a>
            </div>
            <div className="mobile-menu-group" style={{
          marginTop: "2rem",
          paddingBottom: "2rem"
        }}>
              <button className="mobile-menu-cta" onClick={() => u(13)}>
                {translations[l].navLetsBuild}
              </button>
            </div>
          </div>
        </div>
        <div id="side-dots">
          {Array.from({
        length: e
      }).map((c, d) => <button className={`sdot ${r === d ? "active" : ""}`} onClick={() => t(d)} aria-label={`Scroll to page ${d + 1}`} key={d} />)}
        </div>
      </>;
};

const HomeNav = React.memo(HomeNavBase);

export { HomeNav };
