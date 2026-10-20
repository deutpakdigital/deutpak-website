"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import { sendContactEmail } from "@/lib/email";
import { logoEng } from "@/lib/assets";

const countryCodes = [{
  code: "+49",
  country: "DE"
}, {
  code: "+1",
  country: "US/CA"
}, {
  code: "+44",
  country: "UK"
}, {
  code: "+92",
  country: "PK"
}, {
  code: "+91",
  country: "IN"
}, {
  code: "+971",
  country: "AE"
}, {
  code: "+966",
  country: "SA"
}, {
  code: "+20",
  country: "EG"
}, {
  code: "+33",
  country: "FR"
}, {
  code: "+61",
  country: "AU"
}, {
  code: "+41",
  country: "CH"
}, {
  code: "+31",
  country: "NL"
}, {
  code: "+46",
  country: "SE"
}, {
  code: "+47",
  country: "NO"
}, {
  code: "+45",
  country: "DK"
}, {
  code: "+358",
  country: "FI"
}, {
  code: "+30",
  country: "GR"
}, {
  code: "+39",
  country: "IT"
}, {
  code: "+34",
  country: "ES"
}, {
  code: "+351",
  country: "PT"
}, {
  code: "+43",
  country: "AT"
}, {
  code: "+32",
  country: "BE"
}, {
  code: "+48",
  country: "PL"
}, {
  code: "+420",
  country: "CZ"
}, {
  code: "+36",
  country: "HU"
}, {
  code: "+40",
  country: "RO"
}, {
  code: "+7",
  country: "RU"
}, {
  code: "+86",
  country: "CN"
}, {
  code: "+81",
  country: "JP"
}, {
  code: "+82",
  country: "KR"
}, {
  code: "+65",
  country: "SG"
}, {
  code: "+60",
  country: "MY"
}, {
  code: "+66",
  country: "TH"
}, {
  code: "+63",
  country: "PH"
}, {
  code: "+62",
  country: "ID"
}];

