import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/**
 * Registers the ScrollTrigger plugin exactly once, no matter how many
 * modules import this. Call inside any effect that uses GSAP scroll
 * effects. Named without a `use` prefix since it isn't a React hook —
 * it's a plain registration utility, safe to call inside callbacks.
 */
export const getGsapScrollTrigger = () => {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
};

/**
 * GSAP's timeline/tween animations aren't covered by the sitewide
 * prefers-reduced-motion CSS rule (that only catches CSS transitions),
 * so scroll-effect components check this before animating.
 */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
