"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";

const ProductsPage = () => {
  const {
      language: r
    } = useLanguage(),
    e = translations[r];
  return <div className="page content-page" data-page="12" style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}>
        <div className="slide-eyebrow" data-s="1" style={{
      display: "inline-block",
      margin: "0 auto 1.5rem"
    }}>
          {e.prodLabel}
        </div>
        <div className="pg-title" data-s="2" style={{
      textAlign: "center",
      margin: "0 auto"
    }} dangerouslySetInnerHTML={{
      __html: e.prodTitle
    }} />
        <p className="pg-sub" data-s="3" style={{
      textAlign: "center",
      margin: "1rem auto 2rem",
      maxWidth: "620px"
    }} dangerouslySetInnerHTML={{
      __html: e.prodSub
    }} />
        <div className="prod-grid" data-s="4">
          <div className="prod-card">
            <div className="pbadge">{e.prod2Badge}</div>
            <h3>{e.prod2Title}</h3>
            <p dangerouslySetInnerHTML={{
          __html: e.prod2Desc
        }} />
            <ul className="prod-feats">
              <li>{e.prod2F1}</li>
              <li>{e.prod2F2}</li>
              <li>{e.prod2F3}</li>
              <li>{e.prod2F4}</li>
            </ul>
          </div>
          <div className="prod-card">
            <div className="pbadge">{e.prod3Badge}</div>
            <h3>{e.prod3Title}</h3>
            <p dangerouslySetInnerHTML={{
          __html: e.prod3Desc
        }} />
            <ul className="prod-feats">
              <li>{e.prod3F1}</li>
              <li>{e.prod3F2}</li>
              <li>{e.prod3F3}</li>
              <li>{e.prod3F4}</li>
            </ul>
          </div>
        </div>
      </div>;
};

export { ProductsPage };
