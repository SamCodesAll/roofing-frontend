import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, LayoutGroup } from 'framer-motion';
import { HiBars3, HiPhone, HiChevronDown } from 'react-icons/hi2';
import Logo from '@components/shared/Logo';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import { NAV_LINKS, PRIMARY_CTA, isHeroRoute } from '@constants/navigation';
import { COMPANY } from '@data/company';
import useScrolled from '@hooks/useScrolled';

const Navbar = () => {
  const scrolled = useScrolled(40);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { pathname } = useLocation();

  const isTransparent = isHeroRoute(pathname) && !scrolled && !drawerOpen;
  const logoVariant = isTransparent ? 'light' : 'dark';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-20 items-center transition-colors duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,76,129,0.08)]'
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          <Logo variant={logoVariant} />

          <LayoutGroup id="navbar">
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = link.isMegaMenu
                  ? link.children.some((c) => c.path === pathname)
                  : pathname === link.path;

                if (link.isMegaMenu) {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 rounded-full px-4 py-2 font-medium text-sm transition-colors ${
                          isTransparent
                            ? 'text-white/90 hover:text-white'
                            : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary-600)]'
                        }`}
                        aria-expanded={megaOpen}
                      >
                        {link.label}
                        <HiChevronDown className={`text-sm transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isActive && (
                        <motion.span
                          layoutId="navUnderline"
                          className={`absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full ${
                            isTransparent ? 'bg-white' : 'bg-[var(--color-accent-500)]'
                          }`}
                        />
                      )}
                      <MegaMenu open={megaOpen} links={link.children} onNavigate={() => setMegaOpen(false)} />
                    </div>
                  );
                }

                return (
                  <div key={link.path} className="relative">
                    <NavLink
                      to={link.path}
                      className={`block rounded-full px-4 py-2 font-medium text-sm transition-colors ${
                        isTransparent
                          ? 'text-white/90 hover:text-white'
                          : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary-600)]'
                      }`}
                    >
                      {link.label}
                    </NavLink>
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className={`absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full ${
                          isTransparent ? 'bg-white' : 'bg-[var(--color-accent-500)]'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </nav>
          </LayoutGroup>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.phone.href}
              className={`flex items-center gap-2 font-heading font-bold text-sm ${
                isTransparent ? 'text-white' : 'text-[var(--color-primary-700)]'
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  isTransparent ? 'bg-white/15' : 'bg-[var(--color-primary-50)]'
                }`}
              >
                <HiPhone />
              </span>
              {COMPANY.phone.display}
            </a>
            <Link to={PRIMARY_CTA.path} className="btn btn-primary btn-sm">
              {PRIMARY_CTA.label}
            </Link>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full text-2xl lg:hidden ${
              isTransparent ? 'text-white' : 'text-[var(--color-primary-700)]'
            }`}
          >
            <HiBars3 />
          </button>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
