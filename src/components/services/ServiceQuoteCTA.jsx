import { HiPhone } from 'react-icons/hi2';
import Button from '@components/ui/Button';
import { COMPANY } from '@data/company';

/**
 * <ServiceQuoteCTA serviceName="Roof Repair" />
 */
const ServiceQuoteCTA = ({ serviceName }) => (
  <section className="gradient-primary section">
    <div className="container-custom text-center">
      <h2 className="heading-display text-white">Ready to Start Your {serviceName} Project?</h2>
      <p className="text-body-lg mx-auto mt-4 max-w-xl !text-white/75">
        Get a free, no-obligation estimate from a licensed local crew — most quotes turned around within 24 hours.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/contact" size="lg" variant="primary">
          Request Free Quote
        </Button>
        <Button href={COMPANY.phone.href} size="lg" variant="outlineInverse" leftIcon={<HiPhone />}>
          Call {COMPANY.phone.display}
        </Button>
      </div>
    </div>
  </section>
);

export default ServiceQuoteCTA;
