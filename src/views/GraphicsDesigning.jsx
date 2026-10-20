"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const o = "/assets/graphics-DP5rDLRH.png",
  GraphicsDesigning = () => {
    const {
      language: t
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[t].menuGraphics} head={translations[t].menuServices} />
        <ServiceIntro image={o} title={translations[t].gdTitle} subtitle={translations[t].gdHeading}>
          <br />
          {translations[t].gdDetail1}
          <br />
          <br />
          {translations[t].gdDetail2}
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[t].gdProcessHead}</h2>
                  <p>{translations[t].gdProcessSubHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[t].gdStep1Title} details={translations[t].gdStep1Detail} />
              <NumberCard number="2" title={translations[t].gdStep2Title} details={translations[t].gdStep2Detail} />
              <NumberCard number="3" title={translations[t].gdStep3Title} details={translations[t].gdStep3Detail} />
              <NumberCard number="4" title={translations[t].gdStep4Title} details={translations[t].gdStep4Detail} />
              <NumberCard number="5" title={translations[t].gdStep5Title} details={translations[t].gdStep5Detail} />
              <NumberCard number="6" title={translations[t].gdStep6Title} details={translations[t].gdStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default GraphicsDesigning;
