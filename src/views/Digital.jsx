"use client";

import { logoEng, bgLandingDigital } from "@/lib/assets";
/* empty css                */

function Digital() {
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
            <img src={logoEng} alt="Deutpak Logo" className="logo-small" />
            <div className="lp-grid">
              <div className="lp-text-content">
                <h1 className="lp-heading">
                  Get Free Digital
                  <span className="lp-heading-gradient">Audit Today!</span>
                </h1>
                <h2 className="lp-subheading">
                  Helping businesses revolutionize operations with tailored web
                  solutions.
                </h2>
                <ul className="lp-list">
                  <li>
                    <span>1️⃣</span>
                    {" Modernize outdated systems"}
                  </li>
                  <li>
                    <span>2️⃣</span>
                    {" Automate repetitive processes"}
                  </li>
                  <li>
                    <span>3️⃣</span>
                    {" Optimize operations with smart, web-based solutions"}
                  </li>
                </ul>
                <p className="lp-text mt-5 text-[20px] text-white">
                  The result? More efficiency, more agility, and more growth in
                  a digital-first economy.
                </p>
              </div>
              <div className="grid grid-cols-1 items-center txtpadding">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Ready to future-proof your business?
                  </h2>
                  <div className="klaviyo-form-VmVkQC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default Digital;
