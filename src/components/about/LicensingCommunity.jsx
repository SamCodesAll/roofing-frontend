import { HiShieldCheck, HiIdentification, HiHeart } from 'react-icons/hi2';
import Badge from '@components/ui/Badge';
import { COMPANY } from '@data/company';

const LicensingCommunity = () => (
  <section className="section section-alt">
    <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="card p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-50)] text-2xl text-[var(--color-primary-600)]">
          <HiIdentification />
        </span>
        <h3 className="mt-4 font-heading font-bold text-lg text-[var(--color-text-primary)]">Licensing</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Fully licensed general contractor under Florida law. License number available on request and
          verifiable through the Florida DBPR.
        </p>
        <Badge variant="primary" className="mt-4">{COMPANY.license}</Badge>
      </div>

      <div className="card p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-success-50)] text-2xl text-[var(--color-success-600)]">
          <HiShieldCheck />
        </span>
        <h3 className="mt-4 font-heading font-bold text-lg text-[var(--color-text-primary)]">Insurance</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Comprehensive general liability and workers' compensation coverage protects your property and
          every member of our crew on site.
        </p>
        <Badge variant="trust" className="mt-4">{COMPANY.insured}</Badge>
      </div>

      <div className="card p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-50)] text-2xl text-[var(--color-accent-600)]">
          <HiHeart />
        </span>
        <h3 className="mt-4 font-heading font-bold text-lg text-[var(--color-text-primary)]">Community Involvement</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          We sponsor local youth sports teams and provide discounted emergency tarping for Marion County
          families after major storms.
        </p>
        <Badge variant="accent" className="mt-4">Locally Owned &amp; Operated</Badge>
      </div>
    </div>
  </section>
);

export default LicensingCommunity;
