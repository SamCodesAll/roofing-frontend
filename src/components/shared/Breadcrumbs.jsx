import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome } from 'react-icons/hi2';
import JsonLd from './JsonLd';
import { buildBreadcrumbSchema } from '@utils/schema';

const LABEL_OVERRIDES = {
  'roof-repair': 'Roof Repair',
  'roof-replacement': 'Roof Replacement',
  'patio-construction': 'Patio Construction',
  'electrical-services': 'Electrical Services',
  'service-areas': 'Service Areas',
};

const toLabel = (segment) =>
  LABEL_OVERRIDES[segment] ||
  segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

/**
 * Renders nothing on the homepage. Exposes crumbs so pages can also
 * feed the same array into BreadcrumbList schema (Module 10).
 */
const Breadcrumbs = ({ className = '', variant = 'default' }) => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const isLight = variant === 'light';

  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, i) => ({
    label: toLabel(segment),
    path: '/' + segments.slice(0, i + 1).join('/'),
  }));

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <ol className={`flex flex-wrap items-center gap-1.5 ${isLight ? 'text-white/65' : 'text-[var(--color-text-secondary)]'}`}>
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className={`flex items-center gap-1 transition-colors ${isLight ? 'hover:text-white' : 'hover:text-[var(--color-primary-600)]'}`}
          >
            <HiHome className="text-base" />
            <span className="sr-only">Home</span>
          </Link>
          <HiChevronRight className={`text-xs ${isLight ? 'text-white/40' : 'text-[var(--color-text-muted)]'}`} />
        </li>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className={`font-medium ${isLight ? 'text-white' : 'text-[var(--color-text-primary)]'}`}>
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link
                    to={crumb.path}
                    className={`transition-colors ${isLight ? 'hover:text-white' : 'hover:text-[var(--color-primary-600)]'}`}
                  >
                    {crumb.label}
                  </Link>
                  <HiChevronRight className={`text-xs ${isLight ? 'text-white/40' : 'text-[var(--color-text-muted)]'}`} />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
