import { useEffect, useRef } from 'react';
import { getGsapScrollTrigger, prefersReducedMotion } from './gsapSetup';

/**
 * const ref = useParallax(0.35);
 * <img ref={ref} ... />
 *
 * Moves the referenced element vertically as the page scrolls past its
 * containing section, for a subtle depth effect on hero background images.
 */
const useParallax = (speed = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const { gsap, ScrollTrigger } = getGsapScrollTrigger();
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.trigger === el && t.kill());
    };
  }, [speed]);

  return ref;
};

export default useParallax;
