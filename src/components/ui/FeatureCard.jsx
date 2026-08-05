import { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * <FeatureCard icon={<PiShieldCheckDuotone />} title="Fully Insured" description="..." />
 */
const FeatureCard = ({ icon, title, description, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className={`card card-hover p-6 ${className}`}
  >
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-50)] text-2xl text-[var(--color-primary-600)]">
      {icon}
    </span>
    <h3 className="mt-4 font-heading font-bold text-[var(--color-text-primary)]">{title}</h3>
    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
  </motion.div>
);

export default memo(FeatureCard);
