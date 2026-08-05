import { AnimatePresence, motion } from 'framer-motion';
import { HiPhone, HiArrowUp } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';
import { COMPANY } from '@data/company';
import useScrolled from '@hooks/useScrolled';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const FloatingActions = () => {
  const showBackToTop = useScrolled(500);

  return (
    <>
      {/* Mobile: sticky full-width bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex sm:hidden">
        <a
          href={COMPANY.phone.href}
          className="flex flex-1 items-center justify-center gap-2 bg-[var(--color-accent-500)] py-3.5 text-sm font-bold text-white"
        >
          <HiPhone /> Call Now
        </a>
        <a
          href={COMPANY.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[var(--color-success-500)] py-3.5 text-sm font-bold text-white"
        >
          <FaWhatsapp className="text-base" /> WhatsApp
        </a>
      </div>

      {/* Desktop: floating circular action stack, bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 sm:flex">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-[var(--color-primary-600)] shadow-[var(--shadow-premium)] border border-[var(--color-border)]"
            >
              <HiArrowUp />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={COMPANY.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success-500)] text-2xl text-white shadow-[var(--shadow-premium)] transition-transform hover:scale-105"
        >
          <FaWhatsapp />
        </a>

        <a
          href={COMPANY.phone.href}
          aria-label="Call us now"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-500)] text-2xl text-white shadow-[var(--shadow-glow-accent)] transition-transform hover:scale-105"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-500)] opacity-30" />
          <HiPhone className="relative" />
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
