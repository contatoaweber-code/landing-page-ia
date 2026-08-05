import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface StickyMobileCtaProps {
  price: string;
  originalPrice?: string;
  checkoutUrl: string;
  ctaText: string;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ price, originalPrice, checkoutUrl, ctaText }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-2xl transition-all duration-300 animate-slideUp">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#4E6028] tracking-wider block">
            Acesso Vitalício
          </span>
          <div className="flex items-baseline gap-1">
            {originalPrice && (
              <span className="text-[11px] text-stone-400 line-through font-semibold whitespace-nowrap">
                {originalPrice}
              </span>
            )}
            <span className="text-lg font-extrabold text-stone-900 whitespace-nowrap">{price}</span>
          </div>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#FF5722] active:bg-[#E64A19] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/30 text-center"
        >
          <Zap className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">{ctaText}</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
};
