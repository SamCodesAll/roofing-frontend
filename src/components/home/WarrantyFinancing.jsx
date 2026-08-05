import { PiClipboardTextDuotone, PiCertificateDuotone, PiHandshakeDuotone, PiCreditCardDuotone } from 'react-icons/pi';
import SectionHeading from '@components/ui/SectionHeading';

const ITEMS = [
  { icon: PiClipboardTextDuotone, title: 'Free Estimates', description: 'No-obligation inspections and itemized quotes on every project.' },
  { icon: PiCertificateDuotone, title: 'Manufacturer Warranty', description: 'GAF and Owens Corning backed material warranties up to 50 years.' },
  { icon: PiHandshakeDuotone, title: 'Workmanship Guarantee', description: 'We stand behind our installation labor, not just the materials.' },
  { icon: PiCreditCardDuotone, title: 'Financing Available', description: 'Flexible monthly payment plans to fit your budget — ask your estimator.' },
];

const WarrantyFinancing = () => (
  <section className="section section-alt">
    <div className="container-custom">
      <SectionHeading
        eyebrow="Protected From Day One"
        title="Warranty & Financing Built Around Peace of Mind"
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[var(--color-primary-600)] shadow-[var(--shadow-soft)]">
              <Icon />
            </span>
            <h3 className="mt-4 font-heading font-bold text-[var(--color-text-primary)]">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WarrantyFinancing;
