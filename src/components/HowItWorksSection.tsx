import React from 'react';
import { CreditCard, Zap, Smartphone, Utensils, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Faça o pagamento',
      desc: 'Pagamento 100% seguro via Pix ou Cartão com desconto de R$ 29,90.',
      icon: <CreditCard className="w-5 h-5 text-[#4E6028]" />,
    },
    {
      num: '2',
      title: 'Receba o acesso',
      desc: 'Em menos de 1 minuto o acesso é enviado para seu e-mail e WhatsApp.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      num: '3',
      title: 'Salve no celular',
      desc: 'Toque em "Adicionar à Tela Inicial" no navegador do seu smartphone.',
      icon: <Smartphone className="w-5 h-5 text-sky-600" />,
    },
    {
      num: '4',
      title: 'Aproveite o app',
      desc: 'Abra a qualquer hora sem ocupar a memória do seu aparelho.',
      icon: <Utensils className="w-5 h-5 text-rose-500" />,
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-[#4E6028] bg-[#F3F6EC] px-3 py-1 rounded-full uppercase tracking-wider border border-[#4E6028]/20 font-heading">
            PASSO A PASSO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 font-heading">
            Como ter o aplicativo no celular?
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-1.5 font-sans">
            Em menos de 2 minutos você já estará navegando em mais de 500 receitas.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group">
              
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-stone-200 z-0">
                  <div className="w-full h-full bg-[#4E6028]/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              )}

              {/* Number Circle Badge */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#F3F6EC] border-2 border-[#4E6028]/30 flex flex-col items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#4E6028] transition-all duration-300 mb-3">
                <span className="text-[10px] font-extrabold text-[#4E6028] font-heading">Passo {step.num}</span>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-extrabold text-stone-900 text-base mb-1 group-hover:text-[#4E6028] transition-colors font-heading">
                {step.title}
              </h3>

              <p className="text-stone-600 text-xs leading-relaxed max-w-xs font-sans">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

        {/* Action Button underneath */}
        <div className="mt-8 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-2xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-base shadow-lg shadow-orange-500/25 animate-cta-pulse transition-all active:scale-95 font-heading"
          >
            <span>QUERO ACESSAR AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
