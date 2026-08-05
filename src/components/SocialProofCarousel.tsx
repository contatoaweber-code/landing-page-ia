import React, { useState, useRef, useEffect } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight, CheckCheck, Maximize2, ShieldCheck } from 'lucide-react';
import { WhatsAppProof } from '../types';

interface SocialProofCarouselProps {
  proofs: WhatsAppProof[];
  onOpenLightbox: (imageUrl: string, title?: string, subtitle?: string) => void;
}

export const SocialProofCarousel: React.FC<SocialProofCarouselProps> = ({
  proofs,
  onOpenLightbox,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 20 : 320;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev < proofs.length - 1 ? prev + 1 : 0;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev > 0 ? prev - 1 : proofs.length - 1;
      scrollToIndex(prevIndex);
      return prevIndex;
    });
  };

  useEffect(() => {
    if (isPaused || proofs.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, proofs.length]);

  return (
    <section className="py-10 md:py-14 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4E6028]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-2 border border-emerald-500/20 font-heading">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>DEPOIMENTOS REAIS NO WHATSAPP</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
              Veja o que nossas clientes estão dizendo
            </h2>

            <p className="text-stone-400 text-xs sm:text-base mt-1.5 max-w-xl font-sans">
              Conversas reais de quem usa o aplicativo diariamente para facilitar as refeições em família.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-2.5 self-end">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-stone-400 px-1 font-heading">
              <span className="text-emerald-400">{currentIndex + 1}</span> / {proofs.length}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* WhatsApp Proofs Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory py-3 px-1 scroll-smooth"
        >
          {proofs.map((item, idx) => (
            <div
              key={item.id}
              className={`snap-center shrink-0 w-[310px] sm:w-[360px] bg-stone-950 rounded-3xl p-4 border border-stone-800 shadow-xl flex flex-col justify-between group transition-all duration-500 ease-out hover:-translate-y-1 ${
                idx === currentIndex ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-stone-900' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-stone-800/80">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Depoimento de {item.authorName}</span>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Modern iPhone Frame Container (Thin Bezel, Ultra Rounded, Dynamic Island) */}
                <div className="relative rounded-[42px] p-1.5 bg-stone-950 shadow-xl border border-stone-800 ring-1 ring-black overflow-hidden mb-3 group/phone">
                  
                  {/* Dynamic Island Pill */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-xs pointer-events-none border border-stone-900/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-[#2a364f]" />
                    </div>
                  </div>

                  {/* Inner Screen Area */}
                  <div
                    className="relative rounded-[36px] overflow-hidden bg-stone-950 aspect-[9/16] cursor-pointer group/img shadow-inner border border-stone-800/80 flex items-center justify-center"
                    onClick={() =>
                      onOpenLightbox(
                        item.screenshotUrl,
                        `Conversa no WhatsApp - ${item.authorName}`,
                        `Recebida em ${item.timeAgo}`
                      )
                    }
                  >
                    <img
                      src={item.screenshotUrl}
                      alt={`Print original da conversa do WhatsApp de ${item.authorName}`}
                      width={355}
                      height={631}
                      loading="lazy"
                      className="w-full h-full object-contain bg-stone-950 group-hover/img:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-3 text-center z-20">
                      <div className="p-3 rounded-full bg-emerald-500 text-stone-950 shadow-lg font-bold">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow-md">Toque para ampliar conversa</span>
                    </div>

                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-400 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1 z-10">
                      <CheckCheck className="w-3 h-3 text-emerald-400" />
                      <span>Print Real</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  onOpenLightbox(
                    item.screenshotUrl,
                    `Conversa no WhatsApp - ${item.authorName}`,
                    `Recebida em ${item.timeAgo}`
                  )
                }
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-emerald-500/30 active:scale-95 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ver Print Ampliado</span>
              </button>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {proofs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-emerald-400'
                  : 'w-2.5 bg-stone-700 hover:bg-stone-600'
              }`}
              aria-label={`Ver depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
