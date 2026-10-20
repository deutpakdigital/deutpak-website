"use client";

import { useLanguage } from "@/context/LanguageContext";
import { logoEng, logoGer } from "@/lib/assets";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { translations } from "@/i18n";
import * as React from "react";
import Link from "@/components/RouterLink";
const d = "/assets/deutpak-logo_arb-CSITLNhQ.png",
  Navbar = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const [s, h] = React.useState(!1),
      {
        language: i
      } = useLanguage();
    return <>
        <div className="body-overlay" id="body-overlay" />
        <header className="navbar-area style-4" dir="ltr">
          <nav className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button className={`menu toggle-btn d-block d-lg-none ${s ? "menu toggle-btn d-block d-lg-none open" : "menu toggle-btn d-block d-lg-none"}`} data-target="#themefie_main_menu" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
                h(!s);
              }}>
                  <span className="icon-left" />
                  <span className="icon-right" />
                </button>
              </div>
              <div className="logo">
                <Link to="/" className="main-logo">
                  <img src={i === "ar" ? d : i === "de" ? logoGer : logoEng} alt="Deutpak Logo" style={{
                  width: "280px",
                  height: "auto",
                  display: "block"
                }} />
                </Link>
              </div>
              <div className="nav-right-part nav-right-part-mobile" style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
                <LanguageDropdown />
              </div>
              <div className={`collapse navbar-collapse ${s ? "collapse navbar-collapse sopen" : "collapse navbar-collapse"}`}>
                <ul className="navbar-nav menu-open text-end">
                  <li className="current-menu-item">
                    <Link to="/">{translations[i].menuHome}</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">{translations[i].menuAbout}</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/about">Who we Are</Link>
                      </li>
                      <li>
                        <Link to="/how-we-work">How we work</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/services">{translations[i].menuServices}</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/product-engineering">
                          Product & Application Engineering
                        </Link>
                      </li>
                      <li>
                        <Link to="/data-architecture">
                          Data, BI & Solution Architecture
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/products">{translations[i].menuProducts}</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/smart-clinic-erp">Smart Clinic ERP</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">{translations[i].menuContact}</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-right-part nav-right-part-desktop" style={{
              display: "flex",
              alignItems: "center",
              marginInlineStart: "20px"
            }}>
                <LanguageDropdown />
              </div>
            </div>
          </nav>
        </header>
      </>;
  },
  Footer = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <footer className="footer-area style-2">
          <div className="footer-inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-6">
                  <div className="footer-widget widget widget_link">
                    <h6 className="widget-title">{translations[s].menuCompany}</h6>
                    <ul>
                      <li>
                        <a href="/about-us">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuAbout}
                        </a>
                      </li>
                      <li>
                        <a href="/workflow">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuWorkflow}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-3 col-6">
                  <div className="footer-widget widget widget_link">
                    <h6 className="widget-title">{translations[s].menuServices}</h6>
                    <ul>
                      <li>
                        <a href="/digital-transformation">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuDigital}
                        </a>
                      </li>
                      <li>
                        <a href="/graphics-designing">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuGraphics}
                        </a>
                      </li>
                      <li>
                        <a href="/mobile-app-development">
                          {" "}
                          <i className="fas fa-angle-right" />
                          {translations[s].menuMobile}
                        </a>
                      </li>
                      <li>
                        <a href="/ran-operation">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuRAN}
                        </a>
                      </li>
                      <li>
                        <a href="/social-media-marketing">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuSocial}
                        </a>
                      </li>
                      <li>
                        <a href="/support-and-maintenance">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuSupport}
                        </a>
                      </li>
                      <li>
                        <a href="/tech-consultancy">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuTech}
                        </a>
                      </li>
                      <li>
                        <a href="/website-development">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuWeb}{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-3 col-6">
                  <div className="footer-widget widget widget_link">
                    <h6 className="widget-title">{translations[s].menuProducts}</h6>
                    <ul>
                      <li>
                        <Link to="/attendance">
                          <i className="fas fa-angle-right" />
                          Attendance System
                        </Link>
                      </li>
                      <li>
                        <Link to="/booking">
                          <i className="fas fa-angle-right" />
                          Booking System
                        </Link>
                      </li>
                      <li>
                        <Link to="/carrental">
                          <i className="fas fa-angle-right" />
                          Car Rental System
                        </Link>
                      </li>
                      <li>
                        <Link to="/finance">
                          <i className="fas fa-angle-right" />
                          Financial System
                        </Link>
                      </li>
                      <li>
                        <Link to="/hrms">
                          <i className="fas fa-angle-right" />
                          HR System
                        </Link>
                      </li>
                      <li>
                        <Link to="/qr">
                          <i className="fas fa-angle-right" />
                          MemoryQR
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-3 col-6">
                  <div className="footer-widget widget widget_link">
                    <h6 className="widget-title">{translations[s].menuQuickLinks}</h6>
                    <ul>
                      <li>
                        <Link to="https://cal.com/mmadigitalelosungen/consultation">
                          <i className="fas fa-angle-right" />
                          {translations[s].homeBannerButton}
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <i className="fas fa-angle-right" />
                          {translations[s].menuContact}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-4 align-self-center">
                  <div className="copyright-area">
                    <p>
                      {"© "}
                      {translations[s].footerStamp1}
                    </p>
                  </div>
                </div>
                <div className="col-md-8 align-self-center text-md-end">
                  <div className="author-area">
                    <p>
                      {translations[s].footerStamp2}
                      {" |"} <Link to="/terms"> {translations[s].termsandcondition} </Link>|{" "}
                      <Link to="/Privacy">{translations[s].privicyTitle}</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>;
  },
  ContactSection = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <style>{`
        .contact-area .social-area {
          display: inline-flex !important;
          justify-content: center !important;
          gap: 15px !important;
          padding: 0 !important;
          list-style: none !important;
          margin-top: 25px !important;
        }
        .contact-area .social-area li {
          display: inline-block !important;
          float: none !important;
          margin: 0 !important;
        }
        .contact-area .logo img {
          transition: all 0.3s ease;
        }
        .contact-area .logo img:hover {
          transform: scale(1.05);
        }
      `}</style>
        <section className="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-inner" style={{
                padding: "60px 40px"
              }}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <h2 className="mt-n1 mb-3">{translations[s].contactTitle}</h2>
                      <p className="pe-lg-5 ps-lg-5 mb-5" style={{
                      fontSize: "16px",
                      color: "#666"
                    }}>
                        {translations[s].contactDetail}
                      </p>
                      <div className="footer-widget widget d-flex flex-column align-items-center">
                        <a className="logo mb-4" href="">
                          <img src={s === "ar" ? d : s === "de" ? logoGer : logoEng} alt="Deutpak Logo" style={{
                          width: "160px",
                          height: "auto"
                        }} />
                        </a>
                        <h4 className="mb-3" style={{
                        fontSize: "24px"
                      }}>
                          <a href="tel:00493061291653" style={{
                          color: "#581c87",
                          fontWeight: 700
                        }}>
                            (+49) 30 61291653
                          </a>
                        </h4>
                        <p style={{
                        fontSize: "16px",
                        color: "#555",
                        lineHeight: "1.7"
                      }}>
                          info@deutpakdigital.com
                          <br />
                          Gottlieb-Dunkel-Str. 43, 12099, Berlin
                        </p>
                        <ul className="social-area">
                          <li>
                            <a href="https://www.facebook.com/mmadigitalelosungen/" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/mmadigitalelosungen" target="_blank">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/mmadigitalelosungen/" target="_blank">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>;
  };

export { Navbar, ContactSection, Footer };
