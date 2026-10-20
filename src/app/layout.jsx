import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata = {
  title: "Deutpak - Digitale Lösungen",
  icons: { icon: "/favicon.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const GA_ID = "G-7GBJV1CEEZ";

export default function RootLayout({ children }) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Swapped to bootstrap.rtl.min.css by LanguageProvider when Arabic is selected */}
        <link id="bootstrap-theme" rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* Site styles must load after Bootstrap, as in the original build */}
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="sc5">
        <LanguageProvider>{children}</LanguageProvider>
        <FacebookPixel pixelId="785108654262168" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=USj2B2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
