# DeutPak Digital — Next.js

Next.js (App Router) port of deutpakdigital.com, rebuilt from the production Vite/React build.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Layout

| Path | What it holds |
| --- | --- |
| `src/app/` | One `page.jsx` per original route (URL casing kept, e.g. `/Privacy`, `/digitale-Transformation`) |
| `src/components/home/` | The full-screen homepage: nav, hero slides, about/team, services, products, contact form, particle canvas, theme-reveal overlay |
| `src/views/` | Inner pages (services, products, landing pages, blog posts, legal pages) |
| `src/components/` | Shared pieces: `SiteLayout` (Navbar / ContactSection / Footer), `InnerHeader`, `ServiceIntro`, `NumberCard`, `TestimonialSlider`, `LanguageDropdown` |
| `src/i18n/` | German (default), English and Arabic strings |
| `src/context/LanguageContext.jsx` | Language state; switches `dir="rtl"` and the Bootstrap RTL stylesheet for Arabic |
| `src/lib/email.js` | Contact form sending via EmailJS (IDs overridable with `NEXT_PUBLIC_EMAILJS_*` env vars) |
| `public/assets/` | Images and fonts, original filenames |
| `public/css/`, `public/styles/` | Bootstrap (LTR/RTL) and the site stylesheets, linked in the same order as the original |

Analytics from the original site (Google Analytics, Meta Pixel, Klaviyo) are wired in `src/app/layout.jsx`.

## Notes

- Component bodies were recovered from the compiled bundle, so local variable names inside them are short (`r`, `e`, `t`…). Imports, component names and file structure are clean; rename locals as you touch each file.
- Stylesheets are served from `public/` instead of imported, because Next.js would otherwise inject them before Bootstrap and change the cascade.
