import { Target, Users, GraduationCap, Briefcase, Eye } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  { icon: Target, title: "Vivência em ambiente real", text: "Esteja presencialmente no CT de um clube em atividade, vendo de perto como tudo funciona." },
  { icon: GraduationCap, title: "Conteúdo técnico aplicado", text: "Aprenda com quem está na linha de frente da preparação esportiva profissional." },
  { icon: Users, title: "Networking de verdade", text: "Conecte-se com participantes, profissionais e referências do mercado." },
  { icon: Briefcase, title: "Experiência para currículo", text: "Adicione uma vivência concreta e diferenciada à sua trajetória profissional." },
  { icon: Eye, title: "Visão prática do dia a dia", text: "Saiba como funciona, o que se espera e como é a rotina de um ambiente esportivo de alto nível." },
];

export default function SolutionSection() {
  return (
    <section id="solucao" className="relative py-24 lg:py-32 overflow-hidden bg-rubra-dark/40">
      <div className="absolute inset-0 bg-radial-green opacity-70 pointer-events-none" />
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-rubra-green/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="A solução"
          title={
            <>
              O Staff Experience foi criado para
              <span className="gradient-text-green"> aproximar você do esporte real.</span>
            </>
          }
          subtitle="O RUBRA Sports — Staff Experience é uma imersão presencial para quem deseja sair da teoria e viver um dia de aprendizado, conexão e prática dentro do ambiente esportivo."
        />

        <div className="mt-12 mx-auto max-w-3xl text-center">
          <p className="display-font text-2xl sm:text-3xl uppercase leading-snug text-rubra-white">
            Não é apenas um evento. É uma{" "}
            <span className="gradient-text-green">experiência</span> para quem quer dar um passo
            mais sério na carreira esportiva.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`relative rounded-2xl border border-white/10 bg-rubra-black/60 p-6 backdrop-blur-sm hover:border-rubra-green/50 hover:-translate-y-1 transition-all ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rubra-green/10 border border-rubra-green/40 text-rubra-green mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-rubra-white">{item.title}</h3>
              <p className="mt-2 text-sm text-rubra-white/65 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
