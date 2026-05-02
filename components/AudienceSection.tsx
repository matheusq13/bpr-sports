import { GraduationCap, Briefcase, Dumbbell, Trophy, Users, FileBadge } from "lucide-react";
import SectionHeader from "./SectionHeader";

const AUDIENCE = [
  { icon: GraduationCap, title: "Estudantes de Educação Física" },
  { icon: Briefcase, title: "Profissionais iniciantes do esporte" },
  { icon: Dumbbell, title: "Interessados em preparação física" },
  { icon: Trophy, title: "Quem deseja trabalhar com futebol" },
  { icon: Users, title: "Quem busca networking esportivo" },
  { icon: FileBadge, title: "Quem quer enriquecer o currículo" },
];

export default function AudienceSection() {
  return (
    <section id="para-quem" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Para quem é"
          title={
            <>
              Para quem é o <span className="gradient-text-red">Staff Experience</span>?
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCE.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-rubra-dark/60 p-5 hover:border-rubra-green/40 hover:bg-rubra-dark/80 transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rubra-red/20 to-rubra-green/10 border border-white/10 text-rubra-greenLt">
                <item.icon size={22} />
              </div>
              <h3 className="text-base font-semibold text-rubra-white leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
