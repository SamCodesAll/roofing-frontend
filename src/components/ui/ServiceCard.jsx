import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';

/**
 * <ServiceCard
 *   icon={<PiWrenchDuotone />}
 *   title="Roof Repair"
 *   description="Fast, reliable leak and storm damage repair."
 *   image="/images/services/roof-repair.jpg"
 *   to="/roof-repair"
 * />
 */
const ServiceCard = ({ icon, title, description, image, to }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="card-flush card-hover group flex h-full flex-col"
  >
    <div className="relative h-48 overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="gradient-primary h-full w-full" />
      )}
      <div className="absolute inset-0 gradient-overlay-dark" />
      {icon && (
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl text-[var(--color-primary-600)] shadow-md">
          {icon}
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
      <Link
        to={to}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-accent-600)] transition-colors hover:text-[var(--color-accent-700)]"
      >
        Learn More
        <HiArrowRight className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

export default memo(ServiceCard);
