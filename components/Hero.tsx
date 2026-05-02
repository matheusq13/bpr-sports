"use client";

import { motion } from "framer-motion";
import { Bus, Clock, MapPin, Ticket, Award, ArrowRight, Flame } from "lucide-react";
import { EVENT } from "@/lib/constants";

const QUICK = [
  { icon: Bus, label: "Saída de SP", value: EVENT.departure },
  { icon: Clock, label: "Retorno", value: EVENT.return },
  { icon: MapPin, label: "Local", value: "CT Resende FC" },
  { icon: Ticket, label: "Vagas", value: "Limitadas" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 stadium-bg">
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[900px] rounded-full bg-rubra-red/20 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[280px] w-[600px] rounded-full bg-rubra-green/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rubra-red/40 bg-rubra-red/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-rubra-redLt mb-6">
            <Flame size={14} /> Staff Experience · {EVENT.date}
          </span>

          <h1 className="display-font text-5xl sm:text-6xl lg:text-8xl leading-[0.95] uppercase">
            Viva o esporte
            <br />
            <span className="gradient-text-red text-glow-red">por dentro.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-rubra-white/75 leading-relaxed">
            Uma imersão presencial no <strong className="text-rubra-white">CT Resende Futebol Clube</strong> para
            quem deseja entender, na prática, a rotina do mercado esportivo.
          </p>

          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-rubra-green/90">
            Staff Experience RUBRA Sports — {EVENT.date}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href="#inscricao"
              className="group inline-flex items-center gap-2 rounded-full bg-rubra-green px-7 py-4 text-sm font-bold uppercase tracking-wider text-rubra-black hover:bg-rubra-greenLt transition-all glow-green animate-pulse-glow"
            >
              Garantir meu bilhete de embarque
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#incluso"
              className="inline-flex items-center gap-2 rounded-full border border-rubra-red/60 bg-rubra-red/5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-rubra-white hover:bg-rubra-red/15 transition-all"
            >
              Ver o que está incluso
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-rubra-white/70">
            <Award size={14} className="text-rubra-green" />
            Experiência presencial + certificado
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {QUICK.map((item) => (
            <div
              key={item.label}
              className="gradient-border-red rounded-2xl p-4 sm:p-5 backdrop-blur-sm"
            >
              <item.icon size={20} className="text-rubra-redLt mb-3" />
              <p className="text-[11px] uppercase tracking-widest text-rubra-white/55">
                {item.label}
              </p>
              <p className="mt-1 text-base sm:text-lg font-bold text-rubra-white">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
