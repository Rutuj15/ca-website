"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalEmbed() {
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "sakshi-ckb51f/15min";

  return (
    <div className="mx-auto max-w-lg text-center">
      <a
        href={`https://cal.com/${calLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-gold text-navy hover:bg-gold-dark font-semibold px-8 h-12 text-sm"
        >
          <Calendar className="size-4 mr-2" />
          Pick a Time on Cal.com
        </Button>
      </a>
    </div>
  );
}
