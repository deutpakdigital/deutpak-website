"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const m = "/assets/clientpulse-banner-QKkOf5Fk.png",
  ClientPulse = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title="Attendance System" head={translations[s].menuProducts} />
        <ServiceIntro image={m} title={translations[s].cpTitle} subtitle={translations[s].cpHeading}>
          <br />
          {translations[s].cpDetail1}
          <br />
          <br />
          <h4>{translations[s].benefits}</h4>
          <ul className="nx-inner mt-4">
            <li>
              <i className="far fa-check-circle" /> {translations[s].cpBenefit1}{" "}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cpBenefit2}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cpBenefit3}{" "}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cpBenefit4}{" "}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].cpBenefit5}{" "}
            </li>
          </ul>
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[s].cpProcessHead}</h2>
                  <p>{translations[s].cpProcesscpbHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[s].cpStep1Title} details={translations[s].cpStep1Detail} />
              <NumberCard number="2" title={translations[s].cpStep2Title} details={translations[s].cpStep2Detail} />
              <NumberCard number="3" title={translations[s].cpStep3Title} details={translations[s].cpStep3Detail} />
              <NumberCard number="4" title={translations[s].cpStep4Title} details={translations[s].cpStep4Detail} />
              <NumberCard number="5" title={translations[s].cpStep5Title} details={translations[s].cpStep5Detail} />
              <NumberCard number="6" title={translations[s].cpStep6Title} details={translations[s].cpStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default ClientPulse;
