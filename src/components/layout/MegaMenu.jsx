import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiWrenchDuotone, PiHouseSimpleDuotone, PiUmbrellaDuotone, PiLightningDuotone } from 'react-icons/pi';
import { HiArrowRight } from 'react-icons/hi2';

const ICONS = {
  '/roof-repair': PiWrenchDuotone,
  '/roof-replacement': PiHouseSimpleDuotone,
  '/patio-construction': PiUmbrellaDuotone,
  '/electrical-services': PiLightningDuotone,
};

const MegaMenu = ({ open, links, onNavigate }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-[calc(100%+12px)] z-40 w-[min(700px,90vw)] -translate-x-1/2"
        >
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-premium)]">
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => {
                const Icon = ICONS[link.path] || PiWrenchDuotone;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onNavigate}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--color-primary-50)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-50)] text-xl text-[var(--color-primary-600)] group-hover:bg-white">
                      <Icon />
                    </span>
                    <span>
                      <span className="flex items-center gap-1 font-heading font-bold text-[var(--color-text-primary)]">
                        {link.label}
                        <HiArrowRight className="text-sm opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[var(--color-accent-500)]" />
                      </span>
                      <span className="mt-0.5 block text-sm text-[var(--color-text-secondary)]">
                        {link.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-2 flex items-center justify-between rounded-xl bg-[var(--color-bg-section)] px-4 py-3">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Not sure what you need?</p>
              <Link
                to="/contact"
                onClick={onNavigate}
                className="text-sm font-bold text-[var(--color-accent-600)] hover:text-[var(--color-accent-700)]"
              >
                Get a Free Estimate →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
