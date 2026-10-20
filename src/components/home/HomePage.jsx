"use client";

import * as React from "react";
import { HomeNav } from "@/components/home/HomeNav";
import { ThemeReveal } from "@/components/home/ThemeReveal";
import { ParticleBackground } from "@/components/home/ParticleBackground";
import { HeroSlides } from "@/components/home/HeroSlides";
import { AboutPages } from "@/components/home/AboutPages";
import { ServicesPage } from "@/components/home/ServicesPage";
import { ProductsPage } from "@/components/home/ProductsPage";
import { ContactPage } from "@/components/home/ContactPage";

const TOTAL_PAGES = 14;

const HomePage = () => {
  const [r, e] = React.useState(0),
    t = React.useRef(-1),
    [n, i] = React.useState("dark"),
    a = React.useRef(),
    o = React.useRef(null),
    l = React.useCallback(p => {
      a.current = p;
    }, []),
    u = React.useCallback(() => {
      i(p => p === "dark" ? "light" : "dark");
    }, []),
    c = React.useCallback(() => {
      a.current ? a.current() : u();
    }, [u]),
    d = React.useCallback(p => {
      if (!(p < 0 || p >= TOTAL_PAGES) && o.current) {
        if (window.innerWidth <= 768) {
          const y = o.current.querySelector(`.page[data-page="${p}"]`);
          if (y) {
            y.scrollIntoView({
              behavior: "smooth"
            });
            return;
          }
        }
        o.current.scrollTo({
          top: p * window.innerHeight,
          behavior: "smooth"
        });
      }
    }, []),
    g = p => {
      const b = p.dataset.page,
        y = p.querySelectorAll("[data-s]"),
        v = document.querySelector(`.theme-orb-overlay .page[data-page="${b}"]`),
        k = v ? v.querySelectorAll("[data-s]") : [];
      y.forEach((w, j) => {
        const E = w,
          C = (Math.random() - 0.5) * 80,
          M = Math.random() * 40 + 20,
          F = (Math.random() - 0.5) * 8,
          re = 0.9 + Math.random() * 0.08,
          A = 3 + Math.random() * 5,
          D = P => {
            P.style.setProperty("--tx", `${C}px`), P.style.setProperty("--ty", `${M}px`), P.style.setProperty("--rot", `${F}deg`), P.style.setProperty("--sc", re.toString()), P.style.setProperty("--bl", `${A}px`);
          };
        D(E), k[j] && D(k[j]);
      });
    },
    m = p => {
      const b = p.dataset.page,
        y = p.querySelectorAll("[data-s]"),
        v = document.querySelector(`.theme-orb-overlay .page[data-page="${b}"]`),
        k = v ? v.querySelectorAll("[data-s]") : [];
      y.forEach((w, j) => {
        w.classList.remove("in"), k[j] && k[j].classList.remove("in"), w.offsetWidth, k[j] && k[j].offsetWidth;
      }), g(p), requestAnimationFrame(() => {
        y.forEach(w => w.classList.add("in")), k.length > 0 && k.forEach(w => w.classList.add("in"));
      });
    };
  return React.useEffect(() => {
    const p = o.current;
    if (!p) return;
    const b = p.querySelectorAll(".page");
    b.forEach(v => g(v));
    const y = new IntersectionObserver(v => {
      v.forEach(k => {
        if (k.isIntersecting && k.intersectionRatio >= 0.6) {
          const w = parseInt(k.target.dataset.page || "0", 10);
          w !== t.current && (t.current = w, e(w), m(k.target));
        }
      });
    }, {
      root: p,
      threshold: 0.6
    });
    return b.forEach(v => y.observe(v)), () => {
      b.forEach(v => y.unobserve(v)), y.disconnect();
    };
  }, []), <div className="deutpak-digital-app" data-theme={n}>
          <HomeNav currentPage={r} totalPages={TOTAL_PAGES} scrollToPage={d} theme={n} toggleTheme={c} />
          <ThemeReveal theme={n} toggleTheme={u} currentPage={r} pagesScrollRef={o} onRegisterRevealTrigger={l} />
          <div id="pages" ref={o}>
            <ParticleBackground theme={n} />
            <HeroSlides scrollToPage={d} theme={n} toggleTheme={u} />
            <AboutPages currentPage={r} />
            <ServicesPage currentPage={r} />
            <ProductsPage />
            <ContactPage scrollToPage={d} />
          </div>
        </div>;
};

export { HomePage };
