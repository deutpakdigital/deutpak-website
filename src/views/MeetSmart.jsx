"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { smartmeetBanner } from "@/lib/assets";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const MeetSmart = () => {
  const {
    language: s
  } = useLanguage();
  return <>
      <Navbar />
      <InnerHeader title="Accounting System" head={translations[s].menuProducts} />
      <ServiceIntro image={smartmeetBanner} title={translations[s].msTitle} subtitle={translations[s].msHeading}>
        <br />
        {translations[s].msDetail1}
        <br />
        <br />
        <h4>{translations[s].benefits}</h4>
        <ul className="nx-inner mt-4">
          <li>
            <i className="far fa-check-circle" /> {translations[s].msBenefit1}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].msBenefit2}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].msBenefit3}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].msBenefit4}
          </li>
          <li>
            <i className="far fa-check-circle" />
            {"  "}
            {translations[s].msBenefit5}
          </li>
        </ul>
      </ServiceIntro>
      <section className="service-area pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">{translations[s].msProcessHead}</h2>
                <p>{translations[s].msProcessmsbHead}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <NumberCard number="1" title={translations[s].msStep1Title} details={translations[s].msStep1Detail} />
            <NumberCard number="2" title={translations[s].msStep2Title} details={translations[s].msStep2Detail} />
            <NumberCard number="3" title={translations[s].msStep3Title} details={translations[s].msStep3Detail} />
            <NumberCard number="4" title={translations[s].msStep4Title} details={translations[s].msStep4Detail} />
            <NumberCard number="5" title={translations[s].msStep5Title} details={translations[s].msStep5Detail} />
            <NumberCard number="6" title={translations[s].msStep6Title} details={translations[s].msStep6Detail} />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default MeetSmart;
