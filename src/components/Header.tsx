import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LandingPageConfig } from '../types';

interface HeaderProps {
  config: LandingPageConfig;
  timeLeft?: number;
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, timeLeft = 14 * 60 + 33, onOpenSettings }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md py-2 px-3 border-b border-stone-200/60 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-center relative">
        {/* Banner Pill format matching exact requested specs */}
        <div className="w-full max-w-md mx-auto bg-white border border-[#F59E0B] rounded-full py-1.5 px-4 sm:px-6 shadow-xs flex items-center justify-center gap-2.5 text-center">
          {/* Orange circular icon badge with white arrow icon */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
          </div>

          {/* Text & Timer */}
          <div className="text-xs sm:text-sm font-bold text-stone-800 flex items-center gap-1.5 whitespace-nowrap font-heading tracking-tight">
            <span>Desconto de 70% expira em:</span>
            <span className="text-[#F59E0B] font-extrabold tracking-wider font-mono text-sm sm:text-base">
              {formattedTime}
            </span>
          </div>
        </div>

        {/* Admin settings trigger */}
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            className="absolute right-0 p-1.5 rounded-lg text-stone-400 hover:text-stone-700 transition-colors"
            title="Configurações"
          >
            <Sparkles className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
};

