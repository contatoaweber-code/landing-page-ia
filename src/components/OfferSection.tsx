import React from 'react';
import { Check, ShieldCheck, Lock, Zap, ArrowRight, Clock, Star, Sparkles } from 'lucide-react';
import { LandingPageConfig } from '../types';

interface OfferSectionProps {
  config: LandingPageConfig;
  timeLeft?: number;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ config, timeLeft = 14 * 60 + 33 }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <section id="oferta" className="py-10 md:py-14 bg-stone-100/80 border-t border-stone-200/80 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-tr from-[#4E6028]/15 via-orange-500/10 to-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F6EC] text-[#3B4A1C] text-xs font-bold mb-2 border border-[#4E6028]/30 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#4E6028]" />
            <span>OFERTA DE LANÇAMENTO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Garanta seu acesso com desconto especial
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-1.5 font-sans">
            Acesso imediato no celular com pagamento único e sem mensalidades.
          </p>
        </div>

        {/* Urgency Countdown Bar */}
        <div className="bg-amber-50 border border-amber-300/80 rounded-xl p-2.5 sm:p-3 mb-6 text-center flex items-center justify-center gap-2 shadow-xs">
          <Clock className="w-4 h-4 text-amber-700 animate-spin" />
          <p className="text-xs sm:text-sm font-extrabold text-amber-900 font-heading">
            Desconto de 70% expira em:{' '}
            <span className="text-orange-700 font-mono text-sm sm:text-base ml-1">
              {formattedTime}
            </span>
          </p>
        </div>

        {/* Offer Premium Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#4E6028] shadow-xl relative overflow-hidden">
          
          {/* Popular Ribbon */}
          <div className="absolute top-0 right-0 bg-[#4E6028] text-white text-[11px] font-extrabold px-5 py-1.5 rounded-bl-xl shadow-xs uppercase tracking-wider flex items-center gap-1 font-heading">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Oferta Especial</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: What's Included */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4E6028] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  📖
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl font-heading">{config.appName}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-bold text-[#4E6028] bg-[#F3F6EC] px-2 py-0.5 rounded-md border border-[#4E6028]/20">
                      Pagamento único
                    </span>
                    <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                      Acesso vitalício
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkmarks list */}
              <div className="space-y-2.5 my-4">
                {config.offerInclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <span className="text-stone-800 text-sm font-bold leading-tight font-heading">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing Box & CTA Button */}
            <div className="md:col-span-5 bg-stone-50 rounded-2xl p-5 border border-stone-200/80 text-center flex flex-col justify-between shadow-inner">
              
              <div>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1 font-heading">
                  Preço Promocional
                </span>

                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-stone-500 line-through text-xs font-semibold">
                    De {config.pricing.originalPrice}
                  </span>
                  <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-heading">
                    70% OFF
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight my-1 font-heading">
                  {config.pricing.currentPrice}
                </div>

                <p className="text-xs font-extrabold text-[#4E6028] font-heading">
                  Pagamento Único • Sem Mensalidade
                </p>

                {/* Visual Payment Method Badges (Pix, Visa, Mastercard) */}
                <div className="mt-2.5 flex items-center justify-center gap-2 flex-wrap text-[11px] text-stone-600 font-semibold font-sans">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-stone-200/90 shadow-2xs">
                    {/* Pix Icon */}
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 512 512" fill="none">
                      <path d="M112.5 112.5L256 256L112.5 399.5L16 256L112.5 112.5Z" fill="#32BCAD"/>
                      <path d="M399.5 112.5L256 256L399.5 399.5L496 256L399.5 112.5Z" fill="#32BCAD"/>
                      <path d="M112.5 112.5L256 256L399.5 112.5L256 16L112.5 112.5Z" fill="#32BCAD"/>
                      <path d="M112.5 399.5L256 256L399.5 399.5L256 496L112.5 399.5Z" fill="#32BCAD"/>
                    </svg>
                    <span>Pix</span>
                    <span className="text-stone-500">•</span>
                    {/* Visa */}
                    <span className="text-[9px] font-black italic tracking-tighter text-[#1A1F71] bg-stone-100 px-1 py-0.2 rounded border border-stone-200/60">
                      VISA
                    </span>
                    {/* Mastercard */}
                    <span className="inline-flex items-center -space-x-1 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] opacity-90 inline-block"></span>
                    </span>
                    <span>Cartão</span>
                  </div>
                  <span className="text-stone-500">• Acesso vitalício imediato</span>
                </div>
              </div>

              {/* Big Orange CTA Button */}
              <div className="mt-5">
                <a
                  href={config.pricing.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-orange-500/25 animate-cta-pulse transition-all duration-200 active:scale-95 text-center font-heading"
                >
                  <Zap className="w-5 h-5 fill-white" />
                  <span>GARANTIR MEU ACESSO COM 70% OFF</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-stone-500 font-semibold font-sans">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pagamento 100% Criptografado & Seguro</span>
                </div>
              </div>

            </div>

          </div>

          {/* Guarantee Footer inside Card */}
          <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-xs border border-amber-200">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm font-heading">
                Garantia Incondicional de {config.pricing.guaranteeDays} Dias
              </h4>
              <p className="text-stone-600 text-xs mt-0.5 font-sans">
                Se você não amar o aplicativo nos primeiros 7 dias, devolvemos 100% do seu investimento sem complicações.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
