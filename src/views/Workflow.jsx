"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { InnerHeader } from "@/components/InnerHeader";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import { NumberCard } from "@/components/NumberCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
const m = "/assets/2-DcHTtf9N.png",
  w = "/assets/work1-Dj_1ShK2.png",
  d = "/assets/work2-CuCv5P4v.png",
  x = "/assets/work3-B0XzBJ58.png",
  j = "/assets/work4-CHTLkBLy.png",
  p = "/assets/work5-rhK-STLt.png",
  f = "/assets/work6-DknGB496.png",
  C_g = () => {
    const {
      language: t
    } = useLanguage();
    return <>
        <section className="work-area pd-top-130 pd-bottom-120 text-center text-lg-start">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-start">
              <div className="col-xl-6 col-lg-6 align-self-center order-lg-1">
                <div className="section-title style-2 mb-lg-0">
                  <h4 className="sub-title">{translations[t].homeWorkflowTitle}</h4>
                  <h2 className="title">{translations[t].homeWorkflowHeading}</h2>
                  <p>
                    {" "}
                    {translations[t].homeWorkflowDetails}
                    <br />
                    <br />
                    {translations[t].homeWorkflowDetails2}
                    <br />
                    <br />
                    {translations[t].homeWorkflowDetails3}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-lg-2 align-self-center">
                <div className="thumb text-center">
                  <img src={m} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-area pd-bottom-130">
          <div className="container">
            <div className="row justify-content-center">
              <NumberCard number="1" image={w} title={translations[t].workflowStep1Title} details={translations[t].workflowStep1Detail} />
              <NumberCard number="2" image={d} title={translations[t].workflowStep2Title} details={translations[t].workflowStep2Detail} />
              <NumberCard number="3" image={x} title={translations[t].workflowStep3Title} details={translations[t].workflowStep3Detail} />
              <NumberCard number="4" image={j} title={translations[t].workflowStep4Title} details={translations[t].workflowStep4Detail} />
              <NumberCard number="5" image={p} title={translations[t].workflowStep5Title} details={translations[t].workflowStep5Detail} />
              <NumberCard number="6" image={f} title={translations[t].workflowStep6Title} details={translations[t].workflowStep6Detail} />
            </div>
          </div>
        </section>
      </>;
  },
  Workflow = () => {
    const {
      language: t
    } = useLanguage();
    return <>
        <Navbar />
        <InnerHeader title={translations[t].menuWorkflow} head={translations[t].menuHome} />
        <C_g />
        <TestimonialSlider />
        <ContactSection />
        <Footer />
      </>;
  };

export default Workflow;
