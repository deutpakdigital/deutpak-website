"use client";

import * as React from "react";
import { HeroSlides } from "@/components/home/HeroSlides";
import { AboutPages } from "@/components/home/AboutPages";
import { ServicesPage } from "@/components/home/ServicesPage";
import { ProductsPage } from "@/components/home/ProductsPage";
import { ContactPage } from "@/components/home/ContactPage";

const ThemeReveal = ({
  theme: r,
  toggleTheme: e,
  currentPage: t,
  pagesScrollRef: n,
  onRegisterRevealTrigger: i
}) => {
  const a = React.useRef(null),
    o = React.useRef(null),
    [l, u] = React.useState(!1),
    [c, d] = React.useState("light");
  React.useEffect(() => {
    const m = n.current;
    if (!m) return;
    const p = () => {
      o.current && (o.current.scrollTop = m.scrollTop);
    };
    return m.addEventListener("scroll", p, {
      passive: !0
    }), p(), () => {
      m.removeEventListener("scroll", p);
    };
  }, [n, n.current, t, l]), React.useEffect(() => {
    const p = setTimeout(() => {
      for (let b = 0; b < 14; b++) {
        const y = document.querySelector(`#pages .page[data-page="${b}"]`),
          v = document.querySelector(`.theme-reveal-overlay .page[data-page="${b}"]`);
        if (y && v) {
          const k = y.querySelectorAll("[data-s]"),
            w = v.querySelectorAll("[data-s]");
          k.forEach((j, E) => {
            if (w[E]) {
              const C = j,
                M = w[E];
              M.style.setProperty("--tx", C.style.getPropertyValue("--tx")), M.style.setProperty("--ty", C.style.getPropertyValue("--ty")), M.style.setProperty("--rot", C.style.getPropertyValue("--rot")), M.style.setProperty("--sc", C.style.getPropertyValue("--sc")), M.style.setProperty("--bl", C.style.getPropertyValue("--bl")), C.classList.contains("in") ? M.classList.add("in") : M.classList.remove("in");
            }
          });
        }
      }
    }, 100);
    return () => clearTimeout(p);
  }, [t, r, l]);
  const g = () => {
    if (l) return;
    d(r === "dark" ? "light" : "dark"), u(!0), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        a.current && a.current.classList.add("active");
      });
    }), setTimeout(() => {
      e(), a.current && a.current.classList.add("fade-out"), setTimeout(() => {
        u(!1), a.current && a.current.classList.remove("active", "fade-out");
      }, 500);
    }, 900);
  };
  return React.useEffect(() => {
    i && i(g);
  }, [r, l, i]), <>
          {l && <div ref={a} className="theme-reveal-overlay" data-theme={c}>
              <div ref={o} className="overlay-pages-container" style={{
        height: "100vh",
        width: "100%",
        overflowY: "hidden",
        position: "relative"
      }}>
                <HeroSlides scrollToPage={() => {}} theme={c} toggleTheme={() => {}} />
                <AboutPages currentPage={t} />
                <ServicesPage currentPage={t} />
                <ProductsPage />
                <ContactPage scrollToPage={() => {}} />
              </div>
            </div>}
        </>;
};

export { ThemeReveal };
