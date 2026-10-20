"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const o = "/assets/social-Df4NVPjK.png",
  SocialMediaManagement = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[s].menuSocial} head={translations[s].menuServices} />
        <ServiceIntro image={o} title={translations[s].smTitle} subtitle={translations[s].smHeading}>
          <br />
          {translations[s].smDetail1}
          <br />
          <br />
          {translations[s].smDetail2}
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[s].smProcessHead}</h2>
                  <p>{translations[s].smProcessSubHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[s].smStep1Title} details={translations[s].smStep1Detail} />
              <NumberCard number="2" title={translations[s].smStep2Title} details={translations[s].smStep2Detail} />
              <NumberCard number="3" title={translations[s].smStep3Title} details={translations[s].smStep3Detail} />
              <NumberCard number="4" title={translations[s].smStep4Title} details={translations[s].smStep4Detail} />
              <NumberCard number="5" title={translations[s].smStep5Title} details={translations[s].smStep5Detail} />
              <NumberCard number="6" title={translations[s].smStep6Title} details={translations[s].smStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default SocialMediaManagement;
