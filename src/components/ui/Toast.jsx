import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle, HiInformationCircle, HiXMark } from 'react-icons/hi2';
import { ToastContext } from './ToastContext';

const ICONS = {
  success: HiCheckCircle,
  error: HiExclamationCircle,
  info: HiInformationCircle,
};

const VARIANT_CLASS = {
  success: 'border-[var(--color-success-200)] bg-[var(--color-success-50)] text-[var(--color-success-700)]',
  error: 'border-red-200 bg-red-50 text-red-700',
  info: 'border-[var(--color-primary-200)] bg-[var(--color-primary-50)] text-[var(--color-primary-700)]',
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ message, variant = 'success', duration = 4000 }) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, variant }]);
      if (duration) {
        setTimeout(() => removeToast(id), duration);
      }
      return id;
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {createPortal(
        <div className="fixed bottom-5 right-5 z-[200] flex flex-col gap-2 sm:bottom-6 sm:right-6">
          <AnimatePresence>
            {toasts.map((toast) => {
              const Icon = ICONS[toast.variant] || HiInformationCircle;
              return (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  role="status"
                  className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 shadow-[var(--shadow-card)] max-w-sm ${
                    VARIANT_CLASS[toast.variant] || VARIANT_CLASS.info
                  }`}
                >
                  <Icon className="mt-0.5 shrink-0 text-lg" />
                  <p className="text-sm font-medium">{toast.message}</p>
                  <button
                    onClick={() => removeToast(toast.id)}
                    aria-label="Dismiss notification"
                    className="ml-auto shrink-0 opacity-60 hover:opacity-100"
                  >
                    <HiXMark />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

