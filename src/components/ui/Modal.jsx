import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiXMark } from 'react-icons/hi2';
import useBodyScrollLock from '@hooks/useBodyScrollLock';

/**
 * <Modal open={open} onClose={() => setOpen(false)} title="Optional title">
 *   ...content
 * </Modal>
 */
const Modal = ({ open, onClose, title, children, size = 'md' }) => {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const sizeClass = size === 'lg' ? 'max-w-2xl' : size === 'sm' ? 'max-w-sm' : 'max-w-lg';

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[var(--color-primary-900)]/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title || 'Dialog'}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`relative z-10 w-full ${sizeClass} rounded-2xl bg-white shadow-[var(--shadow-premium)]`}
          >
            {title && (
              <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
                <h3 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">{title}</h3>
                <button
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-section)]"
                >
                  <HiXMark />
                </button>
              </div>
            )}
            <div className="p-6">{children}</div>
            {!title && (
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg-section)] text-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
              >
                <HiXMark />
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
