import React from 'react';
import { BookOpen } from 'lucide-react';
import { LandingPageConfig } from '../types';

interface FooterProps {
  config: LandingPageConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#4E6028] text-white flex items-center justify-center font-bold border border-stone-800 shrink-0">
              {config.logoUrl ? (
                <img
                  src={config.logoUrl}
                  alt={config.appName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <BookOpen className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="text-left">
              <span className="font-bold text-white text-base block">{config.appName}</span>
              <span className="text-stone-400 text-xs">Aplicativo Oficial de Culinária</span>
            </div>
          </div>

          {/* Quick Links / Disclaimer */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400">
            <a href="#oferta" className="hover:text-white transition-colors">
              Garantia de 7 Dias
            </a>
            <span>•</span>
            <a href="#faq" className="hover:text-white transition-colors">
              Perguntas Frequentes
            </a>
          </div>
        </div>

        {/* Legal Disclaimer for Meta Ads compliance */}
        <div className="pt-8 text-center text-stone-500 max-w-3xl mx-auto space-y-3 leading-relaxed text-[11px]">
          <p>
            © {new Date().getFullYear()} {config.appName}. Todos os direitos reservados.
          </p>
          <p>
            Este site não faz parte do site do Facebook ou da Meta Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META, Inc.
          </p>
          <p className="text-stone-600">
            Os resultados exibidos neste site podem variar de acordo com o empenho individual na execução das receitas.
          </p>
        </div>

      </div>
    </footer>
  );
};
