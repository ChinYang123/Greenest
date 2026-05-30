import type { Lang } from '../i18n/ui';

// Pre-prepared reference photos shown in the Garden Designer result.
// Real Creative-Commons photos shipped with the site (downloaded at build
// time from LoremFlickr) — no AI generation, no runtime API call.
// Keyed by SPACE × GOAL so the photos match the user's actual selection.
export type DesignerSpace = 'balcony' | 'rooftop' | 'indoor';
export type DesignerGoal = 'vegetables' | 'flowers' | 'decorative' | 'mixed';

export interface DesignerImage {
  src: string;
  alt: Record<Lang, string>;
}

const spaceLabel: Record<DesignerSpace, Record<Lang, string>> = {
  balcony: { en: 'Balcony', zh: '阳台' },
  rooftop: { en: 'Rooftop', zh: '屋顶' },
  indoor: { en: 'Indoor', zh: '室内' },
};
const goalLabel: Record<DesignerGoal, Record<Lang, string>> = {
  vegetables: { en: 'vegetable garden', zh: '菜园' },
  flowers: { en: 'flower garden', zh: '花园' },
  decorative: { en: 'plant display', zh: '观赏绿植' },
  mixed: { en: 'mixed garden', zh: '混合花园' },
};

const SPACES: DesignerSpace[] = ['balcony', 'rooftop', 'indoor'];
const GOALS: DesignerGoal[] = ['vegetables', 'flowers', 'decorative', 'mixed'];

function build(): Record<DesignerSpace, Record<DesignerGoal, DesignerImage[]>> {
  const out = {} as Record<DesignerSpace, Record<DesignerGoal, DesignerImage[]>>;
  for (const s of SPACES) {
    out[s] = {} as Record<DesignerGoal, DesignerImage[]>;
    for (const g of GOALS) {
      out[s][g] = [1, 2, 3].map((n) => ({
        src: `/images/designer/${s}-${g}-${n}.jpg`,
        alt: {
          en: `${spaceLabel[s].en} ${goalLabel[g].en}`,
          zh: `${spaceLabel[s].zh}${goalLabel[g].zh}`,
        },
      }));
    }
  }
  return out;
}

export const designerImages = build();

/** Safe lookup with a sensible fallback. */
export function imagesFor(space: string, goal: string): DesignerImage[] {
  const s = (SPACES.includes(space as DesignerSpace) ? space : 'balcony') as DesignerSpace;
  const g = (GOALS.includes(goal as DesignerGoal) ? goal : 'mixed') as DesignerGoal;
  return designerImages[s][g];
}
