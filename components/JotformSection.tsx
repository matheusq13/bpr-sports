"use client";

import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { JOTFORM_EMBED_URL, PAYMENT_DUPLO_URL, PAYMENT_UNITARIO_URL } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

const PLACEHOLDER = "COLE_AQUI_O_LINK_DO_SEU_JOTFORM";

export default function JotformSection() {
  const ready = JOTFORM_EMBED_URL && JOTFORM_EMBED_URL !== PLACEHOLDER;

  return (
    <section id="inscricao" className="relative py-24 lg:py-32 overflow-hidden bg-rubra-dark/40">
      <div className="absolute inset-0 bg-radial-green opacity-60 pointer-events-none" />
      <div className="absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-rubra-red/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Inscrição"
          title={
            <>
              Faça sua <span className="gradient-text-green">inscrição</span>
            </>
          }
          subtitle="Preencha seus dados no formulário abaixo. Após o envio, finalize o pagamento escolhendo o bilhete desejado."
        />

        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-rubra-green/30 bg-rubra-green/5 p-5 backdrop-blur-sm">
          <p className="flex items-start gap-3 text-sm text-rubra-white/85">
            <ShieldCheck size={20} className="shrink-0 mt-0.5 text-rubra-green" />
            <span>
              Preencha o formulário de inscrição e, em seguida, finalize o pagamento no bilhete escolhido.
              Sua vaga só é confirmada após a compensação do pagamento.
            </span>
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-rubra-black/70 p-2 backdrop-blur-sm">
          {ready ? (
            <iframe
              src={JOTFORM_EMBED_URL}
              title="Formulário de inscrição RUBRA Sports"
              className="w-full rounded-2xl border-0"
              style={{ minHeight: 720 }}
              allow="geolocation; microphone; camera; fullscreen"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28 rounded-2xl border border-dashed border-rubra-green/30 bg-rubra-dark/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rubra-green/10 border border-rubra-green/40 text-rubra-green mb-5">
                <FileText size={24} />
              </div>
              <h3 className="display-font text-2xl sm:text-3xl uppercase text-rubra-white">
                Formulário em breve
              </h3>
              <p className="mt-3 max-w-md text-sm text-rubra-white/60 leading-relaxed">
                Substitua a constante{" "}
                <code className="rounded bg-rubra-graphite px-2 py-0.5 text-rubra-greenLt">
                  JOTFORM_EMBED_URL
                </code>{" "}
                em <code className="rounded bg-rubra-graphite px-2 py-0.5">lib/constants.ts</code>{" "}
                pelo link de embed do seu JotForm.
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={PAYMENT_UNITARIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-rubra-green/60 bg-rubra-green/10 px-6 py-4 text-sm font-bold uppercase tracking-wider text-rubra-green hover:bg-rubra-green hover:text-rubra-black transition-all"
          >
            Finalizar pagamento — Unitário
            <ExternalLink size={14} className="opacity-70 group-hover:opacity-100" />
          </a>
          <a
            href={PAYMENT_DUPLO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-rubra-red px-6 py-4 text-sm font-bold uppercase tracking-wider text-rubra-white hover:bg-rubra-redLt transition-all glow-red-sm"
          >
            Finalizar pagamento — Duplo
            <ExternalLink size={14} className="opacity-90" />
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-rubra-white/45">
          Após o pagamento, nossa equipe validará sua inscrição e enviará as orientações finais.
        </p>
      </div>
    </section>
  );
}
