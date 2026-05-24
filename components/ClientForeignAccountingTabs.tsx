"use client";

import dynamic from "next/dynamic";

const ForeignAccountingTabs = dynamic(() => import("./ForeignAccountingTabs"), { ssr: false });

export default function ClientForeignAccountingTabs() {
  return <ForeignAccountingTabs />;
}
