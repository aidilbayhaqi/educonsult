"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#mengapa-kami", label: "Mengapa Kami" },
  { href: "#proses", label: "Proses" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-black"
        >
          <Image
    src="/logo.png"
    alt="Consultindo Logo"
    width={42}
    height={42}
    priority
    className="h-10 w-10 object-contain"
  />

         Consultindo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-md font-blod text-gray-600 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            href="#kontak"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105 hover:opacity-90"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 text-black md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Button */}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
            >
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}