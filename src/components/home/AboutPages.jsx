"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import { ExpandingCards } from "@/components/home/ExpandingCards";
import { sajidImg, junaidArshadImg, mahekImg, ibrarImg } from "@/lib/assets";

const AboutPages = ({
  currentPage: r
}) => {
  const {
      language: e
    } = useLanguage(),
    t = translations[e];
  return <>
        <div className="page slide-page s1" data-page="4" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      padding: "0 2rem"
    }}>
          <div className="slide-content" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "800px"
      }}>
            <div className="slide-eyebrow" data-s="1">
              {t.ab4Eyebrow}
            </div>
            <h1 className="slide-title" data-s="2" style={{
          textAlign: "center",
          fontSize: "clamp(2.8rem, 5.5vw, 5rem)"
        }} dangerouslySetInnerHTML={{
          __html: t.ab4Title
        }} />
            <p className="slide-sub" data-s="3" style={{
          textAlign: "center",
          margin: "0 auto 2rem",
          maxWidth: "620px"
        }} dangerouslySetInnerHTML={{
          __html: t.ab4Sub
        }} />
          </div>
        </div>
        <div className="page content-page" data-page="5">
          <div style={{
        textAlign: "center",
        marginBottom: "2.5rem"
      }}>
            <h2 className="pg-title" style={{
          marginBottom: "0.5rem",
          display: "block"
        }} data-s="1">
              {t.ab5Heading}
            </h2>
            <p className="pg-label" style={{
          margin: "0 auto",
          color: "var(--accent2)",
          border: "none",
          padding: 0
        }} data-s="2">
              {t.ab5Label}
            </p>
          </div>
          <div className="about-layout">
            <div className="ab-body" data-s="3">
              <p dangerouslySetInnerHTML={{
            __html: t.ab5Body1
          }} />
              <p dangerouslySetInnerHTML={{
            __html: t.ab5Body2
          }} />
              <p dangerouslySetInnerHTML={{
            __html: t.ab5Body3
          }} />
            </div>
            <div className="card3" style={{
          marginTop: 0
        }}>
              <div className="mini-card" data-s="4">
                <h4>{t.ab5VisionHeading}</h4>
                <p dangerouslySetInnerHTML={{
              __html: t.ab5VisionText
            }} />
              </div>
              <div className="mini-card" data-s="5">
                <h4>{t.ab5MissionHeading}</h4>
                <p dangerouslySetInnerHTML={{
              __html: t.ab5MissionText
            }} />
              </div>
              <div className="mini-card" data-s="6">
                <h4>{t.ab5GoalHeading}</h4>
                <p dangerouslySetInnerHTML={{
              __html: t.ab5GoalText
            }} />
              </div>
            </div>
          </div>
        </div>
        <div className="page content-page alt" data-page="6">
          <div style={{
        textAlign: "center",
        marginBottom: "2.5rem"
      }}>
            <h2 className="pg-title" style={{
          marginBottom: "0.5rem",
          display: "block"
        }} data-s="1">
              {t.ab6Heading}
            </h2>
            <p className="pg-label" style={{
          margin: "0 auto",
          color: "var(--accent2)",
          border: "none",
          padding: 0
        }} data-s="2">
              {t.ab6Label}
            </p>
          </div>
          <div className="about-layout">
            <div className="ab-body" data-s="3">
              <p dangerouslySetInnerHTML={{
            __html: t.ab6Body1
          }} />
              <p dangerouslySetInnerHTML={{
            __html: t.ab6Body2
          }} />
              <p dangerouslySetInnerHTML={{
            __html: t.ab6Body3
          }} />
            </div>
            <div className="how-list" style={{
          marginTop: 0
        }}>
              <div className="how-row" data-s="4">
                <div className="how-n">01</div>
                <div className="how-t">
                  <h4>{t.ab6Step1Title}</h4>
                  <p dangerouslySetInnerHTML={{
                __html: t.ab6Step1Text
              }} />
                </div>
              </div>
              <div className="how-row" data-s="5">
                <div className="how-n">02</div>
                <div className="how-t">
                  <h4>{t.ab6Step2Title}</h4>
                  <p dangerouslySetInnerHTML={{
                __html: t.ab6Step2Text
              }} />
                </div>
              </div>
              <div className="how-row" data-s="6">
                <div className="how-n">03</div>
                <div className="how-t">
                  <h4>{t.ab6Step3Title}</h4>
                  <p dangerouslySetInnerHTML={{
                __html: t.ab6Step3Text
              }} />
                </div>
              </div>
              <div className="how-row" data-s="7">
                <div className="how-n">04</div>
                <div className="how-t">
                  <h4>{t.ab6Step4Title}</h4>
                  <p dangerouslySetInnerHTML={{
                __html: t.ab6Step4Text
              }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page content-page" data-page="7">
          <div style={{
        textAlign: "center",
        marginBottom: "2.5rem"
      }}>
            <h2 className="pg-title" style={{
          marginBottom: "0.5rem",
          display: "block"
        }} data-s="1">
              {t.ab7Heading}
            </h2>
            <p className="pg-label" style={{
          margin: "0 auto",
          color: "var(--accent2)",
          border: "none",
          padding: 0
        }} data-s="2">
              {t.ab7Label}
            </p>
          </div>
          <div className="about-layout">
            <div className="ab-body" data-s="3">
              <p dangerouslySetInnerHTML={{
            __html: t.ab7Body1
          }} />
              <p dangerouslySetInnerHTML={{
            __html: t.ab7Body2
          }} />
              <p dangerouslySetInnerHTML={{
            __html: t.ab7Body3
          }} />
            </div>
            <ul className="val-list" style={{
          marginTop: 0
        }}>
              <li data-s="4">
                <div className="v-n">01</div>
                <div dangerouslySetInnerHTML={{
              __html: t.ab7Val1
            }} />
              </li>
              <li data-s="5">
                <div className="v-n">02</div>
                <div dangerouslySetInnerHTML={{
              __html: t.ab7Val2
            }} />
              </li>
              <li data-s="6">
                <div className="v-n">03</div>
                <div dangerouslySetInnerHTML={{
              __html: t.ab7Val3
            }} />
              </li>
              <li data-s="7">
                <div className="v-n">04</div>
                <div dangerouslySetInnerHTML={{
              __html: t.ab7Val4
            }} />
              </li>
              <li data-s="8">
                <div className="v-n">05</div>
                <div dangerouslySetInnerHTML={{
              __html: t.ab7Val5
            }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="page content-page alt team-slide-page" data-page="8" style={{
      display: "flex",
      flexDirection: "column"
    }}>
          <div className="team-slide-inner">
            <div className="slide-eyebrow" data-s="1">
              {t.abTeamLabel}
            </div>
            <h1 className="team-slide-heading">{t.abLeadershipHeading}</h1>
            <div className="team-slide-cards-area">
              <ExpandingCards defaultActiveIndex={0} items={[{
            id: "sajid",
            title: "Sajid Mohamed Nawaz",
            role: "CEO",
            imgSrc: sajidImg
          }]} />
            </div>
          </div>
        </div>
        <div className="page content-page team-slide-page" data-page="9" style={{
      display: "flex",
      flexDirection: "column"
    }}>
          <div className="team-slide-inner">
            <div className="slide-eyebrow" data-s="1">
              {t.abTeamLabel}
            </div>
            <h1 className="team-slide-heading">{t.abDevTeamHeading}</h1>
            <div className="team-slide-cards-area">
              <ExpandingCards defaultActiveIndex={0} items={[{
            id: "junaid",
            title: "Junaid Arshad",
            role: "Software Developer",
            imgSrc: junaidArshadImg
          }]} />
            </div>
          </div>
        </div>
        <div className="page content-page alt team-slide-page" data-page="10" style={{
      display: "flex",
      flexDirection: "column"
    }}>
          <div className="team-slide-inner">
            <div className="slide-eyebrow" data-s="1">
              {t.abTeamLabel}
            </div>
            <h1 className="team-slide-heading">{t.abSupportTeamHeading}</h1>
            <div className="team-slide-cards-area">
              <ExpandingCards defaultActiveIndex={0} items={[{
            id: "mahek",
            title: "Mahek Sajid",
            role: "Dual Student - People Manager",
            imgSrc: mahekImg
          }, {
            id: "ibrar",
            title: "Ibrar Ikram",
            role: "Network Engineer",
            imgSrc: ibrarImg
          }]} />
            </div>
          </div>
        </div>
      </>;
};

export { AboutPages };
