import React from 'react';

export const TrustBadgeBar: React.FC = () => {
  const trustItems = [
    { icon: '⭐', text: 'Mais de 500 receitas' },
    { icon: '📱', text: 'Android e iPhone' },
    { icon: '⚡', text: 'Acesso imediato' },
    { icon: '🔄', text: 'Atualizações futuras' },
    { icon: '🔒', text: 'Pagamento seguro' },
  ];

  return (
    <div className="w-full mt-3 pt-3 border-t border-stone-200/60">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-left">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5 bg-stone-100/70 lg:bg-transparent px-2.5 py-1 rounded-full border border-stone-200/50 lg:border-0 text-xs font-semibold text-stone-800">
            <span className="text-xs">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
