"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import Link from "@/components/RouterLink";
const Privacy = () => {
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
                <h1 className="page-title">{translations[s].privicyTitle}</h1>
                <ul className="page-list breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">{translations[s].menuHome}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {translations[s].privicyTitle}
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
                  {translations[s].privcySubHeading}
                </h4>
                <div className="max-w-5xl pl-16 pr-6 py-12 bg-white ">
                  <h2 className="privacy-page text-3xl font-bold mb-6" style={{
                  marginTop: "39px"
                }}>
                    {translations[s].privicyTitle}
                  </h2>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    {translations[s].privcyDetail1}
                    <a href="https://deutpakdigital.com" className="text-blue-600 hover:underline">
                      {" deutpakdigital.com"}
                    </a>
                    .
                  </p>
                  {[{
                  title: translations[s].informationWeCollect,
                  content: <ul className="list-disc text-gray-700">
                          <li>
                            <strong>{translations[s].contactInformation1}:</strong>{" "}
                            {translations[s].contactInformation}
                          </li>
                          <li>
                            <strong>{translations[s].technicalData1}:</strong>
                            {translations[s].technicalData}
                          </li>
                          <li>
                            <strong>{translations[s].cookiesAndTrackingData1}:</strong>{" "}
                            {translations[s].cookiesAndTrackingData}
                          </li>
                        </ul>
                }, {
                  title: translations[s].howWeUseYourInformation2,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].respondToInquiries2}</li>
                          <li>{translations[s].improveServices2}</li>
                          <li>{translations[s].legalCompliance2}</li>
                          <li>{translations[s].sendCommunications2}</li>
                        </ul>
                }, {
                  title: translations[s].datasharing,
                  content: <ul className="list-disc text-gray-700">
                          <li>{translations[s].datasharing1}</li>
                          <li>{translations[s].datasharing2}</li>
                          <li>{translations[s].datasharing3}</li>
                        </ul>
                }, {
                  title: translations[s].dataSecurity,
                  content: <>
                          <p className="text-gray-700">{translations[s].dataSecurity1}</p>
                          <p className="text-gray-700">{translations[s].dataSecurity2}</p>
                        </>
                }, {
                  title: translations[s].yourRights,
                  content: <>
                          <p className="text-gray-700">{translations[s].yourRights1}</p>
                          <ul className="list-disc text-gray-700">
                            <li>{translations[s].yourRights2}</li>
                            <li>{translations[s].yourRights3}</li>
                            <li>{translations[s].yourRights4}</li>
                            <li>{translations[s].yourRights5}</li>
                            <li>{translations[s].yourRights6}</li>
                          </ul>
                          <p className="text-gray-700">
                            {translations[s].yourRights7}{" "}
                            <a href="mailto:info@deutpakdigital.com" className="text-blue-600 hover:underline">
                              info@deutpakdigital.com
                            </a>
                          </p>
                        </>
                }, {
                  title: translations[s].dataRetention,
                  content: <p className="text-gray-700">{translations[s].dataRetention1}</p>
                }, {
                  title: translations[s].thirdPartyLinks,
                  content: <p className="text-gray-700">{translations[s].thirdPartyLink1}</p>
                }, {
                  title: translations[s].changesPrivacyPolicy,
                  content: <p className="text-gray-700">
                          {translations[s].changesPrivacyPolicy1}
                        </p>
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
                      <strong>{translations[s].acknowledgment}</strong>
                      {translations[s].changesPrivacyPolicy2}
                    </p>
                  </section>
                  {[{
                  title: translations[s].cookiePolicy,
                  content: <p className="text-gray-700">{translations[s].cookiePolicy1}</p>
                }, {
                  title: translations[s].whatareCookies,
                  content: <p className="text-gray-700">{translations[s].whatareCookies1}</p>
                }, {
                  title: translations[s].typesofCookiesweuse2,
                  content: <ul className="list-disc text-gray-700" style={{
                    listStyleType: "none"
                  }}>
                          <li>
                            <strong>{translations[s].necessaryCookies1}</strong>
                            <ul className="list-disc text-gray-700">
                              <li>{translations[s].necessaryCookies2}</li>
                              <li>{translations[s].necessaryCookies2}</li>
                            </ul>
                          </li>
                          <li>
                            <strong>{translations[s].performanceAnalyticsCookies1}</strong>
                            <ul className="list-disc text-gray-700">
                              <li>{translations[s].performanceAnalyticsCookies2}</li>
                              <li>{translations[s].performanceAnalyticsCookies3}</li>
                            </ul>
                          </li>
                          <li>
                            <strong>{translations[s].fnctionalCookies}</strong>
                            <ul className="list-disc text-gray-700">
                              <li>{translations[s].fnctionalCookies1}</li>
                              <li>{translations[s].fnctionalCookies2}</li>
                            </ul>
                          </li>
                          <li>
                            <strong>{translations[s].marketingAdvertisingCookies}</strong>
                            <ul className="list-disc text-gray-700">
                              <li>{translations[s].marketingAdvertisingCookies1}</li>
                              <li>{translations[s].marketingAdvertisingCookies2}</li>
                            </ul>
                          </li>
                        </ul>
                }, {
                  title: translations[s].thridpartycookies,
                  content: <p className="text-gray-700">
                          {translations[s].thridpartycookies1}
                        </p>
                }, {
                  title: translations[s].manageCookies,
                  content: <>
                          <p className="text-gray-700">{translations[s].manageCookies1}</p>
                          <p className="text-gray-700">
                            {translations[s].managebrowsersettings}
                          </p>
                          <ul className="list-disc text-gray-700">
                            <li>{translations[s].manageCookies2}</li>
                            <li>{translations[s].manageCookies3}</li>
                            <li>{translations[s].manageCookies4}</li>
                          </ul>
                        </>
                }, {
                  title: translations[s].changestocookiePolicy,
                  content: <p className="text-gray-700">
                          {translations[s].changestocookiePolicy1}
                        </p>
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
                      <strong>{translations[s].acknowledgment}</strong>
                      {translations[s].contactus4}
                    </p>
                  </section>
                  <br />
                  <b>{translations[s].Dated}:03.02.2025</b>
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

export default Privacy;
