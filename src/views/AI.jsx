"use client";

import { logoEng, bgLandingAI } from "@/lib/assets";
/* empty css                */

function AI() {
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
            <img src={logoEng} alt="Deutpak Logo" className="logo-small" />
            <div className="lp-grid">
              <div className="lp-text-content">
                <h1 className="lp-heading">
                  Free AI Adoption
                  <span className="lp-heading-gradient">Consultancy!</span>
                </h1>
                <h2 className="lp-subheading">
                  AI isn’t just for big enterprises anymore. Small businesses
                  can now adopt AI to:
                </h2>
                <ul className="lp-list">
                  <li>
                    <span>1️⃣</span>
                    {" Automate repetitive tasks"}
                  </li>
                  <li>
                    <span>2️⃣</span>
                    {" Improve customer support with chatbots"}
                  </li>
                  <li>
                    <span>3️⃣</span>
                    {" Personalize marketing at scale"}
                  </li>
                  <li>
                    <span>4️⃣</span>
                    {" Gain faster insights from data"}
                  </li>
                  <li>
                    <span>5️⃣</span>
                    {" Save time & cut costs"}
                  </li>
                </ul>
                <p className="lp-text mt-5 text-[20px] text-white">
                  {"With the right tools, AI becomes your "}
                  <em>unfair advantage</em>
                  {" — helping you work smarter, not harder."}
                </p>
              </div>
              <div className="grid grid-cols-1 items-center txtpadding">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Ready to explore how AI can fit into your business?
                  </h2>
                  <div className="klaviyo-form-YxXfAR" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default AI;
