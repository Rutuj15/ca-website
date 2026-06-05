"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SERVICE_PATHS = [
  "/gst-services", "/income-tax", "/international-taxation",
  "/start-a-business", "/company-llp-compliance", "/accounting-payroll",
  "/virtual-cfo", "/foreign-accounting", "/audit-assurance", "/tax-litigation",
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const serviceChildren = NAV_LINKS.find((l) => l.label === "Services")
    ?.children as { label: string; href: string; icon: string }[] | undefined;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServiceActive = SERVICE_PATHS.some((p) => pathname.startsWith(p));

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CA Sakshi Khedkar"
              width={140}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-navy-50 hover:text-navy outline-none",
                      isServiceActive ? "text-gold" : "text-gray-700"
                    )}
                  >
                    Services
                    <ChevronDown className="h-3.5 w-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {serviceChildren?.map((child) => (
                      <DropdownMenuItem
                        key={child.href}
                        className={cn("cursor-pointer", isActive(child.href) && "text-gold font-medium")}
                      >
                        <Link href={child.href} className="w-full">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-navy-50 hover:text-navy",
                    isActive(link.href) ? "text-gold" : "text-gray-700"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-lg bg-gold px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gold-dark md:inline-flex"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-navy-50 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Sheet — rendered outside header to escape stacking context */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-72 overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <Image
                src="/logo.png"
                alt="CA Sakshi Khedkar"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-1 text-gray-500 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <div key={link.label}>
                    <span className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Services
                    </span>
                    {serviceChildren?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-md px-3 py-2 pl-6 text-sm transition-colors hover:bg-navy-50",
                          isActive(child.href) ? "font-medium text-gold" : "text-gray-700"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-navy-50",
                      isActive(link.href) ? "text-gold" : "text-gray-700"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-gold px-4 py-2 text-sm font-medium text-navy hover:bg-gold-dark"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
