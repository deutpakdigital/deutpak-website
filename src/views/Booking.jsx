"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { smartmeetBanner } from "@/lib/assets";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const Booking = () => {
  const {
    language: s
  } = useLanguage();
  return <>
      <Navbar />
      <InnerHeader title="Booking System" head={translations[s].menuProducts} />
      <ServiceIntro image={smartmeetBanner} title={translations[s].boTitle} subtitle={translations[s].boHeading}>
        <br />
        {translations[s].boDetail1} {translations[s].boDetail2}
        <br />
        <br />
        <h4>{translations[s].benefits}</h4>
        <ul className="nx-inner mt-4">
          <li>
            <i className="far fa-check-circle" /> {translations[s].boBenefit1}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].boBenefit2}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].boBenefit3}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].boBenefit4}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].boBenefit5}
          </li>
        </ul>
      </ServiceIntro>
      <section className="service-area pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">{translations[s].finProcessHead}</h2>
                <p>{translations[s].boProcessmsbHead}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <NumberCard number="1" title={translations[s].boStep1Title} details={translations[s].boStep1Detail} />
            <NumberCard number="2" title={translations[s].boStep2Title} details={translations[s].boStep2Detail} />
            <NumberCard number="3" title={translations[s].boStep3Title} details={translations[s].boStep3Detail} />
            <NumberCard number="4" title={translations[s].boStep4Title} details={translations[s].boStep4Detail} />
            <NumberCard number="5" title={translations[s].boStep5Title} details={translations[s].boStep5Detail} />
            <NumberCard number="6" title={translations[s].boStep6Title} details={translations[s].boStep6Detail} />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default Booking;
