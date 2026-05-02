import { Flame } from "lucide-react";

export default function UrgencyStrip() {
  return (
    <section className="relative bg-rubra-red/10 border-y border-rubra-red/30">
      <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
        <p className="flex items-center justify-center gap-3 text-center text-sm text-rubra-white/85">
          <Flame size={16} className="text-rubra-redLt shrink-0" />
          <span>
            <strong className="text-rubra-redLt font-bold uppercase tracking-wider">Vagas limitadas</strong>{" "}
            para manter a qualidade da experiência e o acompanhamento próximo dos participantes.
          </span>
        </p>
      </div>
    </section>
  );
}
