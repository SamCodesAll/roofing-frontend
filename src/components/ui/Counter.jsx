import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * <Counter value={2400} suffix="+" label="Roofs Installed" />
 * variant: "default" (blue text, for light sections) | "light" (white text, for dark/gradient sections)
 */
const Counter = ({ value, prefix = '', suffix = '', label, duration = 1.6, variant = 'default' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span ref={displayRef} className={`block font-heading text-4xl md:text-5xl font-extrabold ${variant === 'light' ? 'text-white' : 'text-[var(--color-primary-600)]'}`}>
        {prefix}0{suffix}
      </span>
      {label && (
        <span className={`mt-2 block text-sm font-medium ${variant === 'light' ? 'text-white/70' : 'text-[var(--color-text-secondary)]'}`}>
          {label}
        </span>
      )}
    </motion.div>
  );
};

export default Counter;
