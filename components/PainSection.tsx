import { AlertTriangle, BookX, Compass, Network, Trophy, UserX } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PAINS = [
  { icon: BookX, title: "Pouca vivência prática", text: "Conhecimento preso só na teoria, longe do dia a dia real do esporte." },
  { icon: UserX, title: "Falta de contato com profissionais", text: "Sem acesso direto a quem vive a rotina técnica do alto nível." },
  { icon: Compass, title: "Rotina de um CT é um mistério", text: "Difícil entender o que realmente acontece dentro de um centro de treinamento." },
  { icon: Trophy, title: "Currículo sem experiências reais", text: "Poucas oportunidades concretas para enriquecer a trajetória." },
  { icon: Network, title: "Networking limitado", text: "Sem espaço para construir conexões com quem está no mercado." },
  { icon: AlertTriangle, title: "Falta de direção", text: "Vontade de atuar no esporte, mas sem clareza dos próximos passos." },
];

export default function PainSection() {
  return (
    <section id="dor" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-red opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="O cenário"
          title={
            <>
              Você quer trabalhar no <span className="gradient-text-red">mercado esportivo</span>,
              mas ainda está preso só na teoria?
            </>
          }
          subtitle="Muitos estudantes e profissionais querem atuar com futebol, performance, preparação física ou gestão esportiva, mas não têm contato real com a rotina de um clube, não sabem como o mercado funciona por dentro e têm dificuldade para construir networking na área."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-white/8 bg-rubra-dark/60 p-6 backdrop-blur-sm hover:border-rubra-red/40 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rubra-red/10 border border-rubra-red/30 text-rubra-redLt mb-4 group-hover:bg-rubra-red/20 transition-colors">
                <p.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-rubra-white">{p.title}</h3>
              <p className="mt-2 text-sm text-rubra-white/65 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
