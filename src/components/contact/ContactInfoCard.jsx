import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa6';
import Button from '@components/ui/Button';
import { COMPANY } from '@data/company';

const SOCIAL_ICONS = [
  { Icon: FaFacebookF, href: COMPANY.social.facebook, label: 'Facebook' },
  { Icon: FaInstagram, href: COMPANY.social.instagram, label: 'Instagram' },
  { Icon: FaGoogle, href: COMPANY.social.google, label: 'Google Business Profile' },
  { Icon: FaYoutube, href: COMPANY.social.youtube, label: 'YouTube' },
];

const ContactInfoCard = () => (
  <div className="card p-6">
    <h3 className="font-heading font-bold text-[var(--color-text-primary)]">Get In Touch</h3>

    <ul className="mt-4 space-y-4 text-sm">
      <li className="flex items-start gap-2.5">
        <HiMapPin className="mt-0.5 shrink-0 text-lg text-[var(--color-primary-600)]" />
        <span className="text-[var(--color-text-secondary)]">{COMPANY.address.full}</span>
      </li>
      <li className="flex items-center gap-2.5">
        <HiEnvelope className="shrink-0 text-lg text-[var(--color-primary-600)]" />
        <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-600)]">
          {COMPANY.email}
        </a>
      </li>
    </ul>

    <div className="mt-5 flex flex-col gap-3">
      <Button href={COMPANY.phone.href} variant="primary" leftIcon={<HiPhone />} className="w-full">
        Call {COMPANY.phone.display}
      </Button>
      <Button
        href={COMPANY.whatsapp.href}
        variant="outline"
        leftIcon={<FaWhatsapp className="text-[var(--color-success-500)]" />}
        className="w-full"
      >
        Message on WhatsApp
      </Button>
    </div>

    <div className="mt-6 flex items-center gap-2 border-t border-[var(--color-border)] pt-5">
      {SOCIAL_ICONS.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-section)] text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-primary-500)] hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

export default ContactInfoCard;
