import { HiClock } from 'react-icons/hi2';
import { PiSirenDuotone } from 'react-icons/pi';
import { COMPANY } from '@data/company';

const BusinessHours = () => (
  <div className="card p-6">
    <div className="flex items-center gap-2.5">
      <HiClock className="text-xl text-[var(--color-primary-600)]" />
      <h3 className="font-heading font-bold text-[var(--color-text-primary)]">Business Hours</h3>
    </div>
    <ul className="mt-4 space-y-2 text-sm">
      {COMPANY.hours.map((h) => (
        <li key={h.days} className="flex items-center justify-between text-[var(--color-text-secondary)]">
          <span>{h.days}</span>
          <span className="font-medium text-[var(--color-text-primary)]">{h.time}</span>
        </li>
      ))}
    </ul>

    <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[var(--color-accent-50)] p-3.5">
      <PiSirenDuotone className="mt-0.5 shrink-0 text-lg text-[var(--color-accent-600)]" />
      <p className="text-xs leading-relaxed text-[var(--color-accent-700)]">
        Storm damage or an active leak? We offer 24/7 emergency response, even outside listed hours.
      </p>
    </div>
  </div>
);

export default BusinessHours;
