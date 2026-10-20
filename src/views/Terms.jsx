"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import Link from "@/components/RouterLink";
const Terms = () => {
  const {
    language: s
  } = useLanguage();
  return <>
      <Navbar />
      <section className="breadcrumb-area text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="breadcrumb-inner">
                <h1 className="page-title">{translations[s].termsandcondition}</h1>
                <ul className="page-list breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">{translations[s].menuHome}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {translations[s].termsandcondition}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area pd-top-110 bg-gray-50 text-gray-800 ">
        <div className="container mx-auto">
          <div className="row justify-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title style-2 mb-12">
                <h4 className="sub-title text-blue-600 text-lg font-semibold">
                  {translations[s].termsandconditionsubHeading}
                </h4>
                <div className="max-w-5xl pl-16 pr-6 py-12 bg-white ">
                  <h2 className="privacy-page text-3xl font-bold mb-6" style={{
                  marginTop: "39px"
                }}>
                    {translations[s].termsandcondition}
                  </h2>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    {translations[s].termsandconditionsubHeading1}{" "}
                    <a href="https://deutpakdigital.com" className="text-blue-600 hover:underline">
                      {" deutpakdigital.com"}
                    </a>
                    {translations[s].termsandconditionsubHeading2}
                  </p>
                  {[{
                  title: translations[s].useofwebsite,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].useofwebsite1}</li>
                          <li>{translations[s].useofwebsite2}</li>
                          <li>{translations[s].useofwebsite3}</li>
                        </ul>
                }, {
                  title: translations[s].intellectualproperty,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].intellectualproperty1}</li>
                          <li>{translations[s].intellectualproperty2}</li>
                        </ul>
                }, {
                  title: translations[s].thirdPartyLinks,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].thridpartylinks1}</li>
                          <li>{translations[s].thridpartylinks2}</li>
                          <li>{translations[s].thridpartylinks3}</li>
                        </ul>
                }, {
                  title: translations[s].disclaimer,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].disclaimer1}</li>
                          <li>{translations[s].disclaimer2}</li>
                          <li>{translations[s].disclaimer3}</li>
                        </ul>
                }, {
                  title: translations[s].limitationofliability,
                  content: <p className="text-gray-700">
                          {translations[s].limitationofliability1}
                        </p>
                }, {
                  title: translations[s].changetotermsandcondition,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].changetotermsandcondition1}</li>
                          <li>{translations[s].changetotermsandcondition2}</li>
                          <li>{translations[s].changetotermsandcondition3}</li>
                        </ul>
                }, {
                  title: translations[s].governinglaw,
                  content: <p className="text-gray-700">{translations[s].governinglaw1}</p>
                }].map((t, l) => <section style={{
                  marginTop: "39px"
                }} key={l}>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {t.title}
                      </h3>
                      {t.content}
                    </section>)}
                  <section className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <p className="text-gray-800 font-semibold">
                      <strong>{translations[s].acknowledgment}</strong>{" "}
                      {translations[s].termsandconditionseffective1}
                    </p>
                    <br />
                    <b>{translations[s].Dated}:03.02.2025</b>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-area pd-top-120" />
      <ContactSection />
      <Footer />
    </>;
};

export default Terms;
