"use client";

import { Navbar, ContactSection, Footer } from "@/components/SiteLayout";
import { createLucideIcon } from "@/lib/createLucideIcon";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";
import { sajidImg, aliImg, fizzaImg, mahekImg, ibrarImg } from "@/lib/assets";
import Link from "@/components/RouterLink";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
  }]],
  C_p = createLucideIcon("Check", g);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
  }]],
  C_v = createLucideIcon("Clock", N);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
  }], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
  }]],
  C_y = createLucideIcon("Code", b);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f = [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
  }], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
  }], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
  }]],
  C_w = createLucideIcon("Database", f);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
  }], ["path", {
    d: "M3 9h18",
    key: "1pudct"
  }], ["path", {
    d: "M3 15h18",
    key: "5xshup"
  }], ["path", {
    d: "M9 3v18",
    key: "fh3hqa"
  }], ["path", {
    d: "M15 3v18",
    key: "14nvp0"
  }]],
  A = createLucideIcon("Grid3x3", k);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
  }]],
  C_z = createLucideIcon("Star", M);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
  }], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
  }]],
  C = createLucideIcon("User", T),
  S = () => <section className="about-redesign-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10">
            <h4 className="about-sub-title">WHO WE ARE</h4>
            <h2 className="about-headline">
              Your software delivery team —<br />
              We write code. You grow your business.
            </h2>
            <p className="about-intro-text mt-4">
              DeutPak Digital Solutions is a software house built around a
              simple idea: that growing businesses deserve senior engineering
              talent without the cost, the wait, or the guesswork.
            </p>
            <p className="about-intro-text mt-3">
              We design, build, and ship custom software, data and BI platforms,
              AI-enabled automation, and the design and marketing that brings it
              all to market — end to end, under one roof.
            </p>
            <div className="about-divider" />
          </div>
        </div>
        <div className="row g-4 mb-5 pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="methodology-num purple">01</div>
            <h4 className="methodology-title">Learn first</h4>
            <p className="methodology-desc">
              We work the way the best internal teams do: we learn your business
              first, architect the right solution second, and stay accountable
              from kickoff through launch and beyond.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="methodology-num green">02</div>
            <h4 className="methodology-title">Architect right</h4>
            <p className="methodology-desc">
              Two specialist teams sit at our core — one focused on product and
              application engineering, the other on data, BI, and solution
              architecture.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="methodology-num red">03</div>
            <h4 className="methodology-title">Stay accountable</h4>
            <p className="methodology-desc">
              Together they cover the full arc from a single idea to a
              production system your whole company relies on.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h4 className="about-sub-title mb-4">TWO TEAMS, ONE DELIVERY</h4>
            <div className="two-teams-wrapper">
              <div className="team-line" />
              <div className="team-connector">ONE</div>
              <div className="row g-4 justify-content-between">
                <div className="col-lg-5 position-relative z-index-2">
                  <div className="team-box left">
                    <div className="team-box-header">
                      <div className="team-icon-wrapper purple">
                        <C_y size={24} />
                      </div>
                      <h4 className="team-box-title">
                        Product & Application
                        <br />
                        Engineering
                      </h4>
                    </div>
                    <p className="team-box-desc">
                      The application your users see — built to feel effortless.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 position-relative z-index-2">
                  <div className="team-box right">
                    <div className="team-box-header">
                      <div className="team-icon-wrapper green">
                        <C_w size={24} />
                      </div>
                      <h4 className="team-box-title">
                        Data, BI & Solution
                        <br />
                        Architecture
                      </h4>
                    </div>
                    <p className="team-box-desc">
                      The data and architecture beneath it — built to last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="promise-box">
              <h4 className="about-sub-title text-warning mb-0">OUR PROMISE</h4>
              <h2 className="promise-title">
                Clear scope. Predictable cost. Software that works on day one.
              </h2>
              <p className="promise-desc">
                Our promise is uncomplicated: clear scope, predictable cost, and
                software that works on day one — not after six months of
                revisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>,
  W = () => <section className="about-redesign-section bg-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-12">
            <div className="vmg-card">
              <h3 className="vmg-title">Vision</h3>
              <p className="vmg-desc">
                To be the delivery partner that businesses trust to turn
                ambition into working software — the team they call first when
                something important needs to get built, built well, and built on
                time.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="vmg-card">
              <h3 className="vmg-title">Mission</h3>
              <p className="vmg-desc">
                To give companies the engineering muscle of a senior in-house
                team — full-stack development, data and BI, and practical AI —
                without the cost and complexity of building one. We do it
                through deep collaboration, honest scoping, and a relentless
                focus on systems that actually ship and actually last.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="vmg-card">
              <h3 className="vmg-title">Goal</h3>
              <p className="vmg-desc">
                To put real, working technology — AI, automation, cloud, and
                modern data platforms — into the hands of businesses that have
                been told it's out of reach. Less experimentation, more results:
                workflows automated, decisions sharpened, resources freed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>,
  D = () => {
    const s = [{
      num: "01",
      title: "Senior by default",
      desc: "Every project is owned by experienced engineers, not handed down to juniors. You get the people who've solved the problem before.",
      icon: <C_z />,
      colorClass: "bg-purple"
    }, {
      num: "02",
      title: "Clarity over jargon",
      desc: "Honest scope, fixed budgets, plain language. You always know what you're getting, what it costs, and when it lands.",
      icon: <C_v />,
      colorClass: "bg-yellow"
    }, {
      num: "03",
      title: "We ship",
      desc: "Pilots that gather dust help no one. We measure ourselves by what goes live and the results it drives.",
      icon: <C_p />,
      colorClass: "bg-green"
    }, {
      num: "04",
      title: "Built to last",
      desc: "Clean architecture, documented code, and systems your team can grow into — not throwaway work you'll pay to rebuild.",
      icon: <A />,
      colorClass: "bg-blue"
    }, {
      num: "05",
      title: "Your business first",
      desc: "We learn how you operate before we write a line of code, so the solution fits the company you actually run.",
      icon: <C />,
      colorClass: "bg-red"
    }];
    return <section className="about-redesign-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="core-values-header">
                <h4 className="about-sub-title text-white mb-0">
                  {"DeutPak "}
                  <span className="highlight-yellow">Digital</span>
                  {" Solutions"}
                </h4>
                <h2>Our core values</h2>
                <p>The principles behind every line of code we write.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {s.map((c, i) => <div className="core-value-card" key={i}>
                  <div className="cv-num">{c.num}</div>
                  <div className={`cv-icon ${c.colorClass}`}>{c.icon}</div>
                  <div className="cv-content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>;
  },
  I = "/assets/kamran-w1ktR38N.jpg",
  E = () => {
    const {
      language: s
    } = useLanguage();
    return <>
        <section className="service-area bg-gray-gradient pd-bottom-120 pd-top-120 text-center">
          <style>{`
            .team-card {
              transition: all 0.3s ease;
              border-radius: 12px;
            }
            .team-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 15px 35px rgba(0,0,0,0.12);
            }

            .team-card img {
              transition: transform 0.4s ease;
              border-radius: 10px;
            }
            .team-card:hover img {
              transform: scale(1.07);
            }

            .team-card .thumb {
              overflow: hidden;
              border-radius: 10px;
            }

            .team-section-title {
              margin: 60px 0 25px;
              font-weight: 700;
              font-size: 28px;
              text-align: center;
            }
          `}</style>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-xl-8 text-center">
                <div className="section-title style-2">
                  <h4 className="sub-title">{translations[s].aboutTeamTitle}</h4>
                  <h2 className="title">{translations[s].aboutTeamHeading}</h2>
                  <p>{translations[s].aboutTeamDetail}</p>
                </div>
              </div>
            </div>
            <h3 className="team-section-title">Leadership</h3>
            <div className="row justify-content-center g-4">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src={sajidImg} alt="Sajid Mohamed Nawaz" />
                  </div>
                  <h5 className="mt-3">Sajid Mohamed Nawaz</h5>
                  <p>CEO</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src={aliImg} alt="Ali Mateen" />
                  </div>
                  <h5 className="mt-3">Ali Mateen</h5>
                  <p>Solution Architect</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src={I} alt="Kamran Waseem" />
                  </div>
                  <h5 className="mt-3">Kamran Waseem</h5>
                  <p>IT Project Manager</p>
                </div>
              </div>
            </div>
            <h3 className="team-section-title mt-5">Development Team</h3>
            <div className="row justify-content-center g-4">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src={fizzaImg} alt="Fizza Mubeen" />
                  </div>
                  <h5 className="mt-3">Fizza Mubeen</h5>
                  <p>Web Developer</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src="https://ui-avatars.com/api/?name=Ali+Ahmed&background=F31F2D&color=fff&size=300" alt="Ali Ahmed" />
                  </div>
                  <h5 className="mt-3">Ali Ahmed</h5>
                  <p>Lead, Microsoft Fabric & Azure</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src="https://ui-avatars.com/api/?name=Misbah&background=171313&color=fff&size=300" alt="Misbah" />
                  </div>
                  <h5 className="mt-3">Misbah</h5>
                  <p>Lead Product & Application Engineering</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src="https://ui-avatars.com/api/?name=Junaid&background=F31F2D&color=fff&size=300" alt="Junaid" />
                  </div>
                  <h5 className="mt-3">Junaid</h5>
                  <p>Software Developer</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src="https://ui-avatars.com/api/?name=Tauqeer+Ali+Khan&background=171313&color=fff&size=300" alt="Tauqeer Ali Khan" />
                  </div>
                  <h5 className="mt-3">Tauqeer Ali Khan</h5>
                  <p>AI Consultant</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src="https://ui-avatars.com/api/?name=Wajahat+Hashmi&background=F31F2D&color=fff&size=300" alt="Wajahat Hashmi" />
                  </div>
                  <h5 className="mt-3">Wajahat Hashmi</h5>
                  <p>AI Developer</p>
                </div>
              </div>
            </div>
            <h3 className="team-section-title">Other Team Members</h3>
            <div className="row justify-content-center g-4">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src={mahekImg} alt="Mahek Sajid" />
                  </div>
                  <h5 className="mt-3">Mahek Sajid</h5>
                  <p>Dual Student - People Manager</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-inner team-card text-center p-2">
                  <div className="thumb">
                    <img src={ibrarImg} alt="Ibrar Ikram" />
                  </div>
                  <h5 className="mt-3">Ibrar Ikram</h5>
                  <p>Operations Engineer</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-12 text-center">
                <p className="fst-italic text-muted" style={{
                fontSize: "18px"
              }}>
                  {translations[s].aboutTeamGrowing}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>;
  },
  AboutUs = () => {
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
                  <h1 className="page-title">{translations[s].menuAbout}</h1>
                  <ul className="page-list breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">{translations[s].menuHome}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {translations[s].menuAbout}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <S />
        <W />
        <D />
        <E />
        <ContactSection />
        <Footer />
      </>;
  };

export default AboutUs;
