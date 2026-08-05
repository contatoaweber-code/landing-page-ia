import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqItems: FaqItem[];
  whatsappSupportNumber?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqItems, whatsappSupportNumber }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 md:py-14 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F6EC] text-[#3B4A1C] text-xs font-bold mb-2 border border-[#4E6028]/20 font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#4E6028]" />
            <span>TIRA DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-1.5 font-sans">
            Confira as respostas das dúvidas mais comuns antes de acessar:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-stone-50 rounded-2xl border border-stone-200/80 overflow-hidden shadow-2xs transition-all duration-200 hover:border-stone-300"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-stone-900 text-sm sm:text-base font-heading">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4E6028] text-white border-[#4E6028]' : 'text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 pt-0 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-200/50 font-sans">
                    <p className="mt-2.5">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Support Callout */}
        {whatsappSupportNumber && (
          <div className="mt-8 bg-[#F3F6EC] rounded-2xl p-4 sm:p-5 border border-[#4E6028]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <h4 className="font-extrabold text-stone-900 text-sm font-heading">Ainda tem alguma dúvida?</h4>
              <p className="text-stone-600 text-xs mt-0.5 font-sans">
                Nossa equipe de suporte responde rápido no WhatsApp.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappSupportNumber}?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Meu%20Caderno%20de%20Receitas`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all shrink-0 font-heading"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
