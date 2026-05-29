import type { Lang } from '../i18n/ui';
import type { SpaceType } from './products';

export type PlantType = 'vegetable' | 'flower' | 'decorative' | 'herb';
export type Sunlight = 'full' | 'partial' | 'low';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type WaterNeed = 'low' | 'medium' | 'high';

export interface Plant {
  id: string;
  name: Record<Lang, string>;
  type: PlantType;
  sunlight: Sunlight; // minimum light the plant is happy with
  spaceFit: SpaceType[];
  difficulty: Difficulty;
  waterNeed: WaterNeed;
  emoji: string;
  priceRM: number;
}

export const plants: Plant[] = [
  // vegetables
  { id: 'tomato', name: { en: 'Cherry Tomato', zh: '樱桃番茄' }, type: 'vegetable', sunlight: 'full', spaceFit: ['balcony', 'rooftop'], difficulty: 'medium', waterNeed: 'high', emoji: '🍅', priceRM: 12 },
  { id: 'chili', name: { en: 'Chili Pepper', zh: '辣椒' }, type: 'vegetable', sunlight: 'full', spaceFit: ['balcony', 'rooftop'], difficulty: 'easy', waterNeed: 'medium', emoji: '🌶️', priceRM: 10 },
  { id: 'lettuce', name: { en: 'Lettuce', zh: '生菜' }, type: 'vegetable', sunlight: 'partial', spaceFit: ['balcony', 'rooftop', 'indoor'], difficulty: 'easy', waterNeed: 'high', emoji: '🥬', priceRM: 8 },
  { id: 'spinach', name: { en: 'Spinach', zh: '菠菜' }, type: 'vegetable', sunlight: 'partial', spaceFit: ['balcony', 'indoor'], difficulty: 'easy', waterNeed: 'medium', emoji: '🥬', priceRM: 8 },
  { id: 'pak-choi', name: { en: 'Pak Choi', zh: '小白菜' }, type: 'vegetable', sunlight: 'partial', spaceFit: ['balcony', 'rooftop', 'indoor'], difficulty: 'easy', waterNeed: 'medium', emoji: '🥬', priceRM: 7 },
  { id: 'eggplant', name: { en: 'Eggplant', zh: '茄子' }, type: 'vegetable', sunlight: 'full', spaceFit: ['rooftop'], difficulty: 'medium', waterNeed: 'high', emoji: '🍆', priceRM: 11 },
  // herbs
  { id: 'basil', name: { en: 'Basil', zh: '罗勒' }, type: 'herb', sunlight: 'partial', spaceFit: ['balcony', 'indoor'], difficulty: 'easy', waterNeed: 'medium', emoji: '🌿', priceRM: 9 },
  { id: 'mint', name: { en: 'Mint', zh: '薄荷' }, type: 'herb', sunlight: 'low', spaceFit: ['balcony', 'indoor'], difficulty: 'easy', waterNeed: 'high', emoji: '🌿', priceRM: 8 },
  { id: 'rosemary', name: { en: 'Rosemary', zh: '迷迭香' }, type: 'herb', sunlight: 'full', spaceFit: ['balcony', 'rooftop'], difficulty: 'medium', waterNeed: 'low', emoji: '🌿', priceRM: 13 },
  { id: 'coriander', name: { en: 'Coriander', zh: '香菜' }, type: 'herb', sunlight: 'partial', spaceFit: ['balcony', 'indoor'], difficulty: 'easy', waterNeed: 'medium', emoji: '🌿', priceRM: 7 },
  // flowers
  { id: 'marigold', name: { en: 'Marigold', zh: '万寿菊' }, type: 'flower', sunlight: 'full', spaceFit: ['balcony', 'rooftop'], difficulty: 'easy', waterNeed: 'medium', emoji: '🌼', priceRM: 10 },
  { id: 'sunflower', name: { en: 'Dwarf Sunflower', zh: '矮向日葵' }, type: 'flower', sunlight: 'full', spaceFit: ['rooftop', 'balcony'], difficulty: 'medium', waterNeed: 'medium', emoji: '🌻', priceRM: 12 },
  { id: 'petunia', name: { en: 'Petunia', zh: '矮牵牛' }, type: 'flower', sunlight: 'partial', spaceFit: ['balcony'], difficulty: 'easy', waterNeed: 'medium', emoji: '🌸', priceRM: 9 },
  { id: 'orchid', name: { en: 'Orchid', zh: '兰花' }, type: 'flower', sunlight: 'low', spaceFit: ['indoor'], difficulty: 'hard', waterNeed: 'low', emoji: '🌺', priceRM: 25 },
  { id: 'hibiscus', name: { en: 'Hibiscus', zh: '大红花' }, type: 'flower', sunlight: 'full', spaceFit: ['rooftop', 'balcony'], difficulty: 'medium', waterNeed: 'medium', emoji: '🌺', priceRM: 15 },
  // decorative
  { id: 'pothos', name: { en: 'Pothos', zh: '绿萝' }, type: 'decorative', sunlight: 'low', spaceFit: ['indoor', 'balcony'], difficulty: 'easy', waterNeed: 'low', emoji: '🪴', priceRM: 14 },
  { id: 'snake-plant', name: { en: 'Snake Plant', zh: '虎尾兰' }, type: 'decorative', sunlight: 'low', spaceFit: ['indoor'], difficulty: 'easy', waterNeed: 'low', emoji: '🪴', priceRM: 16 },
  { id: 'fern', name: { en: 'Boston Fern', zh: '波士顿蕨' }, type: 'decorative', sunlight: 'partial', spaceFit: ['indoor', 'balcony'], difficulty: 'medium', waterNeed: 'high', emoji: '🌿', priceRM: 13 },
  { id: 'succulent', name: { en: 'Succulent', zh: '多肉植物' }, type: 'decorative', sunlight: 'full', spaceFit: ['balcony', 'indoor', 'rooftop'], difficulty: 'easy', waterNeed: 'low', emoji: '🌵', priceRM: 11 },
  { id: 'bamboo-palm', name: { en: 'Bamboo Palm', zh: '散尾葵' }, type: 'decorative', sunlight: 'partial', spaceFit: ['indoor'], difficulty: 'medium', waterNeed: 'medium', emoji: '🪴', priceRM: 18 },
];
