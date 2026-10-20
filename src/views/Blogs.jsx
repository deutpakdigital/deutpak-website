"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import { blog01Img, blog02Img, blog03Img, blog04Img, blog05Img, blog06Img } from "@/lib/assets";
import Link from "@/components/RouterLink";
/* empty css                     */

const Blogs = () => {
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
                <h1 className="page-title">Blogs</h1>
                <ul className="page-list breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">{translations[s].menuHome}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blogs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section pd-top-70 pd-bottom-120">
        <div className="container">
          <div className="stylish-blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog06Img} alt="DeutPak Auto Mieten" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{translations[s].blog6Title}</h3>
                <p className="blog-text justify-content">{translations[s].blog6Detail1}</p>
                <div className="blog-meta">
                  <Link to="/driving-growth-in-2026" className="blog-readmore">
                    {translations[s].readMore}
                    {" →"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog05Img} alt="DeutPak Auto Mieten" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{translations[s].blog5Title}</h3>
                <p className="blog-text justify-content">{translations[s].blog5Detail1}</p>
                <div className="blog-meta">
                  <Link to="/building-scalable-digital-foundations" className="blog-readmore">
                    {translations[s].readMore}
                    {" →"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog04Img} alt="DeutPak Auto Mieten" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{translations[s].blog4Title}</h3>
                <p className="blog-text justify-content">{translations[s].blog4Detail1}</p>
                <div className="blog-meta">
                  <Link to="/turning-digital-strategy-into-measurable-results" className="blog-readmore">
                    {translations[s].readMore}
                    {" →"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog01Img} alt="DeutPak Auto Mieten" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{translations[s].blog1Title}</h3>
                <p className="blog-text justify-content">{translations[s].blog1Detail1}</p>
                <div className="blog-meta">
                  <Link to="/how-modern-businesses-stay-ahead" className="blog-readmore">
                    {translations[s].readMore}
                    {" →"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog02Img} alt="DeutPak Auto Mieten" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{translations[s].blog2Title}</h3>
                <p className="blog-text justify-content">{translations[s].blog2Detail1}</p>
                <div className="blog-meta">
                  <Link to="/development-is-the-new-competitive-advantage" className="blog-readmore">
                    {translations[s].readMore}
                    {" →"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog03Img} alt="DeutPak Auto Mieten" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{translations[s].blog3Title}</h3>
                <p className="blog-text justify-content">{translations[s].blog3Detail1}</p>
                <div className="blog-meta">
                  <Link to="/how-modern-businesses-stay-ahead" className="blog-readmore">
                    {translations[s].readMore}
                    {" →"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>;
};

export default Blogs;
