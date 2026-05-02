"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-white/10 bg-rubra-black/95 backdrop-blur-xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-widest text-rubra-redLt font-bold">
              Staff Experience — 22/05
            </p>
            <p className="text-xs text-rubra-white/65 truncate">
              Vagas limitadas
            </p>
          </div>
          <a
            href="#inscricao"
            className="inline-flex items-center gap-1.5 rounded-full bg-rubra-green px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-rubra-black"
          >
            Garantir bilhete
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
