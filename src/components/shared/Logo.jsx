import { Link } from 'react-router-dom';
import { PiHouseLineDuotone } from 'react-icons/pi';
import { COMPANY } from '@data/company';

/**
 * variant="light"  -> for use over dark/transparent hero navbar
 * variant="dark"   -> for use once navbar is solid white
 */
const Logo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      aria-label={`${COMPANY.name} — Home`}
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${
          isLight ? 'bg-white/15 text-white' : 'bg-[var(--color-primary-500)] text-white'
        }`}
      >
        <PiHouseLineDuotone />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-heading font-extrabold text-lg tracking-tight ${
            isLight ? 'text-white' : 'text-[var(--color-primary-700)]'
          }`}
        >
          Scott Smith Roofing
        </span>
        <span
          className={`block text-[11px] font-semibold tracking-wide uppercase ${
            isLight ? 'text-white/75' : 'text-[var(--color-text-secondary)]'
          }`}
        >
          Co. &middot; Ocala, FL
        </span>
      </span>
    </Link>
  );
};

export default Logo;
