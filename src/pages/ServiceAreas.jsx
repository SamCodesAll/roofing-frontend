import ServiceHero from '@components/services/ServiceHero';
import heroServiceAreas from '@assets/images/hero/hero-service-areas.svg';
import SEO from '@components/shared/SEO';
import ServiceAreasSection from '@components/home/ServiceAreasSection';
import ServiceFAQs from '@components/services/ServiceFAQs';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';
import { buildAreaFAQs } from '@data/serviceAreaFaqs';

const ServiceAreas = () => (
  <>
    <SEO
      title="Service Areas | Roofing Coverage in Marion County, FL"
      description="Apex Roofing Co. serves Ocala, Reddick, Belleview, Citra, and The Villages with licensed roof repair, replacement, patio, and electrical services."
      path="/service-areas"
      keywords={['roofing service areas Marion County', 'Ocala roofing company', 'roofers near me Florida']}
    />
    <ServiceHero
      title="Service Areas"
      subtitle="Licensed roofing, patio construction, and electrical services across Marion County, Florida — find your city below."
      image={heroServiceAreas}
    />
    <ServiceAreasSection />
    <ServiceFAQs items={buildAreaFAQs('Marion County')} />
    <ServiceQuoteCTA serviceName="Local Roofing" />
  </>
);

export default ServiceAreas;