const ContactPage = ({
  scrollToPage: r
}) => {
  const {
      language: e
    } = useLanguage(),
    t = translations[e],
    [n, i] = React.useState(""),
    [a, o] = React.useState(""),
    [l, u] = React.useState(""),
    [c, d] = React.useState("+49"),
    [g, m] = React.useState(""),
    [p, b] = React.useState(""),
    [y, v] = React.useState("idle"),
    k = async w => {
      w.preventDefault(), v("loading"), (await sendContactEmail({
        name: n,
        email: a,
        company: l,
        phone: `${c}${g}`,
        message: p
      })) ? (v("success"), i(""), o(""), u(""), m(""), b(""), setTimeout(() => v("idle"), 6e3)) : (v("error"), setTimeout(() => v("idle"), 6e3));
    };
  return <div className="page content-page alt" data-page="13" style={{
    display: "flex",
    flexDirection: "column"
  }}>
        <div style={{
      flex: 1,
      overflowY: "auto",
      padding: "1.5rem 4rem 1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
          <div style={{
        textAlign: "center",
        marginBottom: "1.2rem"
      }}>
            <div className="slide-eyebrow" data-s="1" style={{
          display: "inline-block",
          margin: "0 auto 0.8rem"
        }}>
              {t.contactSectLabel}
            </div>
            <div className="pg-title" data-s="2" style={{
          margin: "0 auto 0.4rem",
          textAlign: "center"
        }}>
              {t.contactSectTitle}
            </div>
            <p className="pg-sub" data-s="3" style={{
          margin: "0 auto",
          fontSize: "1.05rem",
          lineHeight: "1.5",
          maxWidth: "720px",
          textAlign: "center"
        }} dangerouslySetInnerHTML={{
          __html: t.contactSectSub
        }} />
          </div>
          <div className="contact-grid" style={{
        direction: "ltr",
        alignItems: "stretch"
      }}>
            <div dir={e === "ar" ? "rtl" : "ltr"} data-s="4" style={{
          background: "var(--card-bg, rgba(255, 255, 255, 0.02))",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "1.5rem",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
              <form className="cf" onSubmit={k} style={{
            gap: "0.65rem"
          }}>
                <div className="form-row" style={{
              gap: "0.65rem"
            }}>
                  <div className="fg" style={{
                flex: 1
              }}>
                    <input type="text" placeholder={t.formName} style={{
                  width: "100%"
                }} value={n} onChange={w => i(w.target.value)} required={!0} />
                  </div>
                  <div className="fg" style={{
                flex: 1
              }}>
                    <input type="email" placeholder={t.formEmail} style={{
                  width: "100%"
                }} value={a} onChange={w => o(w.target.value)} required={!0} />
                  </div>
                </div>
                <div className="form-row" style={{
              gap: "0.65rem"
            }}>
                  <div className="fg" style={{
                flex: 1
              }}>
                    <input type="text" placeholder={t.formCompany} style={{
                  width: "100%"
                }} value={l} onChange={w => u(w.target.value)} />
                  </div>
                  <div style={{
                display: "flex",
                gap: "0.65rem",
                width: "100%",
                alignItems: "stretch"
              }}>
                    <div className="fg" style={{
                  width: "90px",
                  flexShrink: 0
                }}>
                      <select dir="ltr" style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    padding: "0.7rem 0.5rem"
                  }} value={c} onChange={w => d(w.target.value)}>
                        {countryCodes.map(w => <option value={w.code} key={w.code}>
                            {w.code}
                          </option>)}
                      </select>
                    </div>
                    <div className="fg" style={{
                  flex: 1
                }}>
                      <input type="tel" dir="ltr" placeholder={t.formPhone} style={{
                    width: "100%"
                  }} value={g} onChange={w => m(w.target.value.replace(/\D/g, ""))} required={!0} />
                    </div>
                  </div>
                </div>
                <div className="fg">
                  <textarea placeholder={t.formMessage} style={{
                minHeight: "90px",
                height: "90px",
                width: "100%"
              }} value={p} onChange={w => b(w.target.value)} required={!0} />
                </div>
                <button type="submit" className="btn-p" style={{
              alignSelf: "flex-start",
              padding: "0.75rem 1.8rem",
              marginTop: "0.5rem",
              cursor: y === "loading" ? "not-allowed" : "pointer",
              opacity: y === "loading" ? 0.7 : 1,
              background: y === "success" ? "#059669" : y === "error" ? "#dc2626" : void 0
            }} disabled={y === "loading"}>
                  {y === "loading" ? t.formSending : y === "success" ? t.formSent : t.formSend}
                </button>
                {y === "success" && <div style={{
              color: "#059669",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
              fontWeight: 500
            }}>
                    {t.formSuccessMsg}
                  </div>}
                {y === "error" && <div style={{
              color: "#dc2626",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
              fontWeight: 500
            }}>
                    {t.formErrorMsg}
                  </div>}
              </form>
            </div>
            <div dir={e === "ar" ? "rtl" : "ltr"} data-s="5" style={{
          background: "var(--card-bg, rgba(255, 255, 255, 0.02))",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "1.5rem",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          marginTop: 0
        }}>
              <div>
                <h3 style={{
              fontFamily: "var(--font-head)",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "var(--text-main, #fff)",
              marginTop: 0,
              marginBottom: "0.5rem"
            }}>
                  {t.contactInfoTitle}
                </h3>
                <p style={{
              fontSize: "1.1rem",
              color: "var(--muted)",
              lineHeight: "1.6",
              marginBottom: 0
            }} dangerouslySetInnerHTML={{
              __html: t.contactInfoText
            }} />
              </div>
              <div style={{
            borderTop: "1px solid var(--border)",
            margin: "1rem 0"
          }} />
              <div style={{
            display: "flex",
            alignItems: "center"
          }}>
                <img src={logoEng} alt="DeutPak Digital Logo" style={{
              height: "32px",
              objectFit: "contain"
            }} />
              </div>
              <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            marginTop: "0.5rem"
          }}>
                <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(59, 130, 246, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent2)",
              fontSize: "1.1rem"
            }}>
                  📞
                </div>
                <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                  <span style={{
                fontSize: "0.7rem",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                    {t.contactPhone}
                  </span>
                  <a href="tel:+493061291653" style={{
                fontSize: "0.92rem",
                color: "var(--text-main, #fff)",
                fontWeight: 500,
                textDecoration: "none"
              }}>
                    (+49) 30 61291653
                  </a>
                </div>
              </div>
              <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            marginTop: "0.5rem"
          }}>
                <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(59, 130, 246, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent2)",
              fontSize: "1.1rem"
            }}>
                  ✉️
                </div>
                <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                  <span style={{
                fontSize: "0.7rem",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                    {t.contactEmail}
                  </span>
                  <a href="mailto:info@deutpakdigital.com" style={{
                fontSize: "0.92rem",
                color: "var(--text-main, #fff)",
                fontWeight: 500,
                textDecoration: "none"
              }}>
                    info@deutpakdigital.com
                  </a>
                </div>
              </div>
              <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            marginTop: "0.5rem"
          }}>
                <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(59, 130, 246, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent2)",
              fontSize: "1.1rem"
            }}>
                  📍
                </div>
                <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                  <span style={{
                fontSize: "0.7rem",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                    {t.contactAddress}
                  </span>
                  <span style={{
                fontSize: "0.92rem",
                color: "var(--text-main, #fff)",
                fontWeight: 500
              }}>
                    Gottlieb-Dunkel-Str. 43, 12099, Berlin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer style={{
      padding: "0.8rem 4rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
      textAlign: "center",
      background: "var(--navy)",
      borderTop: "1px solid var(--border)",
      flexShrink: 0
    }}>
          <div className="fc">{t.footerCopyright}</div>
          <span style={{
        color: "var(--muted)",
        opacity: 0.5
      }}>
            |
          </span>
          <a href="https://deutpak.com" target="_blank" rel="noopener noreferrer" style={{
        color: "var(--accent)",
        fontWeight: 600,
        fontSize: "0.88rem",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem"
      }}>
            {t.mobilityDivision}
            {" ↗"}
          </a>
        </footer>
        <style>{`
        /* Dark Theme Input Styles */
        .cf input::placeholder, .cf textarea::placeholder {
          color: #cbd5e1 !important;
          opacity: 1 !important;
        }
        .cf input, .cf select, .cf textarea {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
        }
        .cf select option {
          background-color: #041c17 !important;
          color: #ffffff !important;
        }

        /* Light Theme High Contrast Overrides */
        .deutpak-digital-app[data-theme="light"] .cf input::placeholder,
        .deutpak-digital-app[data-theme="light"] .cf textarea::placeholder {
          color: #475569 !important;
          opacity: 1 !important;
        }
        .deutpak-digital-app[data-theme="light"] .cf input,
        .deutpak-digital-app[data-theme="light"] .cf select,
        .deutpak-digital-app[data-theme="light"] .cf textarea {
          color: #0f172a !important;
          background: rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(0, 0, 0, 0.2) !important;
        }
        .deutpak-digital-app[data-theme="light"] .cf select option {
          background-color: #ffffff !important;
          color: #0f172a !important;
        }

        @media (max-width: 576px) {
          .cf .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      </div>;
};

export { ContactPage, countryCodes };
