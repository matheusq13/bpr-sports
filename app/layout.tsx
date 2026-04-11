import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BPR Sports — Conectando talentos ao mundo do esporte",
  description:
    "Intercâmbio esportivo, agenciamento de atletas e gestão de carreira. Transformamos potencial em oportunidades globais com estratégia, estrutura e visão internacional.",
  keywords: "intercâmbio esportivo, agenciamento atletas, carreira esporte, oportunidades internacionais",
  openGraph: {
    title: "BPR Sports — Conectando talentos ao mundo do esporte",
    description: "Transformamos potencial em oportunidades globais.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
