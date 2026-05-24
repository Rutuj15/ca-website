"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package } from "lucide-react";
import gstRates from "@/data/gst-rates.json";

type GSTRateItem = (typeof gstRates)[number];

export default function GSTRateFinder() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo<GSTRateItem[]>(() => {
    if (!debouncedQuery) return [];
    return gstRates.filter(
      (item) =>
        item.description.toLowerCase().includes(debouncedQuery) ||
        item.hsn_sac.toLowerCase().includes(debouncedQuery)
    );
  }, [debouncedQuery]);

  const rateColor = (total: number) => {
    if (total === 0) return "bg-green-100 text-green-800";
    if (total <= 5) return "bg-blue-100 text-blue-800";
    if (total <= 12) return "bg-yellow-100 text-yellow-800";
    if (total <= 18) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="size-5 text-gold" />
          GST Rate Finder
        </CardTitle>
        <CardDescription>
          Search by item name or HSN/SAC code to find applicable GST rates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="e.g. Milk, 8517, Laptop, Restaurant..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {!debouncedQuery && (
          <div className="flex h-48 items-center justify-center text-muted-foreground">
            <p className="text-center text-sm">
              Type an item name or HSN/SAC code to search
            </p>
          </div>
        )}

        {debouncedQuery && results.length === 0 && (
          <div className="flex h-48 items-center justify-center text-muted-foreground">
            <p className="text-center text-sm">
              No results found for &ldquo;{query}&rdquo;. Try a different
              search term.
            </p>
          </div>
        )}

        {results.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-2 pr-3 font-medium text-muted-foreground">
                    HSN/SAC
                  </th>
                  <th className="pb-2 pr-3 font-medium text-muted-foreground">
                    Description
                  </th>
                  <th className="pb-2 pr-3 text-right font-medium text-muted-foreground">
                    CGST
                  </th>
                  <th className="pb-2 pr-3 text-right font-medium text-muted-foreground">
                    SGST
                  </th>
                  <th className="pb-2 pr-3 text-right font-medium text-muted-foreground">
                    IGST
                  </th>
                  <th className="pb-2 pr-3 text-right font-medium text-muted-foreground">
                    Total
                  </th>
                  <th className="pb-2 font-medium text-muted-foreground">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-2 pr-3 font-mono text-xs">
                      {item.hsn_sac}
                    </td>
                    <td className="py-2 pr-3 font-medium">{item.description}</td>
                    <td className="py-2 pr-3 text-right">{item.cgst_rate}%</td>
                    <td className="py-2 pr-3 text-right">{item.sgst_rate}%</td>
                    <td className="py-2 pr-3 text-right">{item.igst_rate}%</td>
                    <td className="py-2 pr-3 text-right">
                      <Badge
                        className={rateColor(item.total_gst)}
                        variant="outline"
                      >
                        {item.total_gst}%
                      </Badge>
                    </td>
                    <td className="py-2 text-xs text-muted-foreground">
                      {item.exemptions || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
