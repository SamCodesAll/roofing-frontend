import { HiPhone } from 'react-icons/hi2';
import { PiSirenDuotone } from 'react-icons/pi';
import Button from '@components/ui/Button';
import { COMPANY } from '@data/company';

/**
 * <EmergencyCallout title="..." description="..." />
 */
const EmergencyCallout = ({ title, description }) => (
  <section className="container-custom py-4">
    <div className="flex flex-col items-start gap-6 rounded-2xl bg-[var(--color-primary-900)] p-8 sm:flex-row sm:items-center sm:p-10">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-500)] text-2xl text-white">
        <PiSirenDuotone />
      </span>
      <div className="flex-1">
        <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{description}</p>
      </div>
      <Button href={COMPANY.phone.href} variant="primary" leftIcon={<HiPhone />} className="shrink-0">
        Call {COMPANY.phone.display}
      </Button>
    </div>
  </section>
);

export default EmergencyCallout;
