import { LandingPageConfig } from './types';
import logoAsset from './assets/images/recipe_app_logo_1785526104929.jpg';

// Screenshots oficiais do aplicativo salvos exatamente das imagens enviadas
import appRealInicio from './assets/images/app-01-inicio.png';
import appRealGeladeira from './assets/images/app-02-geladeira.png';
import appRealPopulares from './assets/images/app03populares.png';
import appRealCategorias from './assets/images/app-04-categorias.png';
import appRealBrownie from './assets/images/app-05-brownie.png';
import appRealSuco from './assets/images/app-06-suco.png';
import appRealCatalogo from './assets/images/app-08-catalogo.png';

// Imagens oficiais dos prints do WhatsApp
import proofJuliana from './assets/images/juliana.png';
import proofHelena from './assets/images/helena.jpeg';
import proofRicardo from './assets/images/ricardo.png';
import proofCamila from './assets/images/camila.png';
import proofClaudete from './assets/images/claudete.jpeg';
import proofMarcia from './assets/images/marcia.png';
import proofLenir from './assets/images/lenir.png';
import proofRafael from './assets/images/rafael.png';

export const INITIAL_CONFIG: LandingPageConfig = {
  appName: 'Meu Caderno de Receitas',
  
  // LOGOTIPO DA SUA PÁGINA (Substitua esta URL pela imagem do seu logo oficial)
  logoUrl: logoAsset,
  
  heroBadgeText: '✨ Mais de 12.000 pessoas já estão usando no celular',
  headline: 'Nunca mais fique na dúvida sobre o que cozinhar hoje.',
  featureHighlight: '',
  subheadline: 'Mais de 500 receitas organizadas por categoria, com busca inteligente e seus favoritos salvos — tudo no seu celular.',
  ctaText: 'QUERO ACESSAR AGORA',
  
  // SEU LINK DE CHECKOUT (Kiwify, Hotmart, Eduzz, Monetizze, PerfectPay, etc)
  checkoutUrl: 'https://pay.wiapy.com/vvAs2yb1zDPn',
  
  whatsappSupportNumber: '55996485045',
  
  pricing: {
    originalPrice: 'R$ 97,00',
    currentPrice: 'R$ 29,90',
    installmentText: 'ou 3x de R$ 10,50 no cartão',
    savingsText: 'Economia imediata de R$ 67,10',
    checkoutUrl: 'https://pay.wiapy.com/vvAs2yb1zDPn',
    guaranteeDays: 7,
  },

  // -------------------------------------------------------------
  // CARROSSEL 1: PRINTS DO APLICATIVO (Utilizando os arquivos originais salvos)
  // -------------------------------------------------------------
  appScreenshots: [
    {
      id: 'print-1-inicio',
      title: 'Tela Inicial do Aplicativo',
      subtitle: 'Navegação personalizada "O que vamos preparar hoje?"',
      category: 'Início',
      imageUrl: appRealInicio,
      badge: 'Tela Inicial',
      description: 'Interface oficial do aplicativo com saudações personalizadas e atalhos de busca rápida.',
    },
    {
      id: 'print-2-geladeira',
      title: 'O Que Tem na Sua Geladeira?',
      subtitle: 'Busca inteligente por ingredientes disponíveis',
      category: 'Busca Inteligente',
      imageUrl: appRealGeladeira,
      badge: 'Mais Usado',
      description: 'Selecione os ingredientes que você tem em casa (Frango, Carne, Ovos, Batata...) e o app sugere as melhores receitas.',
    },
    {
      id: 'print-3-populares',
      title: 'Receitas Mais Populares',
      subtitle: 'Coxinha com Catupiry, Pudim de Leite e pratos amados',
      category: 'Populares',
      imageUrl: appRealPopulares,
      badge: 'Favoritos da Comunidade',
      description: 'Vitrine com os pratos e sobremesas mais preparados com tempo de preparo e nível de dificuldade.',
    },
    {
      id: 'print-4-categorias',
      title: 'Explorar por Categoria',
      subtitle: 'Saudáveis (99), Sobremesas (95), Lanches (74), Air Fryer (31)',
      category: 'Categorias',
      imageUrl: appRealCategorias,
      badge: '500+ Receitas',
      description: 'Navegação clara e categorizada para você achar exatamente o prato que deseja em segundos.',
    },
    {
      id: 'print-5-brownie',
      title: 'Detalhe da Receita: Brownie de Chocolate',
      subtitle: 'Tempo (45 min), Rendimento (8 porções) e Dificuldade',
      category: 'Sobremesas',
      imageUrl: appRealBrownie,
      badge: 'Modo Cozinha',
      description: 'Instruções completas com fotos apetitosas, tags e botões diretos de navegação.',
    },
    {
      id: 'print-6-suco',
      title: 'Linha Fit: Suco Anti-Inflamatório',
      subtitle: 'Tags de saúde, cenoura, laranja, cúrcuma e mel',
      category: 'Saudáveis',
      imageUrl: appRealSuco,
      badge: 'Linha Fit & Detox',
      description: 'Opções leves e funcionais para imunidade e saúde no dia a dia.',
    },
    {
      id: 'print-7-catalogo',
      title: 'Catálogo Completo com 500 Receitas',
      subtitle: 'Acesse todo o acervo com busca e filtros',
      category: 'Catálogo',
      imageUrl: appRealCatalogo,
      badge: 'Acervo Completo',
      description: 'Catálogo completo sempre à mão no seu smartphone sem ocupar espaço na memória.',
    },
  ],

  // -------------------------------------------------------------
  // SEÇÃO PWA: INSTALE COMO UM APLICATIVO NO CELULAR
  // -------------------------------------------------------------
  pwaSteps: [
    {
      stepNumber: 1,
      title: 'Receba o acesso imediato',
      description: 'Após a confirmação do pagamento, você recebe seu link de acesso exclusivo direto no seu e-mail e WhatsApp.',
      iconName: 'Zap',
      imageUrl: appRealInicio,
      imageAlt: 'Notificação de acesso no celular',
    },
    {
      stepNumber: 2,
      title: 'Toque em "Adicionar à Tela Inicial"',
      description: 'No Safari (iPhone) ou no Chrome (Android), abra o link e selecione a opção "Adicionar à Tela Inicial".',
      iconName: 'PlusSquare',
      imageUrl: appRealCategorias,
      imageAlt: 'Opção adicionar à tela inicial no navegador',
    },
    {
      stepNumber: 3,
      title: 'Pronto! Abra como um App',
      description: 'O ícone do Meu Caderno de Receitas fica salvo junto com seus outros aplicativos. Abra sempre em tela cheia!',
      iconName: 'Smartphone',
      imageUrl: appRealCatalogo,
      imageAlt: 'Ícone na tela inicial do celular',
    },
  ],

  // -------------------------------------------------------------
  // CARROSSEL 2: PROVAS SOCIAIS (PRINTS DO WHATSAPP)
  // -------------------------------------------------------------
  whatsappProofs: [
    {
      id: 'wa-1',
      authorName: 'Juliana',
      authorLocation: 'Campinas - SP',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      messageText: 'Oi! Vim aqui pra dizer que estou apaixonada pelo app 😍 As receitas são práticas, deliciosas e explicadas de um jeito que até eu consigo fazer! Já indiquei pro grupo da família!',
      rating: 5,
      timeAgo: '22/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofJuliana,
    },
    {
      id: 'wa-2',
      authorName: 'Helena',
      authorLocation: 'Porto Alegre - RS',
      avatarUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2360a5fa"/><circle cx="50" cy="38" r="18" fill="%23ffffff"/><path d="M 20 85 C 20 65 35 60 50 60 C 65 60 80 65 80 85 Z" fill="%23ffffff"/></svg>',
      messageText: 'Oi, comprei o app ontem e já usei hj cedo kkk. Gostei bastante, tá bem organizado e achei as receitas bem fáceis de acompanhar. Dou nota 10 sim 🤩 Achei bem melhor do q ficar procurando receita em vários sites!',
      rating: 5,
      timeAgo: '14/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofHelena,
    },
    {
      id: 'wa-3',
      authorName: 'Ricardo Almeida',
      authorLocation: 'Curitiba - PR',
      avatarUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2360a5fa"/><circle cx="50" cy="38" r="18" fill="%23ffffff"/><path d="M 20 85 C 20 65 35 60 50 60 C 65 60 80 65 80 85 Z" fill="%23ffffff"/></svg>',
      messageText: 'App show de bola achei mt prático as receitas são bem explicadas e as fotos ajudam d+ aqui em casa ja virou o app oficial kkk. Dou uma nota 10!',
      rating: 5,
      timeAgo: '15/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofRicardo,
    },
    {
      id: 'wa-4',
      authorName: 'Camila',
      authorLocation: 'São Paulo - SP',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      messageText: 'Oi! Passei pra dizer que estou impressionada com o app! 😍 As receitas são super bem explicadas, fáceis de entender e os ingredientes são coisas que eu já tinha em casa. Já até indiquei pra minha irmã e pra duas amigas!',
      rating: 5,
      timeAgo: '28/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofCamila,
    },
    {
      id: 'wa-5',
      authorName: 'Claudete',
      authorLocation: 'Florianópolis - SC',
      avatarUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2360a5fa"/><circle cx="50" cy="38" r="18" fill="%23ffffff"/><path d="M 20 85 C 20 65 35 60 50 60 C 65 60 80 65 80 85 Z" fill="%23ffffff"/></svg>',
      messageText: 'Acabei de instalar aqui. Muito fácil de usar e as fotos ajudam bastante na escolha das receitas. Minha nota é 9,5!',
      rating: 5,
      timeAgo: '14/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofClaudete,
    },
    {
      id: 'wa-6',
      authorName: 'Marcia',
      authorLocation: 'Belo Horizonte - MG',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      messageText: 'Acabei de explorar o app aqui e amei demais 😊 mto prático e as receitas parecem ser ótimas! Nossa nota 10 com certeza! Superou minhas expectativas.',
      rating: 5,
      timeAgo: '18/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofMarcia,
    },
    {
      id: 'wa-7',
      authorName: 'Lenir',
      authorLocation: 'Rio de Janeiro - RJ',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      messageText: 'Cara, gostei demais do app. Achei bem fácil de mexer e as receitas são bem explicadas. Já fiz duas aqui em casa e deram super certo! Pra mim é 10 fácil kkk',
      rating: 5,
      timeAgo: '15/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofLenir,
    },
    {
      id: 'wa-8',
      authorName: 'Rafael',
      authorLocation: 'Salvador - BA',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      messageText: 'Boa noite curti demais as receita td mt bem explicado e pratico fiz duas aqui em casa e deu super certo parabens pelo trampo. pra mim é 10 mt bom mesmo',
      rating: 5,
      timeAgo: '15/07/2026',
      verifiedCustomer: true,
      screenshotUrl: proofRafael,
    },
  ],

  // -------------------------------------------------------------
  // BENEFÍCIOS DO APLICATIVO
  // -------------------------------------------------------------
  benefits: [
    {
      id: 'b-1',
      title: 'Mais de 500 receitas',
      description: 'Opções variadas e testadas para o seu dia a dia.',
      icon: 'Utensils',
      tag: '500+ Receitas',
    },
    {
      id: 'b-2',
      title: 'Busca inteligente',
      description: 'Digite o que tem na geladeira e encontre a receita na hora.',
      icon: 'Search',
      tag: 'Sem desperdício',
    },
    {
      id: 'b-3',
      title: 'Favoritos',
      description: 'Guarde suas receitas preferidas com apenas 1 toque.',
      icon: 'Heart',
      tag: 'Acesso Rápido',
    },
    {
      id: 'b-4',
      title: 'Especial Air Fryer',
      description: 'Pratos crocantes e rápidos para economizar tempo e gás.',
      icon: 'Zap',
      tag: 'Praticidade',
    },
    {
      id: 'b-5',
      title: 'Receitas fitness',
      description: 'Opções saudáveis e saborosas para manter o equilíbrio.',
      icon: 'Salad',
      tag: 'Saudável',
    },
    {
      id: 'b-6',
      title: 'Atualizações futuras',
      description: 'Novas receitas adicionadas semanalmente sem custo extra.',
      icon: 'RefreshCw',
      tag: 'Sem Mensalidades',
    },
  ],

  // -------------------------------------------------------------
  // INCLUSÕES DA OFERTA
  // -------------------------------------------------------------
  offerInclusions: [
    'Aplicativo completo',
    'Mais de 500 receitas',
    'Atualizações futuras',
    'Acesso imediato',
  ],

  // -------------------------------------------------------------
  // PERGUNTAS FREQUENTES (FAQ)
  // -------------------------------------------------------------
  faqItems: [
    {
      id: 'faq-1',
      question: 'Funciona no iPhone?',
      answer: 'Sim! Funciona perfeitamente em qualquer modelo de iPhone (iOS). Você adiciona o atalho à Tela Inicial em poucos segundos e usa como um aplicativo nativo.',
    },
    {
      id: 'faq-2',
      question: 'Funciona no Android?',
      answer: 'Sim! Funciona em celulares Samsung, Motorola, Xiaomi e todos os aparelhos Android de forma leve e rápida.',
    },
    {
      id: 'faq-3',
      question: 'O pagamento é único?',
      answer: 'Sim! É um pagamento único de apenas R$ 29,90. Você garante acesso vitalício sem nenhuma mensalidade ou cobrança recorrente.',
    },
    {
      id: 'faq-4',
      question: 'Receberei atualizações?',
      answer: 'Sim! Todas as novas receitas adicionadas ao aplicativo ficam disponíveis automaticamente para você sem nenhum custo adicional.',
    },
    {
      id: 'faq-5',
      question: 'Preciso instalar?',
      answer: 'Não precisa ocupar espaço na memória do seu celular nem baixar na Play Store/App Store. Você adiciona o ícone direto na Tela Inicial e abre em tela cheia com 1 toque.',
    },
  ],
};
