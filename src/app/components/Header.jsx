"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-black/5">
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-navy text-white text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <p>Manufacturer &amp; Exporter of Kids Toys — Bawana, New Delhi</p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+918047640736"
              className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
            >
              <Phone size={13} /> +91-93108-43500
            </a>
            <a
              href="https://wa.me/919310843500"
              className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
            >
              <MessageCircle size={13} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
            <Image
              src="/logos.png"
              alt="Nippon Toys Industries logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-heading font-bold text-lg text-brand-navy">Nippon Toys</p>
            <p className="text-[11px] tracking-wide text-[#D9251B] font-semibold uppercase">
              Industries · New Delhi
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-brand-navySoft hover:text-brand-orange hover:bg-brand-orange/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-black/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} className="text-brand-navy" /> : <Menu size={20} className="text-brand-navy" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden container-x pb-5 flex flex-col gap-1 border-t border-black/5 pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold text-brand-navySoft hover:bg-brand-orange/10 hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}