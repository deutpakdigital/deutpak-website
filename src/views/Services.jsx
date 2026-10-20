"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import Link from "@/components/RouterLink";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
const C_s = i => <>
      <div className="col-xl-4 col-md-6 d-flex align-items-stretch" style={{
      marginBottom: "30px"
    }}>
        <div className="single-service-inner w-100 d-flex flex-column" style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%"
      }}>
          <div className="thumb" style={{
          marginBottom: "10px"
        }}>
            <img className="rounded-0" src={i.image} />
          </div>
          <h4>
            <Link to={i.link}>{i.title}</Link>
          </h4>
          <p style={{
          flexGrow: 1
        }}>
            {i.detail}
          </p>
          <div className="more-detail-wrapper" style={{
          marginTop: "auto",
          paddingTop: "15px"
        }}>
            <Link to={i.link} style={{
            padding: "7px",
            borderRadius: "5px",
            fontSize: "12px",
            backgroundColor: "#0d5c34",
            color: "#fff",
            textDecoration: "none",
            display: "inline-block"
          }} aria-label={`More details about ${i.title}`}>
              {"Details "}
              <span aria-hidden="true">➤</span>
            </Link>
          </div>
        </div>
      </div>
    </>,
  x = "/assets/trans-icon-gGWey0H0.jpg",
  p = "/assets/web-icon-4tCKWN75.jpg",
  h = "/assets/graphic-icon-DQXeMc-I.jpg",
  g = "/assets/social-icon-Bh86dy0c.jpg",
  n = "/assets/mob-icon-DeeP5yak.jpg",
  j = "/assets/consult-icon-faKVJ3tT.jpg",
  u = "/assets/support-icon-3zvx-50A.jpg",
  Services = () => {
    const {
      language: i
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[i].menuServices} head={translations[i].menuHome} />
        <section className="service-area pd-top-110 pd-bottom-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title">{translations[i].homeServiceDetails}</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <C_s image={x} title={translations[i].menuDigital} detail={translations[i].homeServiceDigital} link="/digital-transformation" />
              <C_s image={h} title={translations[i].menuGraphics} detail={translations[i].homeServiceGraphics} link="/graphics-designing" />
              <C_s image={n} title={translations[i].menuMobile} detail={translations[i].homeServiceMobile} link="/mobile-app-development" />
              <C_s image={n} title={translations[i].menuRAN} detail={translations[i].ranDetail1} link="/ran-operation" />
              <C_s image={u} title={translations[i].menuSupport} detail={translations[i].homeServiceSupport} link="/support-and-maintenance" />
              <C_s image={g} title={translations[i].menuSocial} detail={translations[i].homeServiceSocial} link="/social-media-marketing" />
              <C_s image={j} title={translations[i].menuTech} detail={translations[i].homeServiceTech} link="/tech-consultancy" />
              <C_s image={p} title={translations[i].menuWeb} detail={translations[i].homeServiceuWeb} link="/website-development" />
            </div>
          </div>
        </section>
        <TestimonialSlider />
        <ContactSection />
        <Footer />
      </>;
  };

export default Services;
