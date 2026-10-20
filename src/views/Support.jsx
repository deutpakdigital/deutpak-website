"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const c = "/assets/support-BySQigQ6.png",
  Support = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[s].menuSupport} head={translations[s].menuServices} />
        <ServiceIntro image={c} title={translations[s].suTitle} subtitle={translations[s].suHeading}>
          <br />
          {translations[s].suDetail1}
          <br />
          <br />
          {translations[s].suDetail2}
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[s].suProcessHead}</h2>
                  <p>{translations[s].suProcessSubHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[s].suStep1Title} details={translations[s].suStep1Detail} />
              <NumberCard number="2" title={translations[s].suStep2Title} details={translations[s].suStep2Detail} />
              <NumberCard number="3" title={translations[s].suStep3Title} details={translations[s].suStep3Detail} />
              <NumberCard number="4" title={translations[s].suStep4Title} details={translations[s].suStep4Detail} />
              <NumberCard number="5" title={translations[s].suStep5Title} details={translations[s].suStep5Detail} />
              <NumberCard number="6" title={translations[s].suStep6Title} details={translations[s].suStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default Support;
