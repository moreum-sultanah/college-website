

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../../assets/college-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Notices", to: "/notices" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo & College Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Cox's Bazar City College logo"
            className="h-11 w-11 rounded-full object-contain"
          />
          <div className="leading-tight">
            <p className="font-heading text-base font-semibold text-primary">
              Cox's Bazar City College
            </p>
            <p className="mt-0.5 text-xs text-ink/60">
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isActive ? "text-primary" : "text-ink/70"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Admissions Button */}
        <div className="hidden md:block">
          <Link
            to="/admissions"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary/90"
          >
            Admissions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/5 md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-ink/70 hover:bg-primary/5 hover:text-primary"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Admissions */}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary/90"
            >
              Admissions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}