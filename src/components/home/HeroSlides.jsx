"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";

const HeroSlides = ({
  scrollToPage: r
}) => {
  const {
      language: e
    } = useLanguage(),
    t = translations[e];
  return <>
        <div className="page slide-page s1" data-page="0">
          <div className="slide-content">
            <div className="slide-eyebrow" data-s="1">
              {t.sl1Eyebrow}
            </div>
            <h1 className="slide-title" data-s="2" dangerouslySetInnerHTML={{
          __html: t.sl1Title
        }} />
            <p className="slide-sub" data-s="3" dangerouslySetInnerHTML={{
          __html: t.sl1Sub
        }} />
            <div className="slide-actions" data-s="4">
              <button className="btn-p" onClick={() => r(4)}>
                {t.sl1Btn1}
              </button>
              <button className="btn-g" onClick={() => r(5)}>
                {t.sl1Btn2}
              </button>
            </div>
          </div>
        </div>
        <div className="page slide-page s2" data-page="1">
          <div className="slide-content">
            <div className="slide-eyebrow" data-s="1">
              {t.sl2Eyebrow}
            </div>
            <h1 className="slide-title" data-s="2" dangerouslySetInnerHTML={{
          __html: t.sl2Title
        }} />
            <p className="slide-sub" data-s="3" dangerouslySetInnerHTML={{
          __html: t.sl2Sub
        }} />
            <div className="slide-actions" data-s="4">
              <button className="btn-p" onClick={() => r(11)}>
                {t.sl2Btn1}
              </button>
            </div>
          </div>
        </div>
        <div className="page slide-page s3" data-page="2">
          <div className="slide-content">
            <div className="slide-eyebrow" data-s="1">
              {t.sl3Eyebrow}
            </div>
            <h1 className="slide-title" data-s="2" dangerouslySetInnerHTML={{
          __html: t.sl3Title
        }} />
            <p className="slide-sub" data-s="3" dangerouslySetInnerHTML={{
          __html: t.sl3Sub
        }} />
            <div className="slide-actions" data-s="4">
              <button className="btn-p" onClick={() => r(11)}>
                {t.sl3Btn1}
              </button>
            </div>
          </div>
        </div>
        <div className="page slide-page s4" data-page="3">
          <div className="slide-content">
            <div className="slide-eyebrow" data-s="1">
              {t.sl4Eyebrow}
            </div>
            <h1 className="slide-title" data-s="2" dangerouslySetInnerHTML={{
          __html: t.sl4Title
        }} />
            <p className="slide-sub" data-s="3" dangerouslySetInnerHTML={{
          __html: t.sl4Sub
        }} />
            <div className="slide-actions" data-s="4">
              <button className="btn-p" onClick={() => r(7)}>
                {t.sl4Btn1}
              </button>
              <button className="btn-g" onClick={() => r(4)}>
                {t.sl4Btn2}
              </button>
            </div>
          </div>
        </div>
      </>;
};

export { HeroSlides };
