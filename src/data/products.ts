import type { Lang } from '../i18n/ui';

export type SpaceType = 'balcony' | 'rooftop' | 'indoor';

export interface Product {
  id: string;
  slug: string;
  name: Record<Lang, string>;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  priceRM: number; // 0 = custom / contact for quote
  featured: boolean;
  fits: SpaceType[];
  features: Record<Lang, string[]>;
}

export const products: Product[] = [
  {
    id: 'starter',
    slug: 'starter-kit',
    name: { en: 'Starter Kit', zh: '入门套装' },
    tagline: {
      en: 'Perfect for beginners testing the waters.',
      zh: '适合初次尝试的新手。',
    },
    description: {
      en: 'A compact vertical planter with everything a first-time grower needs to harvest fresh greens on a small balcony.',
      zh: '紧凑的垂直花盆，包含新手在小阳台收获新鲜蔬菜所需的一切。',
    },
    priceRM: 299,
    featured: false,
    fits: ['balcony', 'indoor'],
    features: {
      en: [
        'Organic soil mix included',
        'Space-saving vertical planter',
        'Manual watering kit',
        'Curated beginner seeds',
      ],
      zh: ['含有机土配方', '省空间垂直花盆', '手动浇水套件', '精选新手种子'],
    },
  },
  {
    id: 'smart',
    slug: 'smart-garden-kit',
    name: { en: 'Smart Garden Kit', zh: '智能花园套装' },
    tagline: {
      en: 'Advanced sensors and automated care for effortless growing.',
      zh: '先进传感器与自动养护，轻松种植。',
    },
    description: {
      en: 'Our most popular kit: self-watering reservoirs, soil sensors, and app reminders so your garden thrives even on busy weeks.',
      zh: '我们最受欢迎的套装：自动储水、土壤传感器与 App 提醒，再忙花园也能茁壮成长。',
    },
    priceRM: 599,
    featured: true,
    fits: ['balcony', 'rooftop', 'indoor'],
    features: {
      en: [
        'Self-watering reservoir system',
        'Soil moisture + light sensors',
        'App care reminders',
        'Premium organic soil + seeds',
      ],
      zh: ['自动储水系统', '土壤湿度与光照传感器', 'App 养护提醒', '优质有机土与种子'],
    },
  },
  {
    id: 'commercial',
    slug: 'commercial-rooftop',
    name: { en: 'Commercial Rooftop', zh: '商用屋顶方案' },
    tagline: {
      en: 'Large scale solutions for cafes and community spaces.',
      zh: '面向咖啡馆与社区空间的大型方案。',
    },
    description: {
      en: 'A fully designed and installed rooftop garden for businesses — from load assessment to planting and a maintenance plan.',
      zh: '为企业全程设计并安装的屋顶花园 —— 从承重评估到种植与养护方案。',
    },
    priceRM: 0,
    featured: false,
    fits: ['rooftop'],
    features: {
      en: [
        'On-site assessment & custom design',
        'Professional installation',
        'Commercial-grade eco materials',
        'Ongoing maintenance plan',
      ],
      zh: ['现场评估与定制设计', '专业安装', '商用级环保材料', '持续养护方案'],
    },
  },
];

export function priceLabel(p: Product, lang: Lang): string {
  if (p.priceRM === 0) return lang === 'zh' ? '定制报价' : 'Custom';
  return `RM${p.priceRM}`;
}
