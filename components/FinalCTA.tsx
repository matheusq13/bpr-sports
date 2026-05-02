import { ArrowRight } from "lucide-react";
import { PAYMENT_DUPLO_URL, PAYMENT_UNITARIO_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 stadium-bg" />
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-rubra-red/25 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <div className="ticker-stripe h-2 w-full max-w-md mx-auto mb-10 opacity-80" />

        <h2 className="display-font text-4xl sm:text-5xl lg:text-7xl uppercase leading-[1.02] text-rubra-white">
          Garanta seu Bilhete de Embarque para o{" "}
          <span className="gradient-text-red text-glow-red">Staff Experience.</span>
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-rubra-white/75">
          Vagas limitadas para uma experiência presencial no CT Resende Futebol Clube.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={PAYMENT_UNITARIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-rubra-green/60 bg-rubra-green/10 px-7 py-4 text-sm font-bold uppercase tracking-wider text-rubra-green hover:bg-rubra-green hover:text-rubra-black transition-all"
          >
            Quero meu Bilhete Unitário
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={PAYMENT_DUPLO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-rubra-red px-7 py-4 text-sm font-bold uppercase tracking-wider text-rubra-white hover:bg-rubra-redLt transition-all glow-red"
          >
            Quero meu Bilhete Duplo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="mt-8 text-xs text-rubra-white/45">
          Vagas limitadas para manter a qualidade da experiência e o acompanhamento próximo dos participantes.
        </p>
      </div>
    </section>
  );
}
