import { animate, inView, stagger } from 'motion';

// Elements that reveal as they scroll into view.
const GROUP = [
  '.feature-card',
  '.product-card',
  '.benefit-item',
  '.testimonial-card',
  '.team-card',
  '.blog-card',
  '.step-card',
  '.gallery-item',
  '.mission-card',
  '.section-header',
  '.form-card',
  '.designer-card',
  '.ai-demo-container',
  '.faq-item',
].join(',');

let started = false;

/** Last-resort: make everything visible. Used if Motion fails to load/run. */
function revealEverything(): void {
  document.documentElement.classList.add('reveal-fallback');
  document
    .querySelectorAll<HTMLElement>('.reveal-init, [data-hero-reveal]')
    .forEach((el) => el.classList.add('reveal-in'));
}

function inViewport(el: HTMLElement, margin = 1): boolean {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * margin && r.bottom > 0;
}

export function initAnimations(): void {
  if (started) return;
  started = true;

  try {
    const groupEls = Array.from(document.querySelectorAll<HTMLElement>(GROUP));
    // Tag as reveal-managed AND immediately reveal anything already on screen.
    // Doing both in the same tick means above-the-fold content never paints
    // hidden — eliminating empty bands even if the observer is slow/broken.
    groupEls.forEach((el) => {
      el.classList.add('reveal-init');
      if (inViewport(el)) el.classList.add('reveal-in');
    });

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      revealEverything();
      return;
    }

    // Hero: staggered entrance on load.
    const heroEls = document.querySelectorAll<HTMLElement>('[data-hero-reveal]');
    if (heroEls.length) {
      animate(
        heroEls,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.7, delay: stagger(0.12), ease: [0.22, 0.7, 0.2, 1] }
      );
    }

    // Below-the-fold elements animate as they enter view. Already-revealed
    // (on-screen) elements are skipped so they never flash.
    inView(
      GROUP,
      (info: unknown) => {
        const el = ((info as IntersectionObserverEntry)?.target ?? info) as HTMLElement;
        if (el.classList.contains('reveal-in')) return;
        el.classList.add('reveal-in');
        try {
          animate(el, { opacity: [0, 1], y: [26, 0] }, { duration: 0.6, ease: [0.22, 0.7, 0.2, 1] });
        } catch {
          /* CSS transition already handles the reveal */
        }
      },
      { amount: 0.12 }
    );

    // Safety net: reveal anything still hidden but now in view (e.g. after fonts
    // shift layout, or if the observer never fired).
    window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal-init:not(.reveal-in)').forEach((el) => {
        if (inViewport(el)) el.classList.add('reveal-in');
      });
    }, 1200);
  } catch {
    revealEverything();
  }
}
