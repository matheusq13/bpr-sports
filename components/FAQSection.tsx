"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ = [
  { q: "O transporte está incluso?", a: "Sim. O Bilhete de Embarque inclui passagem ida e volta, com saída de São Paulo às 06h e retorno às 17h." },
  { q: "A alimentação está inclusa?", a: "Sim. A alimentação durante a experiência está inclusa." },
  { q: "Receberei certificado?", a: "Sim. Todos os participantes receberão certificado de participação RUBRA Sports." },
  { q: "Posso comprar para duas pessoas?", a: "Sim. O Bilhete Duplo inclui duas vagas e tem valor de R$ 3.199." },
  { q: "Como confirmo minha inscrição?", a: "A inscrição será confirmada após o preenchimento do formulário e a confirmação do pagamento." },
  { q: "O evento garante vaga de trabalho no esporte?", a: "Não. O Staff Experience é uma imersão educacional, prática e de networking. Ele não garante contratação, mas oferece vivência e conexão com o ambiente esportivo." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Tudo o que você precisa saber
            </>
          }
        />

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border bg-rubra-dark/60 transition-all ${
                  isOpen ? "border-rubra-green/50" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-rubra-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-rubra-green" : "text-rubra-white/50"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-rubra-white/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
