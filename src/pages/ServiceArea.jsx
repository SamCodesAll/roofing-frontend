import { useParams, Navigate } from 'react-router-dom';
import ServiceHero from '@components/services/ServiceHero';
import SEO from '@components/shared/SEO';
import AreaIntro from '@components/serviceAreas/AreaIntro';
import NearbyProjects from '@components/serviceAreas/NearbyProjects';
import AreaTestimonials from '@components/serviceAreas/AreaTestimonials';
import ServiceFAQs from '@components/services/ServiceFAQs';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';
import { SERVICE_AREAS } from '@data/serviceAreas';
import { buildAreaFAQs } from '@data/serviceAreaFaqs';

const ServiceArea = () => {
  const { slug } = useParams();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }

  return (
    <>
      <SEO
        title={`Roofing, Patio & Electrical Services in ${area.name}, FL`}
        description={`Licensed roof repair, roof replacement, patio construction, and electrical services in ${area.name}, FL. Free estimates, 24/7 emergency roofing.`}
        path={`/service-areas/${area.slug}`}
        keywords={[`roofing ${area.name} FL`, `roof repair ${area.name}`, `roofer near ${area.name}`]}
      />
      <ServiceHero
        title={`${area.name}, ${area.state}`}
        subtitle={`Licensed roof repair, roof replacement, patio construction, and electrical services throughout ${area.name} and the surrounding area.`}
        image={area.heroImage}
      />
      <AreaIntro area={area} />
      <NearbyProjects cityName={area.name} state={area.state} />
      <AreaTestimonials cityName={area.name} state={area.state} />
      <ServiceFAQs items={buildAreaFAQs(area.name)} />
      <ServiceQuoteCTA serviceName={`${area.name} Roofing`} />
    </>
  );
};

export default ServiceArea;
