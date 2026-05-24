"use client";

import dynamic from "next/dynamic";

const CalEmbed = dynamic(() => import("./CalEmbed"), { ssr: false });

export default function CalWrapper() {
  return <CalEmbed />;
}
