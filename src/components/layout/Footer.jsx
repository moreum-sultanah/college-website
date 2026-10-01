
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/college-logo.png";
import { siteInfo } from "../../data/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Notices", to: "/notices" },
  { label: "Admissions", to: "/admissions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Brand — logo + name side by side */}
        <div className="flex items-center justify-center gap-3">
          <img
            src={logo}
            alt={`${siteInfo.name} logo`}
            className="h-14 w-14 rounded-full object-contain"
          />
          <p className="font-heading text-2xl font-semibold text-primary">
            {siteInfo.name}
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation" className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact row — dividers দিয়ে ভাগ করা */}
        <ul className="mt-6 flex flex-wrap items-center justify-center">
          <li className="flex items-center gap-2 px-4 text-sm text-ink/70">
            <MapPin className="h-4 w-4 text-primary" />
            {siteInfo.location}
          </li>
          <li
            aria-hidden="true"
            className="hidden h-5 w-px bg-ink/15 sm:block"
          />
          <li className="flex items-center gap-2 px-4 text-sm text-ink/70">
            <Phone className="h-4 w-4 text-primary" />
            {siteInfo.phone}
          </li>
          <li
            aria-hidden="true"
            className="hidden h-5 w-px bg-ink/15 sm:block"
          />
          <li className="flex items-center gap-2 px-4 text-sm text-ink/70">
            <Mail className="h-4 w-4 text-primary" />
            {siteInfo.email}
          </li>
        </ul>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-ink/10 pt-5">
          <p className="text-center text-xs text-ink/60">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}