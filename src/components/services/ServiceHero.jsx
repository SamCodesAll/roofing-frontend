import { motion } from 'framer-motion';
import { HiPhone } from 'react-icons/hi2';
import Button from '@components/ui/Button';
import Breadcrumbs from '@components/shared/Breadcrumbs';
import useParallax from '@animations/useParallax';
import { COMPANY } from '@data/company';

/**
 * <ServiceHero title="Roof Repair" subtitle="..." image="..." />
 */
const ServiceHero = ({ title, subtitle, image }) => {
  const parallaxRef = useParallax(0.2);

  return (
    <section className="relative -mt-20 flex min-h-[60vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={parallaxRef}
          src={image}
          alt={title}
          className="absolute inset-0 h-[130%] w-full -top-[15%] object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-900)] via-[var(--color-primary-900)]/75 to-[var(--color-primary-900)]/50" />
      </div>

      <div className="container-custom relative z-10 py-16">
        <Breadcrumbs variant="light" className="mb-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="heading-display text-white">{title}</h1>
          <p className="text-body-lg mt-4 max-w-xl !text-white/80">{subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button to="/contact" size="lg" variant="primary">
              Request Free Estimate
            </Button>
            <Button href={COMPANY.phone.href} size="lg" variant="outlineInverse" leftIcon={<HiPhone />}>
              Call {COMPANY.phone.display}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
