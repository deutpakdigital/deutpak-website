"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { digitalImg } from "@/lib/assets";
import { NumberCard } from "@/components/NumberCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const RANOperation = () => {
  const {
    language: t
  } = useLanguage();
  return <>
      <Navbar />
      <InnerHeader title={translations[t].menuRAN} head={translations[t].menuServices} />
      <ServiceIntro image={digitalImg} title={translations[t].ranTitle} subtitle={translations[t].ranHeading}>
        <br />
        {translations[t].ranDetail1} {translations[t].ranDetail2}
      </ServiceIntro>
      <section className="service-area pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">{translations[t].ranProcessHead}</h2>
                <p>{translations[t].ranProcessSubHead}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <NumberCard number="1" title={translations[t].ranStep1Title} details={translations[t].ranStep1Detail} />
            <NumberCard number="2" title={translations[t].ranStep2Title} details={translations[t].ranStep2Detail} />
            <NumberCard number="3" title={translations[t].ranStep3Title} details={translations[t].ranStep3Detail} />
            <NumberCard number="4" title={translations[t].ranStep4Title} details={translations[t].ranStep4Detail} />
            <NumberCard number="5" title={translations[t].ranStep5Title} details={translations[t].ranStep5Detail} />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default RANOperation;
