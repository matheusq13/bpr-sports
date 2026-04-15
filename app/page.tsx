"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  Shield,
  Zap,
  Target,
  Award,
  GraduationCap,
  Briefcase,
  Compass,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

// ─── EDITABLE CONSTANTS ──────────────────────────────────────────────────────

const BRAND = {
  name:        "BPR Sports",
  tagline:     "Performance. Estratégia. Conexão.",
  logoPath:    "/logo-bpr.png",
  heroImage:   "/CARD-SITE.png",
  whatsapp:    "https://wa.me/5500000000000",
  instagram:   "https://instagram.com/bpr_sportshub",
  email:       "contato@bprsports.com",
  phone:       "+55 (00) 00000-0000",
};

const CTA = {
  primary:     "Quero iniciar minha jornada",
  secondary:   "Falar com a BPR",
  headerBtn:   "Falar com a BPR",
  finalPrimary:"Falar com a BPR agora",
  finalSecondary:"Quero começar",
};

const NAV_ITEMS = [
  { label: "Início",       href: "#inicio"      },
  { label: "Sobre",        href: "#sobre"        },
  { label: "Serviços",     href: "#servicos"     },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Para Quem",    href: "#para-quem"    },
  { label: "Contato",      href: "#contato"      },
];

const HERO_BADGES = [
  { icon: Shield,  label: "Atendimento personalizado" },
  { icon: Globe,   label: "Rede internacional"        },
  { icon: Target,  label: "Oportunidades reais"       },
  { icon: Compass, label: "Visão de carreira"         },
];

const SERVICES = [
  {
    id: "intercambio",
    icon: GraduationCap,
    title: "Intercâmbio Esportivo",
    description:
      "Levamos atletas para estudar e competir no exterior, com acesso a oportunidades acadêmicas e esportivas que ampliam sua trajetória dentro e fora de campo.",
    bullets: [
      "Planejamento completo da jornada",
      "Suporte em cada etapa do processo",
      "Oportunidades internacionais com visão de carreira",
      "Conexões estratégicas",
      "Crescimento pessoal e esportivo",
    ],
  },
  {
    id: "agenciamento",
    icon: Briefcase,
    title: "Agenciamento de Atletas",
    description:
      "Gerenciamos carreiras com estratégia, posicionamento e visão de longo prazo, conectando atletas às melhores possibilidades de desenvolvimento.",
    bullets: [
      "Posicionamento de carreira",
      "Networking internacional",
      "Assessoria profissional",
      "Parcerias com clubes e academies",
    ],
  },
  {
    id: "experience",
    icon: Star,
    title: "BPR Experience",
    description:
      "Proporcionamos experiências que preparam atletas e profissionais para atuar de forma regular, segura e competitiva no mercado esportivo internacional.",
    bullets: [
      "Experiência profissional internacional",
      "Vivência prática no esporte",
      "Imersão profissional esportiva",
      "Contato real com o mercado",
    ],
  },
];

const DIFFERENTIALS = [
  { icon: Users,     title: "Atendimento personalizado",       text: "Cada trajetória é única. Conduzimos cada projeto de forma individual, próxima e estratégica." },
  { icon: Globe,     title: "Rede internacional de contatos",  text: "Conexões sólidas com universidades, clubes e programas esportivos ao redor do mundo." },
  { icon: Award,     title: "Experiência no mercado esportivo",text: "Atuação profunda no universo do esporte com visão de carreira e resultado." },
  { icon: Zap,       title: "Foco em resultados reais",        text: "Trabalhamos com metas concretas e acompanhamento próximo até a realização dos objetivos." },
  { icon: Shield,    title: "Transparência e profissionalismo",text: "Processos claros, comunicação direta e compromisso com cada etapa da jornada." },
];

const TARGET_AUDIENCE = [
  { icon: Target,     title: "Atletas jovens e adolescentes",     text: "Que querem jogar e/ou estudar fora, com suporte completo em todas as etapas." },
  { icon: TrendingUp, title: "Profissionais do esporte",           text: "Que buscam ampliar sua atuação e criar novas oportunidades no mercado internacional." },
  { icon: ArrowRight, title: "Atletas em transição de carreira",   text: "Que precisam de direção estratégica para reinventar sua trajetória dentro do esporte." },
  { icon: Globe,      title: "Buscadores de oportunidades globais",text: "Que querem crescer no esporte internacional com segurança, estrutura e visão de futuro." },
];

