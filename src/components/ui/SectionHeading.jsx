import { motion } from 'framer-motion';

/**
 * align: "center" | "left"
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className = '' }) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${isCenter ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}
    >
      {eyebrow && <span className="heading-eyebrow">{eyebrow}</span>}
      {title && <h2 className="heading-section mt-3">{title}</h2>}
      {subtitle && <p className="text-body-lg mt-4">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
