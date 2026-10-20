"use client";

import * as React from "react";

const Mi = 900;

const Me = -500;

const wt = 0.52;

const Te = 80;

const vt = 2e3;

const St = 1900;

const ue = 1600;

const Ne = 1400;

const Ni = typeof window < "u" && window.innerWidth <= 768 ? 400 : 1200;

const fe = 120;

const Fi = 1;

const kt = 0.07;

const Dt = Math.PI * 0.08;

const Tt = 110;

const Hi = 2.6;

const xt = 0.88;

const ParticleBackground = ({
  theme: r,
  analyserRef: e
}) => {
  const t = React.useRef(null),
    n = React.useRef(0),
    i = React.useRef(0),
    a = React.useRef(0),
    o = React.useRef({
      x: -9999,
      y: -9999
    });
  return React.useEffect(() => {
    const l = t.current;
    if (!l) return;
    const u = l.getContext("2d");
    if (!u) return;
    let c = window.innerWidth,
      d = window.innerHeight,
      fs = 1;
    // The field is tuned for 1440x900; on larger screens spread it out so it reaches every edge.
    const fieldScale = () => Math.max(1, c / 1440, d / 900);
    const g = () => {
      c = window.innerWidth, d = window.innerHeight, l.width = c, l.height = d, fs = fieldScale();
    };
    g(), window.addEventListener("resize", g);
    const m = document.getElementById("pages"),
      p = () => {
        m ? i.current = m.scrollTop : i.current = window.scrollY;
      };
    m ? m.addEventListener("scroll", p, {
      passive: !0
    }) : window.addEventListener("scroll", p, {
      passive: !0
    });
    const b = K => {
        o.current = {
          x: K.clientX,
          y: K.clientY
        };
      },
      y = () => {
        o.current = {
          x: -9999,
          y: -9999
        };
      };
    window.addEventListener("mousemove", b), window.addEventListener("mouseleave", y);
    const v = [45, 48, 51, 54, 42, 47, 52],
      k = [],
      w = Math.cos(Dt) * kt,
      j = -Math.sin(Dt) * kt;
    // More particles over a larger area keeps the density close to the 1440x900 look.
    const count = Math.round(Ni * Math.min(fs * fs, 2.5));
    for (let K = 0; K < count; K++) k.push({
      wx: (Math.random() - 0.5) * ue,
      wy: Math.random() * St + Te,
      wz: Me + Math.random() * Ne,
      dvx: w + (Math.random() - 0.5) * 0.04,
      dvy: j + (Math.random() - 0.5) * 0.04,
      repelVx: 0,
      repelVy: 0,
      baseSize: 0.8 + Math.random() * 1.8,
      glitterPhase: Math.random() * Math.PI * 2,
      glitterSpeed: 0.025 + Math.random() * 0.035,
      hue: v[Math.floor(Math.random() * v.length)] + (Math.random() - 0.5) * 6,
      saturation: 80 + Math.random() * 15,
      pulseOffset: Math.random() * Math.PI * 2,
      trail: []
    });
    let E = null,
      C = 0,
      M = 0,
      F = new Float32Array(128),
      re = 0;
    const A = Math.cos(wt),
      D = Math.sin(wt),
      P = (K, $, _, ee) => {
        const Q = $ - ee;
        if (Q < Te || Q > vt) return null;
        const te = Q * A - _ * D,
          H = Q * D + _ * A;
        if (H <= 0) return null;
        const U = Mi / H;
        // Positions spread with the field scale; dot size stays as designed.
        return {
          sx: c / 2 + K * U * fs,
          sy: d / 2 - te * U * fs,
          scale: U
        };
      },
      W = r === "dark",
      L = () => {
        re++, re % 4 === 0 && k.sort((f, T) => T.wy - f.wy), u.fillStyle = W ? "rgba(4, 28, 23, 0.30)" : "rgba(245, 252, 248, 0.30)", u.fillRect(0, 0, c, d);
        let K = 0,
          $ = 0;
        if (e?.current) {
          const f = e.current;
          (!E || E.length !== f.frequencyBinCount) && (E = new Uint8Array(f.frequencyBinCount), F = new Float32Array(f.frequencyBinCount)), f.getByteFrequencyData(E);
          for (let I = 0; I < F.length; I++) {
            const Y = E[I] / 255;
            F[I] = Y > F[I] ? Y : F[I] * 0.82;
          }
          let T = 0;
          for (let I = 2; I < 8; I++) T += F[I];
          K = T / 6;
          let N = 0;
          for (let I = 2; I < 80; I++) N += F[I];
          $ = N / 78;
        }
        C = K > C ? K : C * 0.84, M = $ > M ? $ : M * 0.9, a.current += (i.current * Fi - a.current) * 0.06;
        const _ = a.current,
          ee = [];
        for (const f of k) {
          f.wx += f.dvx, f.wy += f.dvy, f.glitterPhase += f.glitterSpeed + M * 0.1, f.repelVx *= xt, f.repelVy *= xt, f.wx += f.repelVx, f.wy += f.repelVy, f.wy - _ < Te && (f.wy = _ + St * (0.5 + Math.random() * 0.5), f.wx = (Math.random() - 0.5) * ue, f.wz = Me + Math.random() * Ne, f.repelVx = 0, f.repelVy = 0), f.wy - _ > vt && (f.wy = _ + Te + Math.random() * 200, f.wx = (Math.random() - 0.5) * ue, f.wz = Me + Math.random() * Ne, f.repelVx = 0, f.repelVy = 0), f.wx > ue * 0.55 && (f.wx = -ue * 0.55), f.wx < -ue * 0.8 && (f.wx = ue * 0.45);
          const T = P(f.wx, f.wy, f.wz, _);
          if (!T) continue;
          const N = o.current.x,
            I = o.current.y,
            Y = T.sx - N,
            J = T.sy - I,
            R = Math.sqrt(Y * Y + J * J);
          if (R < Tt && R > 0) {
            const ne = (1 - R / Tt) * Hi,
              V = Y / R,
              q = J / R;
            f.repelVx += V * ne / T.scale, f.repelVy -= q * ne * 0.3 / T.scale;
          }
          ee.push({
            n: f,
            sx: T.sx,
            sy: T.sy,
            scale: T.scale
          }), f.trail.push({
            x: T.sx,
            y: T.sy
          }), f.trail.length > 5 && f.trail.shift();
        }
        for (const {
          n: f,
          scale: T
        } of ee) if (!(f.trail.length < 2)) for (let N = 1; N < f.trail.length; N++) {
          const I = N / f.trail.length,
            Y = I * I * (W ? 0.06 : 0.04);
          Y < 0.005 || (u.beginPath(), u.moveTo(f.trail[N - 1].x, f.trail[N - 1].y), u.lineTo(f.trail[N].x, f.trail[N].y), u.strokeStyle = `hsla(${f.hue}, ${f.saturation}%, ${W ? 65 : 45}%, ${Y})`, u.lineWidth = Math.max(0.2, f.baseSize * T * 0.4), u.stroke());
        }
        const Q = fe,
          te = Math.ceil(c / Q),
          H = Math.ceil(d / Q),
          U = new Array(te * H);
        for (const f of ee) {
          const T = Math.floor(f.sx / Q),
            N = Math.floor(f.sy / Q);
          if (T >= 0 && T < te && N >= 0 && N < H) {
            const I = N * te + T;
            U[I] || (U[I] = []), U[I].push(f);
          }
        }
        for (let f = 0; f < H; f++) for (let T = 0; T < te; T++) {
          const N = f * te + T,
            I = U[N];
          if (!I || I.length === 0) continue;
          for (let J = 0; J < I.length; J++) {
            const R = I[J];
            for (let ne = J + 1; ne < I.length; ne++) {
              const V = I[ne],
                q = R.sx - V.sx,
                X = R.sy - V.sy,
                oe = Math.sqrt(q * q + X * X);
              if (oe <= fe) {
                const ie = (R.scale + V.scale) * 0.5,
                  le = (1 - oe / fe) * Math.min(ie * 0.0012, 0.03);
                le >= 0.0012 && (u.beginPath(), u.moveTo(R.sx, R.sy), u.lineTo(V.sx, V.sy), u.strokeStyle = W ? `hsla(${R.n.hue}, 40%, 60%, ${le})` : `hsla(${R.n.hue}, 35%, 30%, ${le})`, u.lineWidth = 0.3 + ie * 0.001, u.stroke());
              }
            }
          }
          const Y = [{
            nr: f,
            nc: T + 1
          }, {
            nr: f + 1,
            nc: T - 1
          }, {
            nr: f + 1,
            nc: T
          }, {
            nr: f + 1,
            nc: T + 1
          }];
          for (const {
            nr: J,
            nc: R
          } of Y) if (J >= 0 && J < H && R >= 0 && R < te) {
            const ne = J * te + R,
              V = U[ne];
            if (!V || V.length === 0) continue;
            for (let q = 0; q < I.length; q++) {
              const X = I[q];
              for (let oe = 0; oe < V.length; oe++) {
                const ie = V[oe],
                  le = X.sx - ie.sx,
                  Se = X.sy - ie.sy,
                  Ge = Math.sqrt(le * le + Se * Se);
                if (Ge <= fe) {
                  const Ke = (X.scale + ie.scale) * 0.5,
                    je = (1 - Ge / fe) * Math.min(Ke * 0.0012, 0.03);
                  je >= 0.0012 && (u.beginPath(), u.moveTo(X.sx, X.sy), u.lineTo(ie.sx, ie.sy), u.strokeStyle = W ? `hsla(${X.n.hue}, 40%, 60%, ${je})` : `hsla(${X.n.hue}, 35%, 30%, ${je})`, u.lineWidth = 0.3 + Ke * 0.001, u.stroke());
                }
              }
            }
          }
        }
        for (const {
          n: f,
          sx: T,
          sy: N,
          scale: I
        } of ee) {
          const Y = Math.floor(f.pulseOffset / (Math.PI * 2) * 60) + 2,
            R = (F[Math.min(Y, F.length - 1)] ?? 0) * 1.6 + C * 0.5,
            ne = Math.sin(f.glitterPhase) * 0.5 + 0.5,
            V = ne * 0.6 + R * 0.7,
            q = (f.baseSize + R * f.baseSize * 0.9 + ne * f.baseSize * 0.4) * I;
          if (q < 0.3) continue;
          const X = f.saturation + R * 15,
            oe = W ? 55 + V * 25 : 25 + V * 15,
            ie = W ? 0.07 + V * 0.15 : 0.25 + V * 0.25,
            le = q * 1.6,
            Se = W ? 0.01 + R * 0.022 : 0.08 + R * 0.08;
          u.beginPath(), u.arc(T, N, le, 0, Math.PI * 2), u.fillStyle = `hsla(${f.hue}, ${X}%, ${W ? 65 : 40}%, ${Se})`, u.fill(), u.beginPath(), u.arc(T, N, q, 0, Math.PI * 2), u.fillStyle = `hsla(${f.hue}, ${X}%, ${oe}%, ${ie})`, u.fill(), R > 0.55 && q > 1 && (u.beginPath(), u.arc(T - q * 0.3, N - q * 0.3, q * 0.18, 0, Math.PI * 2), u.fillStyle = W ? `rgba(210, 235, 255, ${(R - 0.55) * 0.5})` : `rgba(255, 255, 255, ${(R - 0.55) * 0.4})`, u.fill());
        }
        n.current = requestAnimationFrame(L);
      },
      O = () => {
        document.hidden ? cancelAnimationFrame(n.current) : (cancelAnimationFrame(n.current), n.current = requestAnimationFrame(L));
      };
    return document.addEventListener("visibilitychange", O), L(), () => {
      window.removeEventListener("resize", g), m ? m.removeEventListener("scroll", p) : window.removeEventListener("scroll", p), window.removeEventListener("mousemove", b), window.removeEventListener("mouseleave", y), document.removeEventListener("visibilitychange", O), cancelAnimationFrame(n.current);
    };
  }, [r]), <canvas ref={t} style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 1
  }} />;
};

export { ParticleBackground };
