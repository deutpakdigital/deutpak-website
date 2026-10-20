"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { logoEng } from "@/lib/assets";
import { translations } from "@/i18n";
import { sendContactEmail } from "@/lib/email";
const D = [{
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
function ContactQR() {
  const {
      language: s,
      setLanguage: S
    } = useLanguage(),
    r = translations[s],
    [c, p] = React.useState(""),
    [x, f] = React.useState(""),
    [m, g] = React.useState(""),
    [u, v] = React.useState("+49"),
    [y, h] = React.useState(""),
    [b, j] = React.useState(""),
    [n, a] = React.useState("idle"),
    w = async t => {
      t.preventDefault(), a("loading"), (await sendContactEmail({
        name: c,
        email: x,
        company: m,
        phone: `${u}${y}`,
        message: b
      })) ? (a("success"), p(""), f(""), g(""), h(""), j(""), setTimeout(() => a("idle"), 6e3)) : (a("error"), setTimeout(() => a("idle"), 6e3));
    },
    C = t => {
      S(t);
    },
    o = s === "ar";
  return <div dir={o ? "rtl" : "ltr"} style={{
    minHeight: "100vh",
    backgroundColor: "#05201a",
    color: "#ffffff",
    fontFamily: "'Lato', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2rem 1rem",
    boxSizing: "border-box",
    position: "relative",
    overflowX: "hidden"
  }}>
      <div style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(180deg, #d4af37 0%, rgba(212,175,55,0) 100%)",
      filter: "blur(120px)",
      top: "-50px",
      right: o ? "auto" : "-50px",
      left: o ? "-50px" : "auto",
      zIndex: 0,
      pointerEvents: "none"
    }} />
      <div style={{
      position: "absolute",
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      background: "linear-gradient(180deg, #b8860b 0%, rgba(184,134,11,0) 100%)",
      filter: "blur(100px)",
      bottom: "-50px",
      left: o ? "auto" : "-50px",
      right: o ? "-50px" : "auto",
      zIndex: 0,
      pointerEvents: "none"
    }} />
      <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1100px",
      width: "100%",
      margin: "0 auto 2.5rem",
      zIndex: 1,
      padding: "0 1rem"
    }}>
        <img src={logoEng} alt="DeutPak Digital Logo" style={{
        height: "35px",
        objectFit: "contain"
      }} />
        <div style={{
        display: "flex",
        gap: "0.5rem"
      }}>
          {["en", "de", "ar"].map(t => <button onClick={() => C(t)} style={{
          background: s === t ? "rgba(212, 175, 55, 0.6)" : "transparent",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "4px",
          padding: "4px 8px",
          fontSize: "12px",
          fontWeight: 600,
          cursor: "pointer",
          textTransform: "uppercase",
          transition: "all 0.3s ease"
        }} key={t}>
              {t}
            </button>)}
        </div>
      </header>
      <main style={{
      maxWidth: "1100px",
      width: "100%",
      margin: "0 auto",
      zIndex: 1,
      padding: "0 1rem"
    }}>
        <div style={{
        textRendering: "optimizeLegibility",
        textAlign: "center",
        marginBottom: "3rem"
      }}>
          <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "1rem",
          background: "linear-gradient(90deg, #ffffff 0%, #d4af37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
            {r.contactQRTitle}
          </h1>
          <p style={{
          fontSize: "1.1rem",
          color: "#a0aec0",
          maxWidth: "750px",
          margin: "0 auto",
          lineHeight: "1.6"
        }} dangerouslySetInnerHTML={{
          __html: r.contactQRSub
        }} />
        </div>
        <div style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: "2.5rem",
        alignItems: "stretch",
        direction: "ltr"
      }} className="qr-contact-grid">
          <div dir={o ? "rtl" : "ltr"} style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: "2.5rem",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
        }}>
            <form onSubmit={w} style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
              <div className="qr-row-two-cols">
                <div>
                  <input type="text" placeholder={r.formName} style={l(o)} value={c} onChange={t => p(t.target.value)} required={!0} />
                </div>
                <div>
                  <input type="email" placeholder={r.formEmail} style={l(o)} value={x} onChange={t => f(t.target.value)} required={!0} />
                </div>
              </div>
              <div className="qr-row-two-cols">
                <div>
                  <input type="text" placeholder={r.formCompany} style={l(o)} value={m} onChange={t => g(t.target.value)} />
                </div>
                <div style={{
                display: "flex",
                gap: "0.75rem",
                width: "100%",
                alignItems: "stretch"
              }}>
                  <div style={{
                  width: "90px",
                  flexShrink: 0
                }}>
                    <select dir="ltr" style={{
                    ...l(o),
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    appearance: "auto",
                    boxSizing: "border-box",
                    padding: "0.85rem 0.5rem"
                  }} value={u} onChange={t => v(t.target.value)}>
                      {D.map(t => <option value={t.code} key={t.code}>
                          {t.code}
                        </option>)}
                    </select>
                  </div>
                  <div style={{
                  flex: 1
                }}>
                    <input type="tel" dir="ltr" placeholder={r.formPhone} style={l(o)} value={y} onChange={t => h(t.target.value.replace(/\D/g, ""))} pattern="[0-9]+" title="Numbers only" required={!0} />
                  </div>
                </div>
              </div>
              <div>
                <textarea placeholder={r.formMessage} rows={4} style={{
                ...l(o),
                resize: "none",
                height: "120px"
              }} value={b} onChange={t => j(t.target.value)} required={!0} />
              </div>
              <button type="submit" disabled={n === "loading"} style={{
              alignSelf: o ? "flex-end" : "flex-start",
              background: n === "success" ? "#059669" : n === "error" ? "#dc2626" : "#d4af37",
              color: n === "success" || n === "error" ? "#ffffff" : "#05201a",
              border: "none",
              borderRadius: "8px",
              padding: "0.85rem 2rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: n === "loading" ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              opacity: n === "loading" ? 0.7 : 1,
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)"
            }}>
                {n === "loading" ? r.formSending : n === "success" ? r.formSent : r.formSend}
              </button>
              {n === "success" && <div style={{
              color: "#059669",
              fontSize: "0.95rem",
              fontWeight: 500,
              textAlign: "center",
              marginTop: "0.5rem"
            }}>
                  {r.formSuccessMsg}
                </div>}
              {n === "error" && <div style={{
              color: "#dc2626",
              fontSize: "0.95rem",
              fontWeight: 500,
              textAlign: "center",
              marginTop: "0.5rem"
            }}>
                  {r.formErrorMsg}
                </div>}
            </form>
          </div>
          <div dir={o ? "rtl" : "ltr"} style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: "2.5rem",
          backdropFilter: "blur(15px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
            <div>
              <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1rem"
            }}>
                {r.contactInfoTitle}
              </h3>
              <p style={{
              color: "#a0aec0",
              lineHeight: "1.6",
              fontSize: "1rem"
            }} dangerouslySetInnerHTML={{
              __html: r.contactInfoText
            }} />
            </div>
            <div style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            margin: "1.5rem 0"
          }} />
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem"
          }}>
              <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}>
                <span style={{
                fontSize: "1.5rem"
              }}>
                  📞
                </span>
                <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                  <span style={{
                  fontSize: "0.75rem",
                  color: "#a0aec0",
                  textTransform: "uppercase"
                }}>
                    {r.contactPhone}
                  </span>
                  <a href="tel:+493061291653" style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  textDecoration: "none"
                }}>
                    (+49) 30 61291653
                  </a>
                </div>
              </div>
              <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}>
                <span style={{
                fontSize: "1.5rem"
              }}>
                  ✉️
                </span>
                <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                  <span style={{
                  fontSize: "0.75rem",
                  color: "#a0aec0",
                  textTransform: "uppercase"
                }}>
                    {r.contactEmail}
                  </span>
                  <a href="mailto:info@deutpakdigital.com" style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  textDecoration: "none"
                }}>
                    info@deutpakdigital.com
                  </a>
                </div>
              </div>
              <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}>
                <span style={{
                fontSize: "1.5rem"
              }}>
                  📍
                </span>
                <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                  <span style={{
                  fontSize: "0.75rem",
                  color: "#a0aec0",
                  textTransform: "uppercase"
                }}>
                    {r.contactAddress}
                  </span>
                  <span style={{
                  color: "#ffffff",
                  fontWeight: 600
                }}>
                    Gottlieb-Dunkel-Str. 43, 12099, Berlin
                  </span>
                </div>
              </div>
            </div>
            <div style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            margin: "1.5rem 0"
          }} />
            <div style={{
            display: "flex",
            gap: "1rem"
          }}>
              <a href="https://www.facebook.com/mmadigitalelosungen/" target="_blank" rel="noreferrer" style={d}>
                📘
              </a>
              <a href="https://www.linkedin.com/company/mmadigitalelosungen" target="_blank" rel="noreferrer" style={d}>
                💼
              </a>
              <a href="https://www.instagram.com/mmadigitalelosungen/" target="_blank" rel="noreferrer" style={d}>
                📸
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer style={{
      width: "100%",
      textAlign: "center",
      paddingTop: "2rem",
      fontSize: "0.85rem",
      color: "#718096",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      marginTop: "3rem",
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1.5rem",
      flexWrap: "wrap"
    }}>
        <p style={{
        margin: 0
      }}>
          {r.footerCopyright}
        </p>
        <span style={{
        color: "#718096",
        opacity: 0.5
      }}>
          |
        </span>
        <a href="https://deutpak.com" target="_blank" rel="noopener noreferrer" style={{
        color: "#d4af37",
        fontWeight: 600,
        fontSize: "0.88rem",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem"
      }}>
          {r.mobilityDivision}
          {" ↗"}
        </a>
      </footer>
      <style>{`
        .qr-contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
        }
        @media (max-width: 768px) {
          .qr-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: #cbd5e1 !important;
          opacity: 1 !important;
        }
        select {
          color: #ffffff;
        }
        .qr-row-two-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 576px) {
          .qr-row-two-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>;
}
const l = s => ({
    width: "100%",
    padding: "0.85rem 1.2rem",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    color: "#ffffff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    outline: "none",
    textAlign: s ? "right" : "left",
    boxSizing: "border-box",
    transition: "all 0.3s ease"
  }),
  d = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "all 0.3s ease"
  };

export default ContactQR;