const ABOUT_HIGHLIGHTS = [
  { value: "100%",   label: "Atendimento personalizado" },
  { value: "Global", label: "Rede de parceiros"         },
  { value: "Real",   label: "Resultados comprovados"    },
  { value: "360°",   label: "Visão de carreira"         },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── UTILITY HOOKS ───────────────────────────────────────────────────────────

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

function InViewSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ ...stagger, hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── HEADER ──────────────────────────────────────────────────────────────────

function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <Image
              src={BRAND.logoPath}
              alt="BPR Sports"
              width={100}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[13px] font-medium text-[#A7B0AC] hover:text-[#F5F7F6] transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-[#19F28A] text-[#050505] text-[13px] font-bold hover:bg-[#3DFFAB] transition-all duration-300 glow-green-sm hover:glow-green"
            >
              {CTA.headerBtn}
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-[#A7B0AC] hover:text-[#F5F7F6] transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
              <Image src={BRAND.logoPath} alt="BPR Sports" width={80} height={32} className="h-8 w-auto object-contain" />
              <button onClick={() => setOpen(false)} className="p-2 text-[#A7B0AC] hover:text-[#F5F7F6]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-6 flex-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3.5 text-base font-medium text-[#A7B0AC] hover:text-[#19F28A] transition-colors border-b border-white/[0.04]"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#19F28A] text-[#050505] text-sm font-bold"
              >
                {CTA.headerBtn} <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_50%,rgba(25,242,138,0.08)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(25,242,138,0.04)_0%,transparent_60%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8 lg:space-y-10">
            <InViewSection delay={0}>
              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#19F28A]/25 bg-[#19F28A]/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19F28A] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#19F28A] tracking-widest uppercase">
                  {BRAND.name}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black leading-[1.05] tracking-tight text-[#F5F7F6] mt-5"
              >
                Conectando{" "}
                <span className="text-[#19F28A] text-glow">talentos</span>
                <br />
                ao mundo do{" "}
                <span className="relative inline-block">
                  esporte
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#19F28A] to-transparent rounded-full" />
                </span>
                .
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="text-xl font-medium text-[#A7B0AC] mt-4 leading-snug"
              >
                Transformamos potencial em{" "}
                <span className="text-[#F5F7F6]">oportunidades globais.</span>
              </motion.p>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-[15px] text-[#A7B0AC] leading-relaxed max-w-lg mt-2"
              >
                Intercâmbio esportivo, agenciamento de atletas e gestão de carreira com
                excelência para quem quer competir, estudar e crescer no cenário internacional.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#19F28A] text-[#050505] text-[14px] font-bold hover:bg-[#3DFFAB] transition-all duration-300 glow-green hover:scale-[1.02] active:scale-[0.98]"
                >
                  {CTA.primary}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/[0.12] text-[#F5F7F6] text-[14px] font-semibold hover:border-[#19F28A]/40 hover:bg-[#19F28A]/[0.06] transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-[#19F28A]" />
                  {CTA.secondary}
                </a>
              </motion.div>

              {/* Badges */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-2.5 pt-2">
                {HERO_BADGES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#19F28A] flex-shrink-0" />
                    <span className="text-[12px] font-medium text-[#A7B0AC]">{label}</span>
                  </div>
                ))}
              </motion.div>
            </InViewSection>
          </div>

          {/* Right — Visual */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow orb */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(25,242,138,0.15)_0%,transparent_70%)] blur-3xl" />

              {/* Main image frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <div className="aspect-[4/5] bg-[#050505] relative">
                  {/* Logo */}
                  <Image
                    src={BRAND.heroImage}
                    alt="BPR Sports"
                    fill
                    className="object-contain p-10"
                    priority
                  />

                  {/* Gradient overlay — garante leitura do card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_40%,rgba(5,5,5,0.5)_100%)]" />

                  {/* Floating stat card */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0F0E]/30 backdrop-blur-xl border border-white/[0.08]"
                  >
                    <p className="text-[11px] text-[#A7B0AC] mb-2 uppercase tracking-widest font-medium">Performance Global</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#19F28A] font-black text-xl">+100</p>
                        <p className="text-[11px] text-[#A7B0AC]">Atletas atendidos</p>
                      </div>
                      <div className="h-10 w-px bg-white/[0.08]" />
                      <div>
                        <p className="text-[#19F28A] font-black text-xl">15+</p>
                        <p className="text-[11px] text-[#A7B0AC]">Países parceiros</p>
                      </div>
                      <div className="h-10 w-px bg-white/[0.08]" />
                      <div>
                        <p className="text-[#19F28A] font-black text-xl">100%</p>
                        <p className="text-[11px] text-[#A7B0AC]">Dedicação</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-[#0B0F0E] border border-[#19F28A]/20 backdrop-blur-xl"
              >
                <p className="text-[11px] text-[#A7B0AC] uppercase tracking-widest">Oportunidade global</p>
                <p className="text-[#19F28A] font-bold text-sm">Internacional</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre" className="relative py-28 lg:py-36 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(25,242,138,0.04)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <InViewSection>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
              <span className="text-[11px] font-semibold text-[#A7B0AC] tracking-widest uppercase">Sobre a BPR</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.1] text-[#F5F7F6] mb-6">
              O esporte abre portas.{" "}
              <span className="text-[#19F28A]">A BPR mostra o caminho.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[15px] text-[#A7B0AC] leading-relaxed mb-4">
              A BPR Sports é uma empresa especializada no desenvolvimento de atletas e na criação
              de oportunidades internacionais por meio do esporte.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[15px] text-[#A7B0AC] leading-relaxed mb-4">
              Atuamos com foco em performance, educação e carreira, oferecendo suporte completo
              para atletas que desejam estudar, competir e evoluir no cenário global com mais
              segurança, estratégia e direção.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[15px] text-[#A7B0AC] leading-relaxed">
              Com uma rede sólida de parceiros e experiência no mercado esportivo, conectamos
              talentos a universidades, clubes e programas internacionais, transformando objetivos
              em oportunidades reais.
            </motion.p>
          </InViewSection>

          {/* Right — Highlights grid */}
          <InViewSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_HIGHLIGHTS.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="group relative p-6 rounded-2xl border border-white/[0.07] bg-[#0B0F0E] hover:border-[#19F28A]/20 transition-all duration-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#19F28A]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <p className="text-[#19F28A] font-black text-3xl lg:text-4xl mb-1.5">{value}</p>
                  <p className="text-[13px] text-[#A7B0AC] font-medium leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-4 p-5 rounded-2xl border border-[#19F28A]/15 bg-[#19F28A]/[0.04]"
            >
              <p className="text-[13px] font-semibold text-[#19F28A] mb-1 uppercase tracking-widest">Microcopy</p>
              <p className="text-[15px] text-[#F5F7F6] font-medium">
                "Do talento à oportunidade — com estratégia, estrutura e visão internacional."
              </p>
            </motion.div>
          </InViewSection>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36 bg-[#0B0F0E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(25,242,138,0.05)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <InViewSection className="text-center mb-16 lg:mb-20">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
            <span className="text-[11px] font-semibold text-[#A7B0AC] tracking-widest uppercase">O que fazemos</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.1] text-[#F5F7F6] max-w-3xl mx-auto">
            Soluções estratégicas para quem quer{" "}
            <span className="text-[#19F28A]">viver o esporte</span> em alto nível.
          </motion.h2>
        </InViewSection>

        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <InViewSection key={svc.id} delay={i * 0.08}>
                <motion.div
                  variants={fadeUp}
                  className="group relative h-full flex flex-col p-8 rounded-2xl border border-white/[0.07] bg-[#050505] hover:border-[#19F28A]/20 transition-all duration-500 overflow-hidden cursor-default"
                >
                  {/* Hover glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#19F28A]/0 group-hover:via-[#19F28A]/30 to-transparent transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#19F28A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6 w-12 h-12 rounded-xl bg-[#19F28A]/[0.08] border border-[#19F28A]/20 flex items-center justify-center group-hover:bg-[#19F28A]/[0.14] group-hover:border-[#19F28A]/35 transition-all duration-400">
                    <Icon className="w-5 h-5 text-[#19F28A]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[1.15rem] font-bold text-[#F5F7F6] mb-3 relative">{svc.title}</h3>
                  <p className="text-[14px] text-[#A7B0AC] leading-relaxed mb-6 relative">{svc.description}</p>

                  {/* Bullets */}
                  <ul className="relative space-y-2.5 mt-auto">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#19F28A] mt-0.5 flex-shrink-0" />
                        <span className="text-[13px] text-[#A7B0AC]">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <a
                    href={BRAND.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-1.5 mt-8 text-[13px] font-semibold text-[#19F28A] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                  >
                    Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              </InViewSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── DIFFERENTIALS ───────────────────────────────────────────────────────────

function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 lg:py-36 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(25,242,138,0.05)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <InViewSection className="lg:sticky lg:top-28">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
              <span className="text-[11px] font-semibold text-[#A7B0AC] tracking-widest uppercase">Por que a BPR</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.1] text-[#F5F7F6] mb-6">
              Mais do que oportunidades.{" "}
              <span className="text-[#19F28A]">Entregamos direção, estrutura e resultado.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[15px] text-[#A7B0AC] leading-relaxed mb-8">
              O diferencial da BPR está na forma como conduzimos cada trajetória: com visão
              estratégica, atendimento próximo e compromisso real com a evolução de cada atleta.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#19F28A] text-[#050505] text-[14px] font-bold hover:bg-[#3DFFAB] transition-all duration-300 glow-green-sm hover:glow-green"
            >
              {CTA.secondary} <ArrowRight className="w-4 h-4" />
            </motion.a>
          </InViewSection>

          {/* Right — list */}
          <InViewSection delay={0.12} className="space-y-4">
            {DIFFERENTIALS.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-[#0B0F0E] hover:border-[#19F28A]/15 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-lg bg-[#19F28A]/[0.08] border border-[#19F28A]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#19F28A]/[0.14] transition-all duration-400">
                  <Icon className="w-4 h-4 text-[#19F28A]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#F5F7F6] mb-1">{title}</h3>
                  <p className="text-[13px] text-[#A7B0AC] leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </InViewSection>
        </div>
      </div>
    </section>
  );
}

// ─── FOR WHOM ────────────────────────────────────────────────────────────────

function ForWhom() {
  return (
    <section id="para-quem" className="relative py-28 lg:py-36 bg-[#0B0F0E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(25,242,138,0.05)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <InViewSection className="text-center mb-16 lg:mb-20">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
            <span className="text-[11px] font-semibold text-[#A7B0AC] tracking-widest uppercase">Para quem é</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.1] text-[#F5F7F6] max-w-3xl mx-auto mb-4">
            A BPR é para quem quer{" "}
            <span className="text-[#19F28A]">transformar talento em carreira.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[15px] text-[#A7B0AC] max-w-xl mx-auto">
            Atendemos atletas e profissionais que buscam crescimento estruturado dentro do esporte
            e oportunidades concretas no cenário internacional.
          </motion.p>
        </InViewSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TARGET_AUDIENCE.map(({ icon: Icon, title, text }, i) => (
            <InViewSection key={title} delay={i * 0.07}>
              <motion.div
                variants={fadeUp}
                className="group relative flex flex-col h-full p-7 rounded-2xl border border-white/[0.07] bg-[#050505] hover:border-[#19F28A]/18 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#19F28A]/0 group-hover:via-[#19F28A]/25 to-transparent transition-all duration-500" />
                <div className="w-10 h-10 rounded-xl bg-[#19F28A]/[0.06] border border-[#19F28A]/12 flex items-center justify-center mb-5 group-hover:bg-[#19F28A]/[0.12] transition-all duration-400">
                  <Icon className="w-4 h-4 text-[#19F28A]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#F5F7F6] mb-2 leading-snug">{title}</h3>
                <p className="text-[13px] text-[#A7B0AC] leading-relaxed">{text}</p>
              </motion.div>
            </InViewSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── POSITIONING ─────────────────────────────────────────────────────────────

function Positioning() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(25,242,138,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_10%_90%,rgba(25,242,138,0.03)_0%,transparent_60%)]" />

      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#19F28A]/10 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <InViewSection>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
            <span className="text-[11px] font-semibold text-[#A7B0AC] tracking-widest uppercase">Nossa filosofia</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.06] text-[#F5F7F6] mb-8">
            Cada atleta é{" "}
            <span className="text-[#19F28A] text-glow">um projeto único.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[17px] text-[#A7B0AC] leading-relaxed mb-4 max-w-2xl mx-auto">
            Na BPR, cada atleta é tratado de forma individual, com estratégia, acompanhamento e
            visão de futuro.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[17px] text-[#A7B0AC] leading-relaxed max-w-2xl mx-auto">
            Nosso compromisso é abrir portas, criar oportunidades reais e construir carreiras
            sólidas no esporte. Trabalhamos para que cada passo da jornada tenha{" "}
            <span className="text-[#F5F7F6] font-medium">propósito, direção e potencial de crescimento.</span>
          </motion.p>

          {/* Divider visual */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#19F28A]/30" />
            <div className="w-2 h-2 rounded-full bg-[#19F28A]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#19F28A]/30" />
          </motion.div>
        </InViewSection>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="contato" className="relative py-28 lg:py-40 overflow-hidden bg-[#0B0F0E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(25,242,138,0.09)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_15%_20%,rgba(25,242,138,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_85%_80%,rgba(25,242,138,0.04)_0%,transparent_60%)]" />

      {/* Border top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#19F28A]/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <InViewSection>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#19F28A]/25 bg-[#19F28A]/[0.06] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19F28A] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#19F28A] tracking-widest uppercase">Comece agora</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.06] text-[#F5F7F6] mb-6">
            Que tal levar sua carreira{" "}
            <span className="text-[#19F28A] text-glow">para o próximo nível?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[16px] text-[#A7B0AC] leading-relaxed max-w-2xl mx-auto mb-12">
            Entre em contato com a BPR Sports e comece hoje sua jornada no esporte com o suporte
            certo para competir, evoluir e conquistar oportunidades no mercado internacional.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#19F28A] text-[#050505] text-[15px] font-bold hover:bg-[#3DFFAB] transition-all duration-300 glow-green hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              {CTA.finalPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/[0.12] text-[#F5F7F6] text-[15px] font-semibold hover:border-[#19F28A]/40 hover:bg-[#19F28A]/[0.06] transition-all duration-300"
            >
              {CTA.finalSecondary} <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Contact row */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-12 border-t border-white/[0.06]">
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
              <Mail className="w-4 h-4 text-[#19F28A]" /> {BRAND.email}
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/[0.08]" />
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
              <Phone className="w-4 h-4 text-[#19F28A]" /> {BRAND.phone}
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/[0.08]" />
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
              <Instagram className="w-4 h-4 text-[#19F28A]" /> @bpr_sportshub
            </a>
          </motion.div>
        </InViewSection>
      </div>

      {/* Border bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#19F28A]/20 to-transparent" />
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src={BRAND.logoPath} alt="BPR Sports" width={110} height={44} className="h-11 w-auto object-contain" />
            </div>
            <p className="text-[13px] text-[#A7B0AC] leading-relaxed max-w-xs">
              Conectando talentos ao mundo do esporte com estratégia, estrutura e visão internacional.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold text-[#A7B0AC] uppercase tracking-widest mb-4">Navegação</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold text-[#A7B0AC] uppercase tracking-widest mb-4">Contato</p>
            <div className="space-y-2.5">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#19F28A]" /> {BRAND.email}
              </a>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#19F28A]" /> {BRAND.phone}
              </a>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#A7B0AC] hover:text-[#19F28A] transition-colors">
                <Instagram className="w-3.5 h-3.5 text-[#19F28A]" /> @bpr_sportshub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-[12px] text-[#A7B0AC]/60">
            &copy; {new Date().getFullYear()} BPR Sports. Todos os direitos reservados.
          </p>
          <p className="text-[12px] text-[#A7B0AC]/40">
            Performance. Estratégia. Conexão.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="relative bg-[#050505] text-[#F5F7F6] antialiased">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <ForWhom />
      <Positioning />
      <FinalCTA />
      <Footer />
    </main>
  );
}
