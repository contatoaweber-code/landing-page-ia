import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, Smartphone, Eye } from 'lucide-react';
import { AppScreenshot } from '../types';

interface AppScreensCarouselProps {
  screenshots: AppScreenshot[];
  onOpenLightbox: (imageUrl: string, title?: string, subtitle?: string) => void;
}

export const AppScreensCarousel: React.FC<AppScreensCarouselProps> = ({
  screenshots,
  onOpenLightbox,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild
        ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24
        : 320;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev < screenshots.length - 1 ? prev + 1 : 0;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev > 0 ? prev - 1 : screenshots.length - 1;
      scrollToIndex(prevIndex);
      return prevIndex;
    });
  };

  useEffect(() => {
    if (isPaused || screenshots.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, screenshots.length]);

  return (
    <section className="py-10 md:py-14 bg-stone-100/70 border-y border-stone-200/80 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4E6028]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Section (Apple Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F6EC] text-[#3B4A1C] text-xs font-bold mb-2 border border-[#4E6028]/20 font-heading">
              <Smartphone className="w-3.5 h-3.5 text-[#4E6028]" />
              <span>INTERFACE DO APLICATIVO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
              Veja como o aplicativo funciona por dentro
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1.5 max-w-xl font-sans">
              Navegação ultra rápida e simples. Toque em qualquer imagem para ampliar!
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-end">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 shadow-xs transition-all active:scale-95"
              aria-label="Print anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-xs font-bold text-stone-500 px-1 font-heading">
              <span className="text-[#4E6028]">{currentIndex + 1}</span> / {screenshots.length}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 shadow-xs transition-all active:scale-95"
              aria-label="Próximo print"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider (Apple Cards Design) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory py-3 px-1 scroll-smooth"
        >
          {screenshots.map((screen, idx) => (
            <div
              key={screen.id}
              className={`snap-center shrink-0 w-[290px] sm:w-[340px] bg-white rounded-3xl p-4 shadow-md border border-stone-200/80 flex flex-col justify-between group transition-all duration-500 ease-out hover:-translate-y-1 ${
                idx === currentIndex ? 'ring-2 ring-[#4E6028] ring-offset-2' : ''
              }`}
            >
              {/* Modern iPhone Frame Container (Thin Bezel, Ultra Rounded, Dynamic Island) */}
              <div className="relative rounded-[42px] p-1.5 bg-stone-950 shadow-xl border border-stone-800 ring-1 ring-black overflow-hidden mb-4 group/phone">
                
                {/* Dynamic Island Pill */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-xs pointer-events-none border border-stone-900/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#2a364f]" />
                  </div>
                </div>

                {/* Inner Screen Area */}
                <div
                  className="relative rounded-[36px] overflow-hidden bg-[#FAF9F4] aspect-[9/16] cursor-pointer group/img shadow-inner border border-stone-800/80"
                  onClick={() => onOpenLightbox(screen.imageUrl, screen.title, screen.subtitle)}
                >
                  <img
                    src={screen.imageUrl}
                    alt={screen.title}
                    width={355}
                    height={631}
                    loading={idx === 0 ? "eager" : "lazy"}
                    {...(idx === 0 ? ({ fetchPriority: "high" } as any) : {})}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />

                  {/* Top Badge */}
                  {screen.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-amber-400 text-stone-900 font-extrabold text-[9px] uppercase tracking-wider shadow-md z-10">
                      {screen.badge}
                    </span>
                  )}

                  {/* Category Tag */}
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-semibold text-[9px] z-10">
                    {screen.category}
                  </span>

                  {/* Hover Click To Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4 text-center z-20">
                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold">Toque para ampliar</span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg leading-snug group-hover:text-[#4E6028] transition-colors">
                    {screen.title}
                  </h3>
                  <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                    {screen.description}
                  </p>
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => onOpenLightbox(screen.imageUrl, screen.title, screen.subtitle)}
                  className="mt-4 w-full py-2.5 px-4 rounded-xl bg-[#F3F6EC] hover:bg-[#4E6028] text-[#3B4A1C] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-[#4E6028]/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Tela Ampliada</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-[#4E6028]'
                  : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
