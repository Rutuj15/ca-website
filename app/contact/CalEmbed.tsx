"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

export default function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "sakshi-ckb51f/15min";

  useEffect(() => {
    if (!containerRef.current) return;

    // Define the init function Cal.com expects
    window.Cal =
      window.Cal ||
      function (...args: unknown[]) {
        (window.Cal as unknown as { q: unknown[] }).q =
          (window.Cal as unknown as { q: unknown[] }).q || [];
        (window.Cal as unknown as { q: unknown[] }).q.push(args);
      };

    // Queue the inline embed call
    window.Cal("inline", {
      elementOrSelector: "#cal-embed-container",
      calLink,
    });

    // Load the Cal.com embed script (only once)
    if (!document.querySelector('script[src="https://cal.com/embed"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cal.com/embed";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Clean up the container on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
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
