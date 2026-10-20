"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const c = "/assets/mobile-DsfJocIU.png",
  MobileDevelopment = () => {
    const {
      language: t
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[t].menuMobile} head={translations[t].menuServices} />
        <ServiceIntro image={c} title={translations[t].maTitle} subtitle={translations[t].maHeading}>
          <br />
          {translations[t].maDetail1}
          <br />
          <br />
          {translations[t].maDetail2}
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[t].maProcessHead}</h2>
                  <p>{translations[t].maProcessSubHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[t].maStep1Title} details={translations[t].maStep1Detail} />
              <NumberCard number="2" title={translations[t].maStep2Title} details={translations[t].maStep2Detail} />
              <NumberCard number="3" title={translations[t].maStep3Title} details={translations[t].maStep3Detail} />
              <NumberCard number="4" title={translations[t].maStep4Title} details={translations[t].maStep4Detail} />
              <NumberCard number="5" title={translations[t].maStep5Title} details={translations[t].maStep5Detail} />
              <NumberCard number="6" title={translations[t].maStep6Title} details={translations[t].maStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default MobileDevelopment;
