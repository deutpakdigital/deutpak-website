"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { digitalImg } from "@/lib/assets";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const DigitalTransformation = () => {
  const {
    language: e
  } = useLanguage();
  return <>
      <Navbar />
      <InnerHeader title={translations[e].menuDigital} head={translations[e].menuServices} />
      <ServiceIntro image={digitalImg} title={translations[e].dtTitle} subtitle={translations[e].dtHeading}>
        <br />
        {translations[e].dtDetail1}
        <br />
        <br />
        {translations[e].dtDetail2}
      </ServiceIntro>
      <section className="service-area pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">{translations[e].dtProcessHead}</h2>
                <p>{translations[e].dtProcessSubHead}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <NumberCard number="1" title={translations[e].dtStep1Title} details={translations[e].dtStep1Detail} />
            <NumberCard number="2" title={translations[e].dtStep2Title} details={translations[e].dtStep2Detail} />
            <NumberCard number="3" title={translations[e].dtStep3Title} details={translations[e].dtStep3Detail} />
            <NumberCard number="4" title={translations[e].dtStep4Title} details={translations[e].dtStep4Detail} />
            <NumberCard number="5" title={translations[e].dtStep5Title} details={translations[e].dtStep5Detail} />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default DigitalTransformation;
