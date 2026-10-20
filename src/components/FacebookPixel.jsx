"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FacebookPixel({ pixelId }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.fbq) {
      const fbq = (window.fbq = function () {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
      });
      if (!window._fbq) window._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
      window.fbq("init", pixelId);
    }
    window.fbq("track", "PageView");
  }, [pixelId, pathname]);

  return null;
}
