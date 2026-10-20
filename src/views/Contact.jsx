"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import Link from "@/components/RouterLink";
const Contact = () => {
  const {
    language: a
  } = useLanguage();
  return <>
      <Navbar />
      <section className="breadcrumb-area text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="breadcrumb-inner">
                <h1 className="page-title">{translations[a].menuContact}</h1>
                <ul className="page-list breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">{translations[a].menuHome}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {translations[a].menuContact}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default Contact;
