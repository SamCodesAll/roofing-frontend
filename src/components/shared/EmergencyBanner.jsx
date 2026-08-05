import { HiPhone } from 'react-icons/hi2';
import Button from '@components/ui/Button';
import { COMPANY } from '@data/company';

const EmergencyBanner = () => (
  <section className="bg-[var(--color-accent-500)]">
    <div className="container-custom flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
      <div className="flex items-center gap-3 text-white">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <p className="text-sm font-bold sm:text-base">
          Open 24 Hours &middot; Emergency Roof Repairs Available
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button href={COMPANY.phone.href} variant="outlineInverse" size="sm" leftIcon={<HiPhone />}>
          Call Now
        </Button>
        <Button
          to="/contact"
          variant="secondary"
          size="sm"
          className="!bg-white !text-[var(--color-accent-600)] hover:!bg-white/90"
        >
          Request Quote
        </Button>
      </div>
    </div>
  </section>
);

export default EmergencyBanner;
