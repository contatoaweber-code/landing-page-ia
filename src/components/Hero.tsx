import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { LandingPageConfig } from '../types';
import { TrustBadgeBar } from './TrustBadgeBar';

interface HeroProps {
  config: LandingPageConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section className="relative pt-4 pb-8 md:pt-8 md:pb-12 bg-gradient-to-b from-stone-50 via-white to-stone-50 overflow-hidden">
      {/* Background soft glow elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#4E6028]/10 via-amber-500/10 to-orange-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Official Logo Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#4E6028] p-0.5 shadow-md flex items-center justify-center text-white shrink-0">
                <img
                  src={config.logoUrl}
                  alt={config.appName}
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#FF5722] px-2.5 py-0.5 rounded-full shadow-xs">
                  🔥 DESCONTO DE LANÇAMENTO
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-[#4E6028] leading-tight mt-0.5">
                  De {config.pricing.originalPrice} por apenas {config.pricing.currentPrice}
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-2.5 font-heading">
              {config.headline}
            </h1>

            {/* Linha de apoio (subtítulo único) */}
            <p className="text-sm sm:text-lg font-bold text-[#4E6028] mb-5 leading-snug font-heading">
              {config.subheadline}
            </p>

            {/* Main CTA Button in Orange with Pulse effect */}
            <div className="w-full max-w-md my-1">
              <a
                href="#oferta"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4.5 rounded-2xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-orange-500/25 animate-cta-pulse transition-transform duration-200 active:scale-95 text-center group font-heading"
              >
                <span>QUERO ORGANIZAR MINHAS RECEITAS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Discreet Price Info directly under CTA */}
              <p className="mt-2 text-center text-xs font-semibold text-stone-600">
                Pagamento único • Sem mensalidade • Acesso vitalício por apenas <span className="text-[#4E6028] font-bold">{config.pricing.currentPrice}</span>
              </p>

              {/* Guarantee Reinforcement Line */}
              <p className="mt-1.5 flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs font-bold text-stone-700 whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Garantia de 7 dias — devolução total do seu dinheiro</span>
              </p>
            </div>

            {/* Faixa de Confiança (Must be 100% visible on 1st fold) */}
            <TrustBadgeBar />

          </div>

          {/* Right Column: Smartphone Mockup showing App Interface */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Outer phone shadow glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4E6028]/30 via-orange-500/20 to-amber-400/20 rounded-[48px] blur-2xl transform rotate-2 scale-105 -z-10" />

              {/* Phone Frame - Modern iPhone style (Thin Bezel, Rounded Corners, Dynamic Island) */}
              <div className="relative rounded-[42px] p-1.5 bg-stone-950 shadow-2xl border border-stone-800 ring-1 ring-black overflow-hidden">
                
                {/* Dynamic Island (Black pill with camera/sensor) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-xs pointer-events-none border border-stone-900/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#1e293b]" />
                  </div>
                </div>

                {/* Phone Screen Area */}
                <div className="w-full bg-stone-900 rounded-[36px] overflow-hidden text-stone-900 border border-stone-800/60 shadow-inner">
                  
                  {/* Real App Screenshot Image (Unedited pixel-to-pixel original) */}
                  <div className="relative w-full h-[520px] sm:h-[550px] overflow-hidden bg-[#FAF9F4]">
                    <img
                      src={config.appScreenshots[0]?.imageUrl}
                      alt={`Interface de ${config.appName}`}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>

              {/* Floating Pill Accent Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 bg-white rounded-2xl p-3 shadow-xl border border-stone-200/80 flex items-center gap-2 animate-bounce">
                <span className="text-xl">⭐️</span>
                <div>
                  <p className="text-xs font-extrabold text-stone-900">4.9 / 5.0 estrelas</p>
                  <p className="text-[10px] text-stone-500 font-medium">+12.400 donas de casa</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
