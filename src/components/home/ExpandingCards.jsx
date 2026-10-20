"use client";

import * as React from "react";

const ExpandingCards = React.forwardRef(({
  items: r,
  defaultActiveIndex: e = 0
}, t) => {
  const [n, i] = React.useState(e),
    [a, o] = React.useState(!1);
  React.useEffect(() => {
    const c = () => o(window.innerWidth >= 768);
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []);
  // A lone card takes the photo's own aspect ratio so the whole image shows uncropped.
  const single = r.length === 1,
    singleSrc = single ? r[0].imgSrc : null,
    [ratio, setRatio] = React.useState(null);
  React.useEffect(() => {
    if (!singleSrc) return;
    const img = new Image();
    const done = () => img.naturalHeight && setRatio(img.naturalWidth / img.naturalHeight);
    img.onload = done;
    img.src = singleSrc;
    if (img.complete) done();
  }, [singleSrc]);
  const l = React.useMemo(() => n === null ? {} : a ? {
      gridTemplateColumns: r.map((d, g) => g === n ? "5fr" : "1fr").join(" ")
    } : {
      gridTemplateRows: r.map((d, g) => g === n ? "5fr" : "1fr").join(" ")
    }, [n, r.length, a]),
    u = single ? {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      height: "100%",
      listStyle: "none",
      padding: 0,
      margin: 0
    } : {
      display: "grid",
      width: "100%",
      height: "100%",
      gap: "8px",
      transition: "grid-template-columns 0.5s ease-out, grid-template-rows 0.5s ease-out",
      listStyle: "none",
      padding: 0,
      margin: 0,
      ...(a ? {
        gridTemplateRows: "1fr"
      } : {
        gridTemplateColumns: "1fr"
      }),
      ...l
    };
  return <ul ref={t} style={u}>
        {r.map((c, d) => {
      const g = n === d,
        m = {
          position: "relative",
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: "12px",
          border: "1px solid var(--border, rgba(255,255,255,0.1))",
          background: "#0a0f1e",
          // Desktop sizes from the available height; on mobile that height isn't fixed, so size from width.
          ...(single ? a ? {
            height: "100%",
            maxWidth: "100%",
            aspectRatio: ratio ?? 0.8
          } : {
            width: "100%",
            aspectRatio: ratio ?? 0.8
          } : {
            minWidth: a ? "72px" : void 0,
            minHeight: a ? void 0 : "56px",
            width: "100%"
          })
        },
        p = {
          position: "absolute",
          top: 0,
          left: 0,
          // Fixed width keeps photos steady while cards resize; a lone card just fills its box.
          width: a && !single ? "500px" : "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          transition: "filter 0.4s ease-out",
          filter: g ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.55)"
        },
        b = {
          position: "absolute",
          inset: 0,
          background: g ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 45%, transparent 80%)" : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)"
        },
        y = {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: g ? "flex-end" : a ? "center" : "flex-end",
          alignItems: g ? "flex-start" : a ? "center" : "flex-start",
          gap: "4px",
          padding: g ? "1.5rem" : a ? "1rem 0.2rem" : "0.8rem 1rem"
        },
        v = {
          fontSize: g ? "1.5rem" : a ? "0.78rem" : "0.85rem",
          fontWeight: g ? 700 : 600,
          color: "#fff",
          margin: 0,
          lineHeight: 1.2,
          whiteSpace: g ? "normal" : "nowrap",
          overflow: g ? "visible" : "hidden",
          textOverflow: "ellipsis",
          letterSpacing: g ? "-0.01em" : "0.08em",
          textTransform: g ? "none" : a ? "uppercase" : "none",
          ...(!g && a ? {
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            alignSelf: "center"
          } : {}),
          transition: "all 0.3s ease-out"
        },
        k = {
          fontSize: "0.9rem",
          color: "var(--accent2, #38bdf8)",
          margin: 0,
          fontWeight: 500,
          opacity: g ? 1 : 0,
          maxHeight: g ? "60px" : "0px",
          overflow: "hidden",
          transition: "opacity 0.3s ease-out 0.1s, max-height 0.3s ease-out 0.1s"
        };
      return <li style={m} onMouseEnter={() => i(d)} onClick={() => i(d)} onFocus={() => i(d)} tabIndex={0} key={c.id}>
              <img src={c.imgSrc} alt={c.title} style={p} />
              <div style={b} />
              <article style={y}>
                <h3 style={v}>{c.title}</h3>
                <p style={k}>{c.role}</p>
              </article>
            </li>;
    })}
      </ul>;
});

ExpandingCards.displayName = "ExpandingCards";

export { ExpandingCards };
