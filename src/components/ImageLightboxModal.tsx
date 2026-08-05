import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title?: string;
  subtitle?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  subtitle,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 px-6 bg-stone-950/80 border-b border-white/10">
          <div>
            {title && <h3 className="text-white font-semibold text-lg">{title}</h3>}
            {subtitle && <p className="text-stone-400 text-sm">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950/40 min-h-[300px]">
          <img
            src={imageUrl}
            alt={title || 'Print do aplicativo'}
            className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg border border-white/5"
          />
        </div>

        {/* Footer tip */}
        <div className="p-3 bg-stone-950 text-center text-xs text-stone-400 border-t border-white/10 flex items-center justify-center gap-1.5">
          <ZoomIn className="w-4 h-4 text-emerald-400" />
          <span>Toque fora ou no X para fechar a visualização em alta definição</span>
        </div>
      </div>
    </div>
  );
};
