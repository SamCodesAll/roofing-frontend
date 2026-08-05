import { motion } from 'framer-motion';
import { HiCheckCircle, HiPhone, HiStar, HiShieldCheck, HiClock } from 'react-icons/hi2';
import Button from '@components/ui/Button';
import useParallax from '@animations/useParallax';
import { COMPANY } from '@data/company';
import heroImage from '@assets/images/hero/hero-roofing-crew.svg';

const TRUST_POINTS = [
  'Licensed Professionals',
  'Emergency Roofing',
  'Quality Materials',
  'Free Estimates',
  'Local Expertise',
];

const HERO_STATS = [
  { icon: HiShieldCheck, label: 'Licensed & Insured' },
  { icon: HiStar, label: `${COMPANY.rating}★ Google Rating` },
  { icon: HiClock, label: '24/7 Emergency Service' },
  { icon: HiCheckCircle, label: `${COMPANY.yearsExperience}+ Years Experience` },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const parallaxRef = useParallax(0.25);

  return (
    <section className="relative -mt-20 flex min-h-[92vh] items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={parallaxRef}
          src={heroImage}
          alt="Professional roofing crew installing a new residential roof"
          className="absolute inset-0 h-[130%] w-full -top-[15%] object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-900)] via-[var(--color-primary-900)]/70 to-[var(--color-primary-900)]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/60 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 pt-16 pb-30">
        <div className="max-w-2xl">
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="heading-eyebrow !text-white/80">
              <HiShieldCheck /> {COMPANY.license}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="heading-hero mt-4 text-white"
          >
            Protecting Your Home with{' '}
            <span className="text-[var(--color-accent-400)]">Roofing You Can Trust</span>
          </motion.h1>

          <motion.ul
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-1.5 text-sm font-medium text-white/85">
                <HiCheckCircle className="text-[var(--color-accent-400)]" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button to="/contact" size="lg" variant="primary">
              Request Free Estimate
            </Button>
            <Button href={COMPANY.phone.href} size="lg" variant="outlineInverse" leftIcon={<HiPhone />}>
              Call 24/7 Emergency Service
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trust indicator bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 hidden sm:block"
      >
        <div className="container-custom pb-6">
          <div className="glass-panel grid grid-cols-2 gap-4 rounded-2xl px-6 py-5 sm:grid-cols-4">
            {HERO_STATS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="text-xl text-[var(--color-accent-500)]" />
                <span className="text-sm font-semibold text-[var(--color-primary-800)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
