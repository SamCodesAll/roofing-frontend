import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { HiXMark, HiChevronDown, HiPhone } from 'react-icons/hi2';
import { NAV_LINKS, PRIMARY_CTA } from '@constants/navigation';
import { COMPANY } from '@data/company';
import useBodyScrollLock from '@hooks/useBodyScrollLock';

const MobileDrawer = ({ open, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-[var(--color-primary-900)]/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[90] flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
              <span className="font-heading font-bold text-[var(--color-primary-700)]">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-section)]"
              >
                <HiXMark />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) =>
                  link.isMegaMenu ? (
                    <li key={link.path}>
                      <button
                        onClick={() => setServicesOpen((s) => !s)}
                        aria-expanded={servicesOpen}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-heading font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-section)]"
                      >
                        Services
                        <HiChevronDown
                          className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => (
                              <li key={child.path}>
                                <NavLink
                                  to={child.path}
                                  onClick={onClose}
                                  className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2.5 text-sm ${
                                      isActive
                                        ? 'font-semibold text-[var(--color-accent-600)]'
                                        : 'text-[var(--color-text-secondary)]'
                                    }`
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-3 font-heading font-semibold ${
                            isActive
                              ? 'text-[var(--color-accent-600)]'
                              : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-section)]'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-[var(--color-border)] p-5">
              <a href={COMPANY.phone.href} className="btn btn-outline w-full">
                <HiPhone /> {COMPANY.phone.display}
              </a>
              <Link to={PRIMARY_CTA.path} onClick={onClose} className="btn btn-primary w-full">
                {PRIMARY_CTA.label}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
