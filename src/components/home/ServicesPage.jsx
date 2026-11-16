"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";

const ServicesPage = ({
  currentPage: r
}) => {
  const {
      language: e
    } = useLanguage(),
    t = translations[e],
    n = [{
      id: "app",
      title: t.svcAppTitle,
      tagline: t.svcAppTagline,
      desc: t.svcAppDesc,
      icon: "fa-laptop-code",
      features: [{
        icon: "fa-globe",
        title: t.svcAppF1Title,
        description: t.svcAppF1Desc
      }, {
        icon: "fa-cogs",
        title: t.svcAppF2Title,
        description: t.svcAppF2Desc
      }, {
        icon: "fa-shopping-cart",
        title: t.svcAppF3Title,
        description: t.svcAppF3Desc
      }, {
        icon: "fa-robot",
        title: t.svcAppF4Title,
        description: t.svcAppF4Desc
      }, {
        icon: "fa-microchip",
        title: t.svcAppF5Title,
        description: t.svcAppF5Desc
      }, {
        icon: "fa-bolt",
        title: t.svcAppF6Title,
        description: t.svcAppF6Desc
      }]
    }, {
      id: "data",
      title: t.svcDataTitle,
      tagline: t.svcDataTagline,
      desc: t.svcDataDesc,
      icon: "fa-chart-bar",
      features: [{
        icon: "fa-chart-pie",
        title: t.svcDataF1Title,
        description: t.svcDataF1Desc
      }, {
        icon: "fa-sync-alt",
        title: t.svcDataF2Title,
        description: t.svcDataF2Desc
      }, {
        icon: "fa-sitemap",
        title: t.svcDataF3Title,
        description: t.svcDataF3Desc
      }, {
        icon: "fa-link",
        title: t.svcDataF4Title,
        description: t.svcDataF4Desc
      }, {
        icon: "fa-brain",
        title: t.svcDataF5Title,
        description: t.svcDataF5Desc
      }, {
        icon: "fa-shield-alt",
        title: t.svcDataF6Title,
        description: t.svcDataF6Desc
      }]
    }, {
      id: "ran",
      title: t.svcRanTitle,
      tagline: t.svcRanTagline,
      desc: t.svcRanDesc,
      icon: "fa-broadcast-tower",
      features: [{
        icon: "fa-signal",
        title: t.svcRanF1Title,
        description: t.svcRanF1Desc
      }, {
        icon: "fa-sliders-h",
        title: t.svcRanF2Title,
        description: t.svcRanF2Desc
      }, {
        icon: "fa-chart-line",
        title: t.svcRanF3Title,
        description: t.svcRanF3Desc
      }, {
        icon: "fa-headset",
        title: t.svcRanF4Title,
        description: t.svcRanF4Desc
      }, {
        icon: "fa-handshake",
        title: t.svcRanF5Title,
        description: t.svcRanF5Desc
      }, {
        icon: "fa-clipboard-list",
        title: t.svcRanF6Title,
        description: t.svcRanF6Desc
      }]
    }],
    [i, a] = React.useState(!1),
    [o, l] = React.useState(null),
    [u, c] = React.useState(null);
  return React.useEffect(() => {
    if (r === 11) {
      const d = setTimeout(() => a(!0), 600);
      return () => clearTimeout(d);
    } else a(!1), l(null);
  }, [r]), React.useEffect(() => {
    if (o) c(n.find(d => d.id === o) || null);else {
      const d = setTimeout(() => c(null), 300);
      return () => clearTimeout(d);
    }
  }, [o]), <div className="page content-page" data-page="11">
          <div className="svc-header">
            <div className="slide-eyebrow" data-s="1">
              {t.svcLabel}
            </div>
            <div className="pg-title" data-s="2" style={{
        textAlign: "center"
      }}>
              {t.svcTitle}
            </div>
            <p className="pg-sub" data-s="3" style={{
        textAlign: "center"
      }} dangerouslySetInnerHTML={{
        __html: t.svcSub
      }} />
          </div>
          <div className="svc-columns" data-s="4" style={{
      pointerEvents: i ? "auto" : "none"
    }}>
            {n.map(d => <div className="svc-column" onMouseEnter={() => i && window.innerWidth >= 1025 && l(d.id)} onMouseLeave={() => window.innerWidth >= 1025 && l(null)} onClick={() => i && window.innerWidth < 1025 && l(g => g === d.id ? null : d.id)} key={d.id}>
                <div className="svc-col-hd-centered">
                  <div className="svc-card-icon-glow">
                    <i className={`fas ${d.icon}`} style={{
              color: "var(--accent)"
            }} aria-hidden="true" />
                  </div>
                  <h3>{d.title}</h3>
                  <p className="svc-col-tagline">{d.tagline}</p>
                  <p className="svc-col-desc">{d.desc}</p>
                </div>
              </div>)}
          </div>
          <div className={`svc-overlay-container ${o ? "visible" : ""}`} onClick={() => l(null)} style={{
      cursor: o ? "pointer" : "default"
    }}>
            <div className="svc-backdrop-blur-active" />
            {u && <div className="svc-expanded-card" onClick={d => d.stopPropagation()}>
                <div className="svc-expanded-card-header">
                  <span className="svc-expanded-badge">{t.svcLabel}</span>
                  <h2 className="svc-exp-title">{u.title}</h2>
                  <p className="svc-exp-tagline">{u.tagline}</p>
                </div>
                <div className="svc-exp-grid">
                  {u.features.map((d, g) => <div className="sc expanded-sc" key={g}>
                      <span className="sc-ico">
                        <i className={`fas fa-fw ${d.icon}`} style={{
                  color: "var(--accent)"
                }} aria-hidden="true" />
                      </span>
                      <div className="sc-body">
                        <h4>{d.title}</h4>
                        <p>{d.description}</p>
                      </div>
                    </div>)}
                </div>
                <div className="svc-expanded-footer">{t.svcExpClose}</div>
              </div>}
          </div>
        </div>;
};

export { ServicesPage };
