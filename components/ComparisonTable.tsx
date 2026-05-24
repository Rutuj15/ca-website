export default function ComparisonTable() {
  const features = [
    { feature: "Separate legal entity", sp: "No", partnership: "No", llp: "Yes", pvtLtd: "Yes" },
    { feature: "Limited liability", sp: "No", partnership: "No", llp: "Yes", pvtLtd: "Yes" },
    { feature: "Tax rate", sp: "Individual slabs", partnership: "30%", llp: "30%", pvtLtd: "25.17%" },
    { feature: "Can raise equity", sp: "No", partnership: "No", llp: "No", pvtLtd: "Yes" },
    { feature: "Compliance burden", sp: "Minimal", partnership: "Low", llp: "Moderate", pvtLtd: "High" },
    { feature: "Setup time", sp: "1-2 days", partnership: "5-7 days", llp: "10-15 days", pvtLtd: "15-20 days" },
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-navy-100">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="px-4 py-3 text-left font-semibold">Feature</th>
            <th className="px-4 py-3 text-left font-semibold">Sole Proprietorship</th>
            <th className="px-4 py-3 text-left font-semibold">Partnership</th>
            <th className="px-4 py-3 text-left font-semibold">LLP</th>
            <th className="px-4 py-3 text-left font-semibold">Pvt Ltd Company</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, i) => (
            <tr
              key={row.feature}
              className={i % 2 === 0 ? "bg-white" : "bg-navy-50"}
            >
              <td className="px-4 py-3 font-medium text-navy">{row.feature}</td>
              <td className="px-4 py-3">{row.sp}</td>
              <td className="px-4 py-3">{row.partnership}</td>
              <td className="px-4 py-3">{row.llp}</td>
              <td className="px-4 py-3">{row.pvtLtd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
