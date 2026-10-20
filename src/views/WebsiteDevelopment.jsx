"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const c = "/assets/web-B3rdsp5Y.png",
  WebsiteDevelopment = () => {
    const {
      language: t
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[t].menuWeb} head={translations[t].menuServices} />
        <ServiceIntro image={c} title={translations[t].wdTitle} subtitle={translations[t].wdHeading}>
          <br />
          {translations[t].wdDetail1}
          <br />
          <br />
          {translations[t].wdDetail2}
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[t].wdProcessHead}</h2>
                  <p>{translations[t].wdProcessSubHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[t].wdStep1Title} details={translations[t].wdStep1Detail} />
              <NumberCard number="2" title={translations[t].wdStep2Title} details={translations[t].wdStep2Detail} />
              <NumberCard number="3" title={translations[t].wdStep3Title} details={translations[t].wdStep3Detail} />
              <NumberCard number="4" title={translations[t].wdStep4Title} details={translations[t].wdStep4Detail} />
              <NumberCard number="5" title={translations[t].wdStep5Title} details={translations[t].wdStep5Detail} />
              <NumberCard number="6" title={translations[t].wdStep6Title} details={translations[t].wdStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default WebsiteDevelopment;
