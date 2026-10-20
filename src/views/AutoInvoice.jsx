"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const m = "/assets/autoinvoice-banner-X1Rh2lgg.png",
  AutoInvoice = () => {
    const {
      language: i
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title="Car Rental System" head={translations[i].menuProducts} />
        <ServiceIntro image={m} title={translations[i].aiTitle} subtitle={translations[i].aiHeading}>
          <br />
          {translations[i].aiDetail1}
          <br />
          <br />
          <h4>{translations[i].benefits}</h4>
          <ul className="nx-inner mt-4">
            <li>
              <i className="far fa-check-circle" /> {translations[i].aiBenefit1}
            </li>
            <li>
              <i className="far fa-check-circle" /> {translations[i].aiBenefit2}
            </li>
            <li>
              <i className="far fa-check-circle" /> {translations[i].aiBenefit3}{" "}
            </li>
            <li>
              <i className="far fa-check-circle" /> {translations[i].aiBenefit4}{" "}
            </li>
            <li>
              <i className="far fa-check-circle" /> {translations[i].aiBenefit5}
            </li>
          </ul>
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[i].aiProcessHead}</h2>
                  <p>{translations[i].aiProcessaibHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[i].aiStep1Title} details={translations[i].aiStep1Detail} />
              <NumberCard number="2" title={translations[i].aiStep2Title} details={translations[i].aiStep2Detail} />
              <NumberCard number="3" title={translations[i].aiStep3Title} details={translations[i].aiStep3Detail} />
              <NumberCard number="4" title={translations[i].aiStep4Title} details={translations[i].aiStep4Detail} />
              <NumberCard number="5" title={translations[i].aiStep5Title} details={translations[i].aiStep5Detail} />
              <NumberCard number="6" title={translations[i].aiStep6Title} details={translations[i].aiStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default AutoInvoice;
