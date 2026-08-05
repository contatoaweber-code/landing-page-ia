import React, { useState, useEffect } from 'react';
import { INITIAL_CONFIG } from './config';
import { LandingPageConfig } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppScreensCarousel } from './components/AppScreensCarousel';
import { BenefitsSection } from './components/BenefitsSection';
import { SocialProofCarousel } from './components/SocialProofCarousel';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { ConfigDrawerModal } from './components/ConfigDrawerModal';

export default function App() {
  const [config, setConfig] = useState<LandingPageConfig>(INITIAL_CONFIG);

  // Unified countdown timer (14m 33s)
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 33);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Lightbox modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    title?: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageUrl: null,
  });

  // Settings drawer state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleOpenLightbox = (imageUrl: string, title?: string, subtitle?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      subtitle,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleUpdateConfig = (newConfigPartial: Partial<LandingPageConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...newConfigPartial,
    }));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-[#4E6028] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Header config={config} timeLeft={timeLeft} onOpenSettings={() => setIsSettingsOpen(true)} />

      {/* 2. HERO Section (Primeira Dobra + Faixa de Confiança) */}
      <Hero config={config} />

      {/* 3. Provas Sociais (Carrossel de Prints do WhatsApp) */}
      <SocialProofCarousel
        proofs={config.whatsappProofs}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 4. Prints do Aplicativo */}
      <AppScreensCarousel
        screenshots={config.appScreenshots}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 5. Benefícios do Aplicativo */}
      <BenefitsSection benefits={config.benefits} />

      {/* 7. Como Funciona */}
      <HowItWorksSection />

      {/* 8. Oferta (Card Premium + Preço + Garantia de 7 dias) */}
      <OfferSection config={config} timeLeft={timeLeft} />

      {/* 9. FAQ (Perguntas Frequentes) */}
      <FaqSection
        faqItems={config.faqItems}
        whatsappSupportNumber={config.whatsappSupportNumber}
      />

      {/* 10. Footer */}
      <Footer config={config} onOpenSettings={() => setIsSettingsOpen(true)} />

      {/* 11. Sticky CTA for Mobile (Meta Ads optimized) */}
      <StickyMobileCta
        price={config.pricing.currentPrice}
        originalPrice={config.pricing.originalPrice}
        checkoutUrl={config.pricing.checkoutUrl}
        ctaText={config.ctaText}
      />

      {/* 12. Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        onClose={handleCloseLightbox}
      />

      {/* 13. Landing Page Settings / Quick Test Modal */}
      <ConfigDrawerModal
        isOpen={isSettingsOpen}
        config={config}
        onClose={() => setIsSettingsOpen(false)}
        onUpdateConfig={handleUpdateConfig}
      />
    </div>
  );
}
