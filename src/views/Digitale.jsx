"use client";

import { logoGer, bgLandingDigital } from "@/lib/assets";
/* empty css                */

function Digitale() {
  return <div className="lp-container">
      <div className="lp-background">
        <div className="lp-background-wrapper">
          <img src={bgLandingDigital} alt="Background" className="lp-background-image" />
          <div className="lp-gradient-horizontal" />
          <div className="lp-gradient-vertical" />
        </div>
      </div>
      <div className="lp-content">
        <div className="lp-hero">
          <div className="lp-hero-container">
            <img src={logoGer} alt="Deutpak Logo" className="logo-small" />
            <div className="lp-grid">
              <div className="lp-text-content">
                <h1 className="lp-heading" style={{
                fontSize: "3rem"
              }}>
                  Kostenloses Digital
                  <span className="lp-heading-gradient" style={{
                  fontSize: "2.5rem"
                }}>
                    Audit jetzt!
                  </span>
                </h1>
                <h2 className="lp-subheading">
                  Unternehmen dabei unterstützen, ihre Abläufe mit
                  maßgeschneiderten Weblösungen zu revolutionieren.
                </h2>
                <ul className="lp-list">
                  <li>
                    <span>1️⃣</span>
                    {" Veraltete Systeme modernisieren"}
                  </li>
                  <li>
                    <span>2️⃣</span>
                    {" Wiederkehrende Prozesse automatisieren"}
                  </li>
                  <li>
                    <span>3️⃣</span>
                    {" Abläufe mit intelligenten, webbasierten Lösungen optimieren"}
                  </li>
                </ul>
                <p className="lp-text mt-5 text-[20px] text-white">
                  Das Ergebnis? Mehr Effizienz, mehr Agilität und mehr Wachstum
                  in einer digital-first Wirtschaft.
                </p>
              </div>
              <div className="grid grid-cols-1 items-center txtpadding">
                <div>
                  <h2 className="text-xl font-bold text-white" style={{
                  fontSize: "30px"
                }}>
                    {" Bereit, Ihr Unternehmen zukunftssicher zu machen?"}
                  </h2>
                  <div className="klaviyo-form-Sq8xgm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default Digitale;
