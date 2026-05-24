import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

const servicesEntry = NAV_LINKS.find((l) => l.label === "Services");
const serviceLinks = servicesEntry && "children" in servicesEntry
  ? (servicesEntry.children as readonly { label: string; href: string }[])
  : [];

export default function Footer() {
  return (
    <footer className="border-t bg-navy-dark text-navy-100">
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              CA Sakshi Khedkar
            </h3>
            <p className="mt-2 text-sm">
              ICAI No. {CONTACT.icaiNo}
            </p>
            <p className="mt-1 text-sm">{CONTACT.address}</p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/tax-tools"
                  className="text-sm transition-colors hover:text-gold"
                >
                  Tax Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-gold"
                >
                  About the Practice
                </Link>
              </li>
              <li>
                <Link
                  href="/start-a-business"
                  className="text-sm transition-colors hover:text-gold"
                >
                  Start a Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.address}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-navy-light" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-navy-100 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} CA Sakshi Khedkar. All rights reserved.</p>
          <p>
            This website is for informational purposes only and does not constitute
            professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
