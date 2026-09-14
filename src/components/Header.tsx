"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#estimate"
          className="hidden rounded-md bg-brand-orange px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Contact
        </a>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-neutral-900" />
          <span className="h-0.5 w-6 bg-neutral-900" />
          <span className="h-0.5 w-6 bg-neutral-900" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-neutral-100 bg-white px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-neutral-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#estimate"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-brand-orange px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
