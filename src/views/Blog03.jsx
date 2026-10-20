"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { blog03Img } from "@/lib/assets";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const Blog03 = () => {
  const {
    language: t
  } = useLanguage();
  return <>
      <Navbar />
      <InnerHeader title={translations[t].blog3Title} head="Blogs" />
      <section className="about-area pd-top-110 pd-bottom-110 text-center text-lg-start">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-xl-7 col-lg-7 align-self-center">
              <div className="section-title style-2 mb-lg-0">
                {translations[t].blog3Detail1}
                <br />
                <br /> {translations[t].blog3Detail2}
                <br />
                <br />
                {translations[t].blog3Detail3}
                <br />
                <br /> {translations[t].blog3Detail4}
                <br />
                <br />
                {translations[t].blog3Detail5}
                <br />
                <br /> {translations[t].blog3Detail6}
                <br />
                <br />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8 ">
              <div className="thumb text-center">
                <img src={blog03Img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default Blog03;
