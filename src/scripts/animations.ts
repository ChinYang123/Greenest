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
].join(',');

let started = false;

export function initAnimations(): void {
  if (started) return;
  started = true;

  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // CSS keeps hero visible; groups are never hidden.

  // Hero: staggered entrance on load. (Hidden via .reveal-ready CSS to avoid flash.)
  const heroEls = document.querySelectorAll<HTMLElement>('[data-hero-reveal]');
  if (heroEls.length) {
    animate(
      heroEls,
      { opacity: [0, 1], y: [28, 0] },
      { duration: 0.7, delay: stagger(0.12), ease: [0.22, 0.7, 0.2, 1] }
    );
  }

  // Scroll-triggered reveals. Hide first (only now that we know JS runs),
  // then animate each element in as it enters the viewport.
  const els = Array.from(document.querySelectorAll<HTMLElement>(GROUP));
  for (const el of els) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(26px)';
  }

  inView(
    GROUP,
    (entry: unknown) => {
      const el = ((entry as IntersectionObserverEntry)?.target ?? entry) as HTMLElement;
      animate(
        el,
        { opacity: [0, 1], y: [26, 0] },
        { duration: 0.6, ease: [0.22, 0.7, 0.2, 1] }
      );
    },
    { amount: 0.12 }
  );
}
