import { Link } from 'react-router-dom';
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiClock,
  HiShieldCheck,
} from 'react-icons/hi2';
import { FaFacebookF, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa6';
import Logo from '@components/shared/Logo';
import { NAV_LINKS } from '@constants/navigation';
import { COMPANY } from '@data/company';
import { SERVICE_AREAS } from '@data/serviceAreas';

const SERVICE_LINKS = NAV_LINKS.find((l) => l.isMegaMenu).children;

const SOCIAL_ICONS = [
  { Icon: FaFacebookF, href: COMPANY.social.facebook, label: 'Facebook' },
  { Icon: FaInstagram, href: COMPANY.social.instagram, label: 'Instagram' },
  { Icon: FaGoogle, href: COMPANY.social.google, label: 'Google Business Profile' },
  { Icon: FaYoutube, href: COMPANY.social.youtube, label: 'YouTube' },
];

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="font-heading font-bold text-white mb-4 text-sm tracking-wide uppercase">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-900)] text-white/80">
      <div className="container-custom py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand + social */}
        <div className="lg:col-span-1 sm:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Licensed, insured roofing and home services serving Marion County families
            since 2011. Quality craftsmanship, honest pricing, and roofs built to last.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {SOCIAL_ICONS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition-colors hover:bg-[var(--color-accent-500)] hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links">
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.filter((l) => !l.isMegaMenu).map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Services">
          <ul className="space-y-2.5 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Service Areas">
          <ul className="space-y-2.5 text-sm">
            {SERVICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/service-areas/${area.slug}`} className="transition-colors hover:text-white">
                  {area.name}, {area.state}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Contact & Hours">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <HiMapPin className="mt-0.5 shrink-0 text-[var(--color-accent-400)]" />
              <span>{COMPANY.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <HiPhone className="shrink-0 text-[var(--color-accent-400)]" />
              <a href={COMPANY.phone.href} className="transition-colors hover:text-white">
                {COMPANY.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <HiEnvelope className="shrink-0 text-[var(--color-accent-400)]" />
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <HiClock className="mt-0.5 shrink-0 text-[var(--color-accent-400)]" />
              <span>
                {COMPANY.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </FooterColumn>
      </div>

      {/* Licensing strip */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-wrap items-center gap-x-6 gap-y-2 py-5 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <HiShieldCheck className="text-[var(--color-success-400)]" />
            {COMPANY.license}
          </span>
          <span>{COMPANY.insured}</span>
          <span>
            {COMPANY.rating}★ Google Rating &middot; {COMPANY.reviewCount} Reviews
          </span>
        </div>
      </div>

      {/* Legal bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col-reverse items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {year} {COMPANY.name} All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
