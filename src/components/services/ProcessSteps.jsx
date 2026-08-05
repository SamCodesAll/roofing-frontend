import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@components/ui/SectionHeading';
import { getGsapScrollTrigger, prefersReducedMotion } from '@animations/gsapSetup';

/**
 * <ProcessSteps title="Our Repair Process" steps={[{title, description}]} />
 */
const ProcessSteps = ({ title = 'Our Process', steps }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return undefined;

    const { gsap, ScrollTrigger } = getGsapScrollTrigger();
    const lines = container.querySelectorAll('.process-line');

    const ctx = gsap.context(() => {
      gsap.set(lines, { scaleX: 0, transformOrigin: 'left center' });
      gsap.to(lines, {
        scaleX: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
        },
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.trigger === container && t.kill());
    };
  }, [steps]);

  return (
    <section className="section section-alt">
      <div className="container-custom">
        <SectionHeading eyebrow="How It Works" title={title} />

        <div ref={containerRef} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-500)] font-heading font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-heading font-bold text-[var(--color-text-primary)]">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{step.description}</p>
              {i < steps.length - 1 && (
                <span className="process-line absolute top-5 left-[calc(100%-1.25rem)] hidden h-px w-[calc(100%-1.5rem)] bg-[var(--color-accent-400)] md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
