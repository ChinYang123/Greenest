import type { Lang } from '../i18n/ui';

// Pre-prepared reference photos shown in the Garden Designer result.
// Real Creative-Commons photos shipped with the site (downloaded at build
// time from LoremFlickr) — no AI generation, no runtime API call.
export type DesignerGoal = 'vegetables' | 'flowers' | 'decorative' | 'mixed';

export interface DesignerImage {
  src: string;
  alt: Record<Lang, string>;
}

export const designerImages: Record<DesignerGoal, DesignerImage[]> = {
  vegetables: [
    { src: '/images/designer/vegetables-1.jpg', alt: { en: 'Vegetable garden', zh: '蔬菜花园' } },
    { src: '/images/designer/vegetables-2.jpg', alt: { en: 'Vegetables growing on a balcony', zh: '阳台上种植的蔬菜' } },
    { src: '/images/designer/vegetables-3.jpg', alt: { en: 'Home-grown tomatoes', zh: '自家种的番茄' } },
  ],
  flowers: [
    { src: '/images/designer/flowers-1.jpg', alt: { en: 'Flower garden', zh: '花卉花园' } },
    { src: '/images/designer/flowers-2.jpg', alt: { en: 'Flowers on a balcony', zh: '阳台上的花卉' } },
    { src: '/images/designer/flowers-3.jpg', alt: { en: 'Blooming flowers', zh: '盛开的花朵' } },
  ],
  decorative: [
    { src: '/images/designer/decorative-1.jpg', alt: { en: 'Decorative houseplants', zh: '观赏室内植物' } },
    { src: '/images/designer/decorative-2.jpg', alt: { en: 'Indoor plants', zh: '室内植物' } },
    { src: '/images/designer/decorative-3.jpg', alt: { en: 'Potted succulents', zh: '盆栽多肉' } },
  ],
  mixed: [
    { src: '/images/designer/mixed-1.jpg', alt: { en: 'Urban garden', zh: '城市花园' } },
    { src: '/images/designer/mixed-2.jpg', alt: { en: 'Rooftop garden', zh: '屋顶花园' } },
    { src: '/images/designer/mixed-3.jpg', alt: { en: 'Container garden mix', zh: '混合容器花园' } },
  ],
};
