import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUBRA Sports — Staff Experience | Viva o esporte por dentro",
  description:
    "Participe do RUBRA Sports Staff Experience, uma imersão presencial no CT Resende Futebol Clube com transporte, alimentação, palestra técnica, tour, aula prática, foto oficial e certificado.",
  keywords:
    "RUBRA Sports, Staff Experience, CT Resende, imersão esportiva, mercado esportivo, futebol, networking esportivo, preparação física, educação física, gestão esportiva",
  openGraph: {
    title: "RUBRA Sports — Staff Experience | Viva o esporte por dentro",
    description:
      "Imersão presencial no CT Resende Futebol Clube. Transporte, alimentação, palestra técnica, tour, aula prática, foto oficial e certificado. 22/05.",
    type: "website",
    locale: "pt_BR",
    siteName: "RUBRA Sports",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUBRA Sports — Staff Experience",
    description:
      "Imersão presencial no CT Resende Futebol Clube em 22/05. Vagas limitadas.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${bebas.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
