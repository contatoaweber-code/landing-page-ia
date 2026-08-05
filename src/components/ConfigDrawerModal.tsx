import React, { useState } from 'react';
import { X, Sparkles, Check, Link as LinkIcon, DollarSign, Image as ImageIcon, HelpCircle } from 'lucide-react';
import { LandingPageConfig } from '../types';

interface ConfigDrawerModalProps {
  isOpen: boolean;
  config: LandingPageConfig;
  onClose: () => void;
  onUpdateConfig: (newConfig: Partial<LandingPageConfig>) => void;
}

export const ConfigDrawerModal: React.FC<ConfigDrawerModalProps> = ({
  isOpen,
  config,
  onClose,
  onUpdateConfig,
}) => {
  if (!isOpen) return null;

  const [checkoutUrl, setCheckoutUrl] = useState(config.pricing.checkoutUrl);
  const [currentPrice, setCurrentPrice] = useState(config.pricing.currentPrice);
  const [originalPrice, setOriginalPrice] = useState(config.pricing.originalPrice);
  const [whatsapp, setWhatsapp] = useState(config.whatsappSupportNumber);

  const handleSave = () => {
    onUpdateConfig({
      checkoutUrl,
      pricing: {
        ...config.pricing,
        checkoutUrl,
        currentPrice,
        originalPrice,
      },
      whatsappSupportNumber: whatsapp,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#4E6028] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="font-extrabold text-lg">Painel Rápido de Configuração</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-stone-900">
          
          <div className="bg-[#F3F6EC] p-3.5 rounded-2xl border border-[#4E6028]/20 text-xs text-stone-700 leading-relaxed">
            💡 <strong>Dica para o Dono:</strong> Todos os textos, imagens, depoimentos e perguntas frequentes estão salvos no arquivo <code className="bg-white px-1.5 py-0.5 rounded text-[#3B4A1C] font-mono font-bold">src/config.ts</code> de forma limpa e organizada.
          </div>

          {/* Checkout URL Field */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
              🔗 Seu Link de Checkout (Kiwify, Hotmart, Eduzz, etc)
            </label>
            <div className="relative">
              <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="url"
                value={checkoutUrl}
                onChange={(e) => setCheckoutUrl(e.target.value)}
                placeholder="https://pay.kiwify.com.br/seu-link"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl py-2.5 pl-9 pr-3 text-sm font-medium focus:ring-2 focus:ring-[#4E6028] outline-none"
              />
            </div>
          </div>

          {/* Pricing fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                💰 Preço Atual (Promocional)
              </label>
              <input
                type="text"
                value={currentPrice}
                onChange={(e) => setCurrentPrice(e.target.value)}
                placeholder="R$ 29,90"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-[#4E6028] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                🏷️ Preço Original (De)
              </label>
              <input
                type="text"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="R$ 97,00"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-[#4E6028] outline-none"
              />
            </div>
          </div>

          {/* WhatsApp Support field */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
              💬 WhatsApp de Suporte (Com DDD)
            </label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="5511999999999"
              className="w-full bg-stone-50 border border-stone-300 rounded-xl py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-[#4E6028] outline-none"
            />
          </div>

          {/* How to replace prints guide */}
          <div className="border-t border-stone-200 pt-4">
            <h4 className="font-bold text-xs uppercase text-stone-800 mb-2 flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#4E6028]" />
              <span>Como substituir as Imagens e Prints?</span>
            </h4>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
              <li>Para trocar os prints do App: edite a lista <code className="font-mono bg-stone-100 px-1 rounded">appScreenshots</code> em <code className="font-mono bg-stone-100 px-1 rounded">src/config.ts</code>.</li>
              <li>Para trocar os prints do WhatsApp: edite a lista <code className="font-mono bg-stone-100 px-1 rounded">whatsappProofs</code>.</li>
              <li>Para trocar os passos de instalação do PWA: edite a lista <code className="font-mono bg-stone-100 px-1 rounded">pwaSteps</code>.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-stone-600 hover:text-stone-900 font-semibold text-xs"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-xs shadow-md flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Aplicar Alterações</span>
          </button>
        </div>
      </div>
    </div>
  );
};
