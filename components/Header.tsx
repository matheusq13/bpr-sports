"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Experiência", href: "#solucao" },
  { label: "Incluso", href: "#incluso" },
  { label: "Agenda", href: "#agenda" },
  { label: "Investimento", href: "#investimento" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rubra-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" aria-label="RUBRA Sports" className="flex items-center group">
          <Image
            src="/rubra-logo.png"
            alt="RUBRA Sports"
            width={180}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-rubra-white/70 hover:text-rubra-green transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#inscricao"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-rubra-green px-5 py-2.5 text-sm font-semibold text-rubra-black hover:bg-rubra-greenLt transition-all glow-green-sm"
        >
          Garantir bilhete
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="lg:hidden rounded-md p-2 text-rubra-white/80 hover:text-rubra-green"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-rubra-black/95 backdrop-blur-xl">
          <div className="flex flex-col px-5 py-4 gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-rubra-white/80 hover:text-rubra-green transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-rubra-green px-5 py-3 font-semibold text-rubra-black"
            >
              Garantir bilhete
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
