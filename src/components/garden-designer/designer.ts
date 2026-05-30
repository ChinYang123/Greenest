import { plants, type Plant, type Sunlight } from '../../data/plants';
import { products, type Product, type SpaceType } from '../../data/products';
import { ui, defaultLang, type Lang } from '../../i18n/ui';
import { imagesFor } from '../../data/designerImages';

type Goal = 'vegetables' | 'flowers' | 'decorative' | 'mixed';
type Size = 'small' | 'medium' | 'large';

interface Config {
  space: SpaceType | '';
  size: Size | '';
  sunlight: Sunlight | '';
  goal: Goal | '';
  budget: number;
}

const SUN_RANK: Record<Sunlight, number> = { low: 0, partial: 1, full: 2 };
const SLOTS: Record<Size, number> = { small: 6, medium: 12, large: 20 };
const COLS: Record<Size, number> = { small: 3, medium: 4, large: 5 };
const GOAL_TYPES: Record<Goal, Plant['type'][] | 'any'> = {
  vegetables: ['vegetable', 'herb'],
  flowers: ['flower'],
  decorative: ['decorative'],
  mixed: 'any',
};
const STORAGE_KEY = 'citygarden.planner.config';

function lang(): Lang {
  const l = document.documentElement.lang;
  return l === 'zh' ? 'zh' : (defaultLang as Lang);
}
function t(key: keyof (typeof ui)['en']): string {
  const l = lang();
  return ui[l][key] ?? ui[defaultLang][key] ?? key;
}

/** A plant is growable if the available light meets or exceeds its minimum need. */
function isCompatible(plant: Plant, sun: Sunlight): boolean {
  return SUN_RANK[sun] >= SUN_RANK[plant.sunlight];
}

function scorePlant(plant: Plant, cfg: Config): number {
  let score = 0;
  if (plant.sunlight === cfg.sunlight) score += 5;
  else score += 2; // compatible but not exact (already filtered for compatibility)
  const types = GOAL_TYPES[cfg.goal as Goal];
  if (types === 'any' || types.includes(plant.type)) score += 4;
  if (plant.spaceFit.includes(cfg.space as SpaceType)) score += 3;
  if (plant.difficulty === 'easy') score += 1;
  return score;
}

export type BudgetTier = 'starter' | 'standard' | 'premium';

/** Budget range -> setup tier. Drives kit, plant count, and the result label. */
export function budgetTier(budget: number): BudgetTier {
  return budget >= 500 ? 'premium' : budget >= 150 ? 'standard' : 'starter';
}
function plantCountFor(tier: BudgetTier): number {
  return tier === 'premium' ? 8 : tier === 'standard' ? 6 : 4;
}

export interface Recommendation {
  kit: Product;
  kitBelowBudget: boolean;
  matchPct: number;
  plants: Plant[];
  total: number;
  tier: BudgetTier;
}

export function recommend(cfg: Config): Recommendation | null {
  const sun = cfg.sunlight as Sunlight;
  const scored = plants
    .filter((p) => isCompatible(p, sun))
    .map((p) => ({ p, s: scorePlant(p, cfg) }))
    .sort((a, b) => b.s - a.s || a.p.priceRM - b.p.priceRM);

  // Kit selection: priced kits that fit the space.
  const fitting = products.filter((k) => k.priceRM > 0 && k.fits.includes(cfg.space as SpaceType));
  const pool = fitting.length ? fitting : products.filter((k) => k.priceRM > 0);
  const affordable = pool.filter((k) => k.priceRM <= cfg.budget).sort((a, b) => b.priceRM - a.priceRM);
  let kit: Product;
  let kitBelowBudget = true;
  if (affordable.length) {
    kit = affordable[0];
  } else {
    kit = [...pool].sort((a, b) => a.priceRM - b.priceRM)[0];
    kitBelowBudget = false;
  }

  // Budget range changes the outcome: more plants for a bigger budget.
  const tier = budgetTier(cfg.budget);
  const count = plantCountFor(tier);

  // Dynamically select plants to stay within the remaining budget.
  let remainingBudget = cfg.budget - kit.priceRM;
  const top: Plant[] = [];
  for (const item of scored) {
    if (top.length >= count) break;
    // Always recommend at least 1 plant, otherwise stay within the remaining budget
    if (top.length === 0 || remainingBudget >= item.p.priceRM) {
      top.push(item.p);
      remainingBudget -= item.p.priceRM;
    }
  }

  if (!top.length) return null;

  const avgScore = scored.slice(0, top.length).reduce((sum, x) => sum + x.s, 0) / Math.min(top.length, scored.length);
  const matchPct = Math.max(80, Math.min(99, Math.round(78 + avgScore)));
  const plantsTotal = top.reduce((sum, p) => sum + p.priceRM, 0);
  const total = kit.priceRM + plantsTotal;

  return { kit, kitBelowBudget, matchPct, plants: top, total, tier };
}

