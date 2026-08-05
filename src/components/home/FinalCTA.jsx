import { HiPhone } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';
import Button from '@components/ui/Button';
import { COMPANY } from '@data/company';

const FinalCTA = () => (
  <section className="gradient-primary section relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />
    <div className="container-custom relative text-center">
      <h2 className="heading-display text-white">Need Roofing Help Today?</h2>
      <p className="text-body-lg mx-auto mt-4 max-w-xl !text-white/75">
        Free estimates, honest pricing, and a crew that answers the phone — day or night.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/contact" size="lg" variant="primary">
          Request Quote
        </Button>
        <Button href={COMPANY.phone.href} size="lg" variant="outlineInverse" leftIcon={<HiPhone />}>
          Call Now
        </Button>
        <Button href={COMPANY.whatsapp.href} size="lg" variant="outlineInverse" leftIcon={<FaWhatsapp />}>
          WhatsApp
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTA;
