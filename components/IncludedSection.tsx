import { Bus, UtensilsCrossed, Mic, Building2, Activity, Camera, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const INCLUDED = [
  { icon: Bus, title: "Passagem ida e volta", text: "Transporte incluso com saída de São Paulo às 06h e retorno às 17h." },
  { icon: UtensilsCrossed, title: "Alimentação", text: "Alimentação inclusa durante a experiência para você aproveitar o dia com energia." },
  { icon: Mic, title: "Palestra técnica", text: "Conteúdo com Coordenador Técnico e Preparador Físico, trazendo visão prática do ambiente esportivo." },
  { icon: Building2, title: "Tour pelo CT do clube", text: "Visita guiada pela estrutura do CT Resende Futebol Clube." },
  { icon: Activity, title: "Aula prática", text: "Vivência prática com atividades e dinâmicas aplicadas ao dia a dia do esporte." },
  { icon: Camera, title: "Foto oficial", text: "Registro oficial da experiência para guardar e compartilhar esse momento." },
  { icon: Award, title: "Certificado de participação", text: "Certificado RUBRA Sports para fortalecer sua trajetória e currículo." },
];

export default function IncludedSection() {
  return (
    <section id="incluso" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="O que está incluso"
          title={
            <>
              O que está incluso no seu{" "}
              <span className="gradient-text-red">Bilhete de Embarque</span>
            </>
          }
          subtitle="Tudo planejado para que você foque apenas em aproveitar e absorver cada momento da experiência."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INCLUDED.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-rubra-dark/60 p-6 hover:border-rubra-green/40 transition-all ${
                i === 6 ? "sm:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto lg:w-full" : ""
              }`}
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-rubra-red/10 blur-2xl group-hover:bg-rubra-green/15 transition-colors" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rubra-red/15 to-rubra-green/10 border border-white/10 text-rubra-greenLt">
                  <item.icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-rubra-redLt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-rubra-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-rubra-white/65 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#inscricao"
            className="inline-flex items-center gap-2 rounded-full bg-rubra-green px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-rubra-black hover:bg-rubra-greenLt transition-all glow-green-sm"
          >
            Quero garantir meu bilhete
          </a>
        </div>
      </div>
    </section>
  );
}