function buildLayout(size: Size, recPlants: Plant[]): string {
  const count = SLOTS[size];
  const cols = COLS[size];
  let cells = '';
  for (let i = 0; i < count; i++) {
    const plant = recPlants.length ? recPlants[i % recPlants.length] : null;
    cells += plant
      ? `<div class="slot" title="${plant.name[lang()]}">${plant.emoji}</div>`
      : `<div class="slot empty"></div>`;
  }
  return `<div class="layout-grid" style="grid-template-columns:repeat(${cols},1fr)">${cells}</div>`;
}

function renderResult(root: HTMLElement, cfg: Config) {
  const resultEl = root.querySelector<HTMLElement>('[data-result]')!;
  const rec = recommend(cfg);
  const l = lang();

  if (!rec) {
    resultEl.innerHTML = `<div class="panel" style="grid-column:1/-1"><p class="designer-note">${t('cfg.noPlants')}</p></div>`;
    return;
  }

  const kitPrice = rec.kit.priceRM > 0 ? `RM${rec.kit.priceRM}` : (l === 'zh' ? '定制' : 'Custom');
  const plantRows = rec.plants
    .map(
      (p) =>
        `<div class="plant"><span class="p-emoji">${p.emoji}</span><span>${p.name[l]}</span><span class="p-price">RM${p.priceRM}</span></div>`
    )
    .join('');

  // Pre-prepared reference photos matched to the chosen SPACE × GOAL (no API / no AI model).
  const imgs = imagesFor(cfg.space, cfg.goal);
  const inspoHtml = imgs
    .map(
      (im) =>
        `<figure class="inspo"><img src="${im.src}" alt="${im.alt[l]}" loading="lazy" width="640" height="480" /><figcaption>${im.alt[l]}</figcaption></figure>`
    )
    .join('');

  // "Your choices" summary so the result clearly reflects every input.
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);
  const summaryHtml = [
    tk(`cfg.space.${cfg.space}`),
    tk(`cfg.size.${cfg.size}`),
    tk(`cfg.sun.${cfg.sunlight}`),
    tk(`cfg.goal.${cfg.goal}`),
    `RM${cfg.budget}`,
  ]
    .map((s) => `<span class="choice-chip">${s}</span>`)
    .join('');
  const tierLabel = tk(`cfg.tier.${rec.tier}`);

  resultEl.innerHTML = `
    <div class="choices-bar" style="grid-column:1/-1">
      <span class="choices-label">${t('cfg.yourChoices')}</span>
      ${summaryHtml}
      <span class="choice-chip tier">${tierLabel}</span>
    </div>
    <div class="panel">
      <h3>${t('cfg.recommendedKit')} <span class="match-pill">${rec.matchPct}% ${t('cfg.match')}</span></h3>
      <div class="kit-line"><strong>${rec.kit.name[l]}</strong><span class="kit-price">${kitPrice}</span></div>
      <p class="designer-note">${rec.kit.tagline[l]}</p>
      ${rec.kitBelowBudget ? '' : `<p class="designer-note">⚠️ ${t('cfg.kitNote')}</p>`}
      <h3 style="margin-top:1.5rem;">${t('cfg.recommendedPlants')} (${rec.plants.length})</h3>
      <div class="plant-list">${plantRows}</div>
    </div>
    <div class="panel">
      <h3>${t('cfg.layout')}</h3>
      ${buildLayout(cfg.size as Size, rec.plants)}
      <div class="total-row"><span>${t('cfg.estTotal')}</span><span class="total-amt">RM${rec.total}</span></div>
    </div>
    <div class="panel inspiration" style="grid-column:1/-1">
      <h3>${t('cfg.inspiration')}</h3>
      <p class="designer-note">${t('cfg.inspirationNote')}</p>
      <div class="inspo-grid">${inspoHtml}</div>
    </div>
    <div class="result-actions">
      <a href="/${l}/consultation" class="btn btn-primary">${t('cfg.bookCta')}</a>
      <button type="button" class="btn btn-outline" data-restart>${t('btn.startOver')}</button>
    </div>
  `;

  resultEl.querySelector('[data-restart]')?.addEventListener('click', () => resetAll(root));
}

