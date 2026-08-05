import React from 'react';
import { Smartphone, Zap, RefreshCw, Lock, ArrowDown, Download, CheckCircle2, PlusSquare, ExternalLink, HardDrive } from 'lucide-react';
import { LandingPageConfig } from '../types';

interface PwaInstallSectionProps {
  config: LandingPageConfig;
  onOpenLightbox: (imageUrl: string, title?: string, subtitle?: string) => void;
}

export const PwaInstallSection: React.FC<PwaInstallSectionProps> = ({
  config,
  onOpenLightbox,
}) => {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3F6EC] text-[#3B4A1C] text-xs sm:text-sm font-extrabold mb-4 border border-[#4E6028]/20">
            <Smartphone className="w-4 h-4 text-[#4E6028]" />
            <span>TECNOLOGIA PWA SEM OCUPAR MEMÓRIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Mais prático que um site. <br className="hidden sm:inline" />
            <span className="text-[#4E6028]">Funciona como um aplicativo.</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Após a compra, você recebe acesso imediato e pode adicionar o <strong className="text-stone-900">Meu Caderno de Receitas</strong> à tela inicial do seu celular. Assim ele fica sempre à mão, como qualquer aplicativo.
          </p>
        </div>

        {/* 3 Step Sequence with Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 relative">
          
          {/* Step 1 */}
          <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200/80 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#4E6028] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  ①
                </span>
                <span className="text-xs font-bold text-[#4E6028] bg-[#F3F6EC] px-3 py-1 rounded-full border border-[#4E6028]/20">
                  Passo 1
                </span>
              </div>

              <h3 className="font-extrabold text-stone-900 text-xl mb-2 group-hover:text-[#4E6028] transition-colors">
                Receba o acesso imediato
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Assim que o pagamento for aprovado, seu link de acesso seguro chega no e-mail e no WhatsApp com 1 toque.
              </p>
            </div>

            {/* Image Placeholder Frame */}
            <div
              className="relative rounded-2xl overflow-hidden bg-stone-900 aspect-[4/3] cursor-pointer group/img shadow-inner border border-stone-300/80"
              onClick={() =>
                onOpenLightbox(
                  config.pwaSteps[0]?.imageUrl || 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
                  'Passo 1: Receba o Acesso',
                  'Notificação de acesso imediato enviada após a compra'
                )
              }
            >
              <img
                src={config.pwaSteps[0]?.imageUrl || 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop'}
                alt="Receba o acesso imediatamente"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                <ExternalLink className="w-4 h-4" />
                <span>Ampliar Passo 1</span>
              </div>
            </div>
          </div>

          {/* Connector arrow for desktop */}
          <div className="hidden md:flex absolute top-1/2 left-[32%] -translate-y-1/2 z-10 text-stone-300">
            <ArrowDown className="w-6 h-6 -rotate-90 text-[#4E6028]" />
          </div>

          {/* Step 2 */}
          <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200/80 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#4E6028] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  ②
                </span>
                <span className="text-xs font-bold text-[#4E6028] bg-[#F3F6EC] px-3 py-1 rounded-full border border-[#4E6028]/20">
                  Passo 2
                </span>
              </div>

              <h3 className="font-extrabold text-stone-900 text-xl mb-2 group-hover:text-[#4E6028] transition-colors">
                Toque em "Adicionar à Tela Inicial"
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                No menu do seu navegador (Safari ou Chrome), escolha a opção "Adicionar à Tela Inicial" para criar o atalho oficial.
              </p>
            </div>

            {/* Image Placeholder Frame */}
            <div
              className="relative rounded-2xl overflow-hidden bg-stone-900 aspect-[4/3] cursor-pointer group/img shadow-inner border border-stone-300/80"
              onClick={() =>
                onOpenLightbox(
                  config.pwaSteps[1]?.imageUrl || 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=600&auto=format&fit=crop',
                  'Passo 2: Adicionar à Tela Inicial',
                  'Opção de salvar o atalho direto no menu do navegador'
                )
              }
            >
              <img
                src={config.pwaSteps[1]?.imageUrl || 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=600&auto=format&fit=crop'}
                alt="Toque em adicionar a tela inicial"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                <ExternalLink className="w-4 h-4" />
                <span>Ampliar Passo 2</span>
              </div>
            </div>
          </div>

          {/* Connector arrow for desktop */}
          <div className="hidden md:flex absolute top-1/2 left-[65%] -translate-y-1/2 z-10 text-stone-300">
            <ArrowDown className="w-6 h-6 -rotate-90 text-[#4E6028]" />
          </div>

          {/* Step 3 */}
          <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200/80 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#4E6028] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  ③
                </span>
                <span className="text-xs font-bold text-[#4E6028] bg-[#F3F6EC] px-3 py-1 rounded-full border border-[#4E6028]/20">
                  Passo 3
                </span>
              </div>

              <h3 className="font-extrabold text-stone-900 text-xl mb-2 group-hover:text-[#4E6028] transition-colors">
                Abra como um App em Tela Cheia
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                O ícone aparecerá na sua tela inicial junto com seus outros apps. Abra sem barras de navegador sempre que quiser cozinhar!
              </p>
            </div>

            {/* Image Placeholder Frame */}
            <div
              className="relative rounded-2xl overflow-hidden bg-stone-900 aspect-[4/3] cursor-pointer group/img shadow-inner border border-stone-300/80"
              onClick={() =>
                onOpenLightbox(
                  config.pwaSteps[2]?.imageUrl || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop',
                  'Passo 3: Aplicativo em Tela Cheia',
                  'Ícone oficial na tela inicial do celular funcionando em tela cheia'
                )
              }
            >
              <img
                src={config.pwaSteps[2]?.imageUrl || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop'}
                alt="Icone do aplicativo na tela inicial"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                <ExternalLink className="w-4 h-4" />
                <span>Ampliar Passo 3</span>
              </div>
            </div>
          </div>

        </div>

        {/* Caixa de Destaque com os Benefícios do PWA */}
        <div className="bg-gradient-to-br from-[#F3F6EC] via-white to-amber-50/40 rounded-3xl p-6 sm:p-8 border-2 border-[#4E6028]/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4E6028]/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#3B4A1C] mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-[#4E6028] shrink-0" />
            <span>Por que essa é a melhor experiência para você?</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-stone-900 text-sm">Não ocupa espaço no celular</p>
                <p className="text-stone-500 text-xs mt-0.5">Leve e rápido, não trava a memória do aparelho.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-stone-900 text-sm">Abre em segundos</p>
                <p className="text-stone-500 text-xs mt-0.5">Carregamento instantâneo para não perder tempo.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-sky-100 text-sky-800 shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-stone-900 text-sm">Sempre atualizado</p>
                <p className="text-stone-500 text-xs mt-0.5">Novas receitas aparecem automaticamente.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-100 text-rose-800 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-stone-900 text-sm">Sem Play Store / App Store</p>
                <p className="text-stone-500 text-xs mt-0.5">Sem precisar lembrar senhas de lojas de aplicativos.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3 sm:col-span-2 lg:col-span-2">
              <div className="p-2 rounded-xl bg-[#4E6028]/15 text-[#3B4A1C] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-stone-900 text-sm">Seu acesso fica disponível sempre que precisar</p>
                <p className="text-stone-500 text-xs mt-0.5">Garantido de forma vitalícia no seu e-mail e no atalho da tela inicial.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
