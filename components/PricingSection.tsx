import { Check, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PAYMENT_DUPLO_URL, PAYMENT_UNITARIO_URL } from "@/lib/constants";

const FEATURES_SINGLE = [
  "1 vaga no Staff Experience",
  "Transporte ida e volta",
  "Alimentação",
  "Palestra técnica",
  "Tour pelo CT",
  "Aula prática",
  "Foto oficial",
  "Certificado",
];

const FEATURES_DOUBLE = [
  "2 vagas no Staff Experience",
  "Transporte ida e volta",
  "Alimentação",
  "Palestra técnica",
  "Tour pelo CT",
  "Aula prática",
  "Foto oficial",
  "Certificado",
];

export default function PricingSection() {
  return (
    <section id="investimento" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-rubra-red/15 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Investimento"
          title={
            <>
              Escolha seu <span className="gradient-text-red">Bilhete de Embarque</span>
            </>
          }
          subtitle="Vagas limitadas para garantir qualidade e acompanhamento próximo durante toda a experiência."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* SINGLE */}
          <div className="relative rounded-3xl border border-white/10 bg-rubra-dark/70 p-8 backdrop-blur-sm hover:border-rubra-green/40 transition-all">
            <div className="flex items-center justify-between">
              <h3 className="display-font text-2xl uppercase tracking-wider text-rubra-white">
                Bilhete Unitário
              </h3>
              <span className="text-[11px] font-bold uppercase tracking-widest text-rubra-white/40">
                Individual
              </span>
            </div>
            <p className="mt-2 text-sm text-rubra-white/60">
              Ideal para quem deseja garantir sua vaga individual na experiência.
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="display-font text-6xl text-rubra-white">R$ 1.699</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-rubra-white/45 mt-1">
              à vista ou parcelado
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES_SINGLE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-rubra-white/80">
                  <Check size={18} className="shrink-0 mt-0.5 text-rubra-green" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={PAYMENT_UNITARIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-rubra-green/60 bg-rubra-green/10 px-6 py-4 text-sm font-bold uppercase tracking-wider text-rubra-green hover:bg-rubra-green hover:text-rubra-black transition-all"
            >
              Comprar Bilhete Unitário
            </a>
            <p className="mt-3 text-center text-[11px] text-rubra-white/45">
              Após o pagamento, nossa equipe valida sua inscrição.
            </p>
          </div>

          {/* DOUBLE */}
          <div className="relative rounded-3xl gradient-border-red p-8 backdrop-blur-sm shadow-[0_0_60px_rgba(225,10,28,0.15)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-rubra-red px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-rubra-white glow-red-sm">
              <Sparkles size={12} /> Mais vantajoso
            </span>

            <div className="flex items-center justify-between">
              <h3 className="display-font text-2xl uppercase tracking-wider text-rubra-white">
                Bilhete Duplo
              </h3>
              <span className="text-[11px] font-bold uppercase tracking-widest text-rubra-redLt">
                Para 2 pessoas
              </span>
            </div>
            <p className="mt-2 text-sm text-rubra-white/60">
              Melhor escolha para ir com um amigo. Garanta duas vagas e viva essa experiência acompanhado.
            </p>

            <div className="mt-6 flex items-end gap-3">
              <span className="display-font text-6xl gradient-text-red">R$ 3.199</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-rubra-white/55 mt-1">
              <span className="text-rubra-greenLt font-bold">R$ 1.599</span> por pessoa
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES_DOUBLE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-rubra-white/85">
                  <Check size={18} className="shrink-0 mt-0.5 text-rubra-redLt" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={PAYMENT_DUPLO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rubra-red px-6 py-4 text-sm font-bold uppercase tracking-wider text-rubra-white hover:bg-rubra-redLt transition-all glow-red"
            >
              Comprar Bilhete Duplo
            </a>
            <p className="mt-3 text-center text-[11px] text-rubra-white/55">
              Após o pagamento, nossa equipe valida sua inscrição.
            </p>
          </div>
        </div>

        <p className="mt-10 mx-auto max-w-2xl text-center text-sm text-rubra-white/55">
          A inscrição será validada após o preenchimento do formulário e confirmação do pagamento.
          Valores sujeitos à disponibilidade de vagas.
        </p>
      </div>
    </section>
  );
}
