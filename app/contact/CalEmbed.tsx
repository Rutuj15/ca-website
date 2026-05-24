"use client";

import { useEffect, useRef } from "react";

export default function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "sakshi-khedkar/30min";

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing instance
    const existing = containerRef.current.querySelector("cal-inline");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import Cal from "${typeof window !== "undefined" ? "https://cal.com" : ""}/embed";
      Cal("inline", { elementOrSelector: "#cal-embed-container", calLink: "${calLink}" });
    `;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [calLink]);

  return (
    <div
      id="cal-embed-container"
      ref={containerRef}
      className="mx-auto max-w-3xl min-h-[500px] rounded-xl border"
    />
  );
}
