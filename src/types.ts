export interface AppScreenshot {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  description: string;
  badge?: string;
}

export interface WhatsAppProof {
  id: string;
  authorName: string;
  authorLocation: string;
  avatarUrl: string;
  messageText: string;
  dishImage?: string;
  rating: number;
  timeAgo: string;
  verifiedCustomer: boolean;
  screenshotUrl?: string;
  fallbackScreenshotUrl?: string;
}

export interface PwaStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OfferPricing {
  originalPrice: string;
  currentPrice: string;
  installmentText: string;
  savingsText: string;
  checkoutUrl: string;
  guaranteeDays: number;
}

export interface LandingPageConfig {
  appName: string;
  logoUrl: string;
  heroBadgeText: string;
  headline: string;
  featureHighlight?: string;
  subheadline: string;
  ctaText: string;
  checkoutUrl: string;
  whatsappSupportNumber: string;
  pricing: OfferPricing;
  appScreenshots: AppScreenshot[];
  pwaSteps: PwaStep[];
  whatsappProofs: WhatsAppProof[];
  benefits: BenefitItem[];
  faqItems: FaqItem[];
  offerInclusions: string[];
}
