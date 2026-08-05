import React from 'react';
import {
  Utensils,
  Search,
  Heart,
  FolderHeart,
  Zap,
  Salad,
  Cake,
  Soup,
  Clock,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { BenefitItem } from '../types';

interface BenefitsSectionProps {
  benefits: BenefitItem[];
}

const getLucideIcon = (iconName: string) => {
  switch (iconName) {
    case 'Utensils':
      return <Utensils className="w-6 h-6 text-[#4E6028]" />;
    case 'Search':
      return <Search className="w-6 h-6 text-[#4E6028]" />;
    case 'Heart':
      return <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />;
    case 'FolderHeart':
      return <FolderHeart className="w-6 h-6 text-[#4E6028]" />;
    case 'Zap':
      return <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />;
    case 'Salad':
      return <Salad className="w-6 h-6 text-emerald-600" />;
    case 'Cake':
      return <Cake className="w-6 h-6 text-pink-500" />;
    case 'Soup':
      return <Soup className="w-6 h-6 text-[#4E6028]" />;
    case 'Clock':
      return <Clock className="w-6 h-6 text-sky-600" />;
    case 'RefreshCw':
      return <RefreshCw className="w-6 h-6 text-[#4E6028]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#4E6028]" />;
  }
};

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="py-10 md:py-14 bg-stone-50 border-t border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F6EC] text-[#3B4A1C] text-xs font-bold mb-2 border border-[#4E6028]/20 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#4E6028]" />
            <span>BENEFÍCIOS PRINCIPAIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Tudo o que você precisa para cozinhar bem e sem estresse
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-1.5 font-sans">
            Recursos práticos para economizar seu tempo, seu dinheiro e acabar com a dúvida diária.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F3F6EC] border border-[#4E6028]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getLucideIcon(item.icon)}
                  </div>
                  {item.tag && (
                    <span className="text-[10px] font-extrabold text-[#3B4A1C] bg-[#F3F6EC] px-2.5 py-0.5 rounded-full border border-[#4E6028]/20 font-heading">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-stone-900 text-base mb-1 group-hover:text-[#4E6028] transition-colors font-heading">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
