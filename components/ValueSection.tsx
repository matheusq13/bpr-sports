import SectionHeader from "./SectionHeader";

export default function ValueSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-rubra-dark/40">
      <div className="absolute inset-0 bg-radial-red opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rubra-red/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rubra-green/40 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Prova de valor"
          title={
            <>
              Mais que uma visita.{" "}
              <span className="gradient-text-red">Uma experiência de carreira.</span>
            </>
          }
          subtitle="Em um mercado competitivo, quem busca vivência prática sai na frente. O Staff Experience foi pensado para aproximar você do ambiente real, das conversas certas e da rotina que muitos só conhecem de longe."
        />

        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative rounded-3xl gradient-border-red p-10 sm:p-14 text-center">
            <p className="display-font text-3xl sm:text-5xl uppercase leading-tight text-rubra-white">
              A teoria <span className="gradient-text-red">te prepara.</span>
              <br />
              A vivência <span className="gradient-text-green">te posiciona.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
