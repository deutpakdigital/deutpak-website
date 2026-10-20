"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const m = "/assets/chatterbox-banner-oxK_OOyZ.png",
  ChatterBox = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title="HR System" head={translations[s].menuProducts} />
        <ServiceIntro image={m} title={translations[s].cbTitle} subtitle={translations[s].cbHeading}>
          <br />
          {translations[s].cbDetail1}
          <br />
          <br />
          <h4>{translations[s].benefits}</h4>
          <ul className="nx-inner mt-4">
            <li>
              <i className="far fa-check-circle" /> {translations[s].cbBenefit1}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cbBenefit2}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cbBenefit3}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cbBenefit4}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cbBenefit5}
            </li>
          </ul>
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[s].cbProcessHead}</h2>
                  <p>{translations[s].cbProcesscbbHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[s].cbStep1Title} details={translations[s].cbStep1Detail} />
              <NumberCard number="2" title={translations[s].cbStep2Title} details={translations[s].cbStep2Detail} />
              <NumberCard number="3" title={translations[s].cbStep3Title} details={translations[s].cbStep3Detail} />
              <NumberCard number="4" title={translations[s].cbStep4Title} details={translations[s].cbStep4Detail} />
              <NumberCard number="5" title={translations[s].cbStep5Title} details={translations[s].cbStep5Detail} />
              <NumberCard number="6" title={translations[s].cbStep6Title} details={translations[s].cbStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default ChatterBox;
