import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '@components/shared/ScrollProgress';
import Breadcrumbs from '@components/shared/Breadcrumbs';
import FloatingActions from '@components/shared/FloatingActions';
import JsonLd from '@components/shared/JsonLd';
import PageLoader from '@components/shared/PageLoader';
import { isHeroRoute } from '@constants/navigation';
import { buildLocalBusinessSchema } from '@utils/schema';

const Layout = () => {
  const { pathname } = useLocation();

  // Pages matched by isHeroRoute render their own full-bleed hero (with its
  // own breadcrumb trail in light text) directly under the transparent
  // navbar. Every other page gets pushed below the fixed navbar and shows
  // the standard breadcrumb strip here instead.
  const hasHero = isHeroRoute(pathname);

  // Land at the top of each new page instead of preserving scroll position.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)] font-body pb-16 sm:pb-0">
      <JsonLd data={buildLocalBusinessSchema()} />
      <ScrollProgress />
      <Navbar />

      <main className={hasHero ? '' : 'pt-20'}>
        {!hasHero && (
          <div className="container-custom pt-6">
            <Breadcrumbs />
          </div>
        )}
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
