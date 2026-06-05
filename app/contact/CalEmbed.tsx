"use client";

export default function CalEmbed() {
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "sakshi-ckb51f/15min";

  return (
    <div className="mx-auto max-w-3xl">
      <iframe
        src={`https://cal.com/${calLink}`}
        title="Book a Consultation"
        className="h-[600px] w-full rounded-xl border"
        loading="lazy"
      />
    </div>
  );
}
