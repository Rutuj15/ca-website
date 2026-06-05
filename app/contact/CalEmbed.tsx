"use client";

import { useEffect, useRef } from "react";

export default function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "sakshi-ckb51f/15min";

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing inline element
    const existing = containerRef.current.querySelector("cal-inline");
    if (existing) existing.remove();

    // Create the <cal-inline> web component
    const calInline = document.createElement("cal-inline");
    calInline.setAttribute("data-cal-link", calLink);
    calInline.style.width = "100%";
    calInline.style.height = "600px";
    containerRef.current.appendChild(calInline);

    // Load the Cal.com embed script (idempotent — safe to call multiple times)
    if (!document.querySelector('script[src="https://cal.com/embed"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cal.com/embed";
      document.head.appendChild(script);
    }

    // Init Cal after the web component is in the DOM
    const initScript = document.createElement("script");
    initScript.type = "module";
    initScript.innerHTML = `
      (async () => {
        const Cal = (await import("https://cal.com/embed")).default;
        Cal("inline", {
          elementOrSelector: "#cal-embed-container",
          calLink: "${calLink}"
        });
      })();
    `;
    document.head.appendChild(initScript);

    return () => {
      initScript.remove();
    };
  }, [calLink]);

  return (
    <div
      id="cal-embed-container"
      ref={containerRef}
      className="mx-auto max-w-3xl min-h-[600px] rounded-xl border"
    />
  );
}
