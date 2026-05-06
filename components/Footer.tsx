import Image from "next/image";
import { Instagram, MessageCircle, MapPin, Calendar, Clock } from "lucide-react";
import { INSTAGRAM_URL, PRIVACY_URL, TERMS_URL, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-rubra-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rubra-green/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <Image
              src="/rubra-logo.png"
              alt="RUBRA Sports"
              width={240}
              height={72}
              className="h-14 w-auto"
            />
            <p className="mt-5 display-font text-xl uppercase text-rubra-white/80">
              Viva o esporte por dentro.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-rubra-green">
              Staff Experience
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-rubra-white/70">
              <li className="flex items-center gap-2">
                <Calendar size={14} className="text-rubra-green" /> 22/05
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-rubra-green" /> CT Resende Futebol Clube
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-rubra-green" /> Saída SP: 06h · Retorno: 17h
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-rubra-green">
              Contato & Redes
            </h4>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-rubra-white/70 hover:border-rubra-red/60 hover:text-rubra-redLt transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-rubra-white/70 hover:border-rubra-green/60 hover:text-rubra-green transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a href={TERMS_URL} className="text-rubra-white/60 hover:text-rubra-white transition-colors">
                  Termos e condições
                </a>
              </li>
              <li>
                <a href={PRIVACY_URL} className="text-rubra-white/60 hover:text-rubra-white transition-colors">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-rubra-white/45">
          <p>© {new Date().getFullYear()} RUBRA Sports. Todos os direitos reservados.</p>
          <p>Imersão educacional, prática e de networking. Não há garantia de contratação.</p>
        </div>
      </div>
    </footer>
  );
}
