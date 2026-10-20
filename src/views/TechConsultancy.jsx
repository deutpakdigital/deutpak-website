"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { ServiceIntro } from "@/components/ServiceIntro";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const m = "/assets/consultency-CUGTGRxO.png",
  TechConsultancy = () => {
    const {
      language: e
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[e].menuTech} head={translations[e].menuServices} />
        <ServiceIntro image={m} title={translations[e].techTitle} subtitle={translations[e].techHeading}>
          <br />
          {translations[e].techDetail1}
          <br />
          <br />
          {translations[e].techDetail2}
        </ServiceIntro>
        <ContactSection />
        <Footer />
      </>;
  };

export default TechConsultancy;
