"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { smartmeetBanner } from "@/lib/assets";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const Finance = () => {
  const {
    language: i
  } = useLanguage();
  return <>
      <Navbar />
      <InnerHeader title="Financial System" head={translations[i].menuProducts} />
      <ServiceIntro image={smartmeetBanner} title={translations[i].finTitle} subtitle={translations[i].finHeading}>
        <br />
        {translations[i].finDetail1}
        <br />
        <br />
        <h4>{translations[i].benefits}</h4>
        <ul className="nx-inner mt-4">
          <li>
            <i className="far fa-check-circle" /> {translations[i].finBenefit1}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[i].finBenefit2}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[i].finBenefit3}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[i].finBenefit4}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[i].finBenefit5}
          </li>
        </ul>
      </ServiceIntro>
      <section className="service-area pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">{translations[i].finProcessHead}</h2>
                <p>{translations[i].finProcessSubHead}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <NumberCard number="1" title={translations[i].finStep1Title} details={translations[i].finStep1Detail} />
            <NumberCard number="2" title={translations[i].finStep2Title} details={translations[i].finStep2Detail} />
            <NumberCard number="3" title={translations[i].finStep3Title} details={translations[i].finStep3Detail} />
            <NumberCard number="4" title={translations[i].finStep4Title} details={translations[i].finStep4Detail} />
            <NumberCard number="5" title={translations[i].finStep5Title} details={translations[i].finStep5Detail} />
            <NumberCard number="6" title={translations[i].finStep6Title} details={translations[i].finStep6Detail} />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default Finance;
