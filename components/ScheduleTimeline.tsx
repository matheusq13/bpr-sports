import SectionHeader from "./SectionHeader";

const STEPS = [
  { time: "06h", title: "Saída de São Paulo", text: "Embarque dos participantes rumo ao CT." },
  { time: "—", title: "Chegada ao CT", text: "Recepção e introdução à experiência." },
  { time: "—", title: "Palestra técnica", text: "Conteúdo com profissionais da área técnica e física." },
  { time: "—", title: "Tour pelo CT", text: "Conhecimento da estrutura e bastidores do clube." },
  { time: "—", title: "Aula prática", text: "Vivência aplicada no ambiente esportivo." },
  { time: "—", title: "Foto oficial", text: "Registro do grupo e da experiência." },
  { time: "17h", title: "Retorno para São Paulo", text: "Encerramento e retorno." },
];

export default function ScheduleTimeline() {
  return (
    <section id="agenda" className="relative py-24 lg:py-32 overflow-hidden bg-rubra-dark/40">
      <div className="absolute inset-0 bg-radial-green opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="A jornada"
          title={
            <>
              Um dia completo de imersão,{" "}
              <span className="gradient-text-green">prática e conexão.</span>
            </>
          }
        />

        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-rubra-red via-rubra-green/40 to-transparent" />

            <ol className="space-y-6">
              {STEPS.map((step, i) => (
                <li key={i} className="relative pl-20">
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-rubra-red/60 bg-rubra-black text-[11px] font-bold uppercase tracking-wider text-rubra-redLt">
                    {step.time}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-rubra-black/70 p-5 backdrop-blur-sm hover:border-rubra-green/40 transition-all">
                    <h3 className="text-lg font-semibold text-rubra-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-rubra-white/65 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-rubra-white/45">
          A ordem das atividades pode sofrer pequenos ajustes para otimizar a experiência no dia.
        </p>
      </div>
    </section>
  );
}