function readConfig(root: HTMLElement): Config {
  const get = (group: string) =>
    root.querySelector<HTMLElement>(`[data-group="${group}"] .option.selected`)?.dataset.value ?? '';
  const budget = Number(root.querySelector<HTMLInputElement>('[data-budget]')?.value ?? 600);
  return {
    space: get('space') as Config['space'],
    size: get('size') as Config['size'],
    sunlight: get('sunlight') as Config['sunlight'],
    goal: get('goal') as Config['goal'],
    budget,
  };
}

function applyConfig(root: HTMLElement, cfg: Config) {
  (['space', 'size', 'sunlight', 'goal'] as const).forEach((group) => {
    root.querySelectorAll<HTMLElement>(`[data-group="${group}"] .option`).forEach((opt) => {
      opt.classList.toggle('selected', opt.dataset.value === cfg[group]);
    });
  });
  const slider = root.querySelector<HTMLInputElement>('[data-budget]');
  const out = root.querySelector<HTMLElement>('[data-budget-value]');
  if (slider) slider.value = String(cfg.budget);
  if (out) out.textContent = `RM${cfg.budget}`;
}

function isComplete(cfg: Config): boolean {
  return !!(cfg.space && cfg.size && cfg.sunlight && cfg.goal);
}

function resetAll(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('.option.selected').forEach((o) => o.classList.remove('selected'));
  const slider = root.querySelector<HTMLInputElement>('[data-budget]');
  const out = root.querySelector<HTMLElement>('[data-budget-value]');
  if (slider) slider.value = '100';
  if (out) out.textContent = 'RM100';
  root.querySelector<HTMLElement>('[data-result]')!.innerHTML = '';
  root.querySelector<HTMLElement>('[data-step="result"]')!.classList.add('hidden');
  root.querySelector<HTMLElement>('[data-step="form"]')!.classList.remove('hidden');
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

function run(root: HTMLElement) {
  const cfg = readConfig(root);
  if (!isComplete(cfg)) {
    root.querySelector<HTMLElement>('[data-validation]')!.classList.remove('hidden');
    return;
  }
  root.querySelector<HTMLElement>('[data-validation]')!.classList.add('hidden');
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
  } catch {}

  const formStep = root.querySelector<HTMLElement>('[data-step="form"]')!;
  const analyzeStep = root.querySelector<HTMLElement>('[data-step="analyze"]')!;
  const resultStep = root.querySelector<HTMLElement>('[data-step="result"]')!;

  formStep.classList.add('hidden');
  resultStep.classList.add('hidden');
  analyzeStep.classList.remove('hidden');

  window.setTimeout(() => {
    analyzeStep.classList.add('hidden');
    renderResult(root, cfg);
    resultStep.classList.remove('hidden');
    resultStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 1300);
}

export function initDesigner() {
  const root = document.getElementById('garden-designer');
  if (!root) return;

  // option selection (single-select per group)
  root.querySelectorAll<HTMLElement>('.option').forEach((opt) => {
    opt.addEventListener('click', () => {
      const group = opt.closest<HTMLElement>('[data-group]');
      group?.querySelectorAll('.option').forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // budget slider live label
  const slider = root.querySelector<HTMLInputElement>('[data-budget]');
  const out = root.querySelector<HTMLElement>('[data-budget-value]');
  slider?.addEventListener('input', () => {
    if (out) out.textContent = `RM${slider.value}`;
  });

  root.querySelector<HTMLElement>('[data-generate]')?.addEventListener('click', () => run(root));

  // restore previous config
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const cfg = JSON.parse(saved) as Config;
      applyConfig(root, cfg);
      if (isComplete(cfg)) {
        renderResult(root, cfg);
        root.querySelector<HTMLElement>('[data-step="form"]')!.classList.add('hidden');
        root.querySelector<HTMLElement>('[data-step="result"]')!.classList.remove('hidden');
      }
    }
  } catch {}
}
