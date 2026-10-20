"use client";

import { logoGer, bgLandingAI } from "@/lib/assets";
/* empty css                */

function KI() {
  return <div className="lp-container">
      <div className="lp-background">
        <div className="lp-background-wrapper">
          <img src={bgLandingAI} alt="Background" className="lp-background-image" />
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
                <h1 className="lp-heading">
                  Kostenlose
                  <span className="lp-heading-gradient">KI-Beratung!</span>
                </h1>
                <h2 className="lp-subheading">
                  KI ist nicht mehr nur etwas für Großunternehmen. Auch kleine
                  Unternehmen können KI jetzt nutzen, um:
                </h2>
                <ul className="lp-list">
                  <li>
                    <span>1️⃣</span>
                    {" Wiederkehrende Aufgaben automatisieren"}
                  </li>
                  <li>
                    <span>2️⃣</span>
                    {" Kundensupport mit Chatbots verbessern"}
                  </li>
                  <li>
                    <span>3️⃣</span>
                    {" Marketing in großem Maßstab personalisieren"}
                  </li>
                  <li>
                    <span>4️⃣</span>
                    {" Schnellere Erkenntnisse aus Daten gewinnen"}
                  </li>
                  <li>
                    <span>5️⃣</span>
                    {" Zeit sparen & Kosten senken"}
                  </li>
                </ul>
                <p className="lp-text mt-5 text-[20px] text-white">
                  {"Mit den richtigen Tools wird KI zu Ihrem "}
                  <em>{" unfairen Vorteil"}</em>
                  {" — sie unterstützt Sie dabei, effizienter statt mühsamer zu arbeiten."}
                </p>
              </div>
              <div className="grid grid-cols-1 items-center txtpadding">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Bereit zu entdecken, wie KI Ihr Unternehmen voranbringen
                    kann?
                  </h2>
                  <div className="klaviyo-form-Rxr98Q" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default KI;
