"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const m = "/assets/social-Df4NVPjK.png",
  SwiftPost = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title="MemoryQR" head={translations[s].menuProducts} />
        <ServiceIntro image={m} title={translations[s].swTitle} subtitle={translations[s].swHeading}>
          <br />
          {translations[s].swDetail1}
          <br />
          <br />
          <h4>{translations[s].benefits}</h4>
          <ul className="nx-inner mt-4">
            <li>
              <i className="far fa-check-circle" /> {translations[s].swBenefit1}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].swBenefit2}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].swBenefit3}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].swBenefit4}
            </li>
            <li>
              <i className="far fa-check-circle" />
              {"  "}
              {translations[s].swBenefit5}
            </li>
          </ul>
        </ServiceIntro>
        <section className="service-area pd-top-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{translations[s].swProcessHead}</h2>
                  <p>{translations[s].swProcessswbHead}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <NumberCard number="1" title={translations[s].swStep1Title} details={translations[s].swStep1Detail} />
              <NumberCard number="2" title={translations[s].swStep2Title} details={translations[s].swStep2Detail} />
              <NumberCard number="3" title={translations[s].swStep3Title} details={translations[s].swStep3Detail} />
              <NumberCard number="4" title={translations[s].swStep4Title} details={translations[s].swStep4Detail} />
              <NumberCard number="5" title={translations[s].swStep5Title} details={translations[s].swStep5Detail} />
              <NumberCard number="6" title={translations[s].swStep6Title} details={translations[s].swStep6Detail} />
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </>;
  };

export default SwiftPost;
