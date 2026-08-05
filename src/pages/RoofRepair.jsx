import ServiceHero from '@components/services/ServiceHero';
import EmergencyBanner from '@components/shared/EmergencyBanner';
import ProblemsOrBenefitsGrid from '@components/services/ProblemsOrBenefitsGrid';
import ProcessSteps from '@components/services/ProcessSteps';
import EmergencyCallout from '@components/services/EmergencyCallout';
import ServiceGalleryTeaser from '@components/services/ServiceGalleryTeaser';
import ServiceReviews from '@components/services/ServiceReviews';
import ServiceFAQs from '@components/services/ServiceFAQs';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';
import SEO from '@components/shared/SEO';
import { SERVICE_DETAILS } from '@data/serviceDetails';

const data = SERVICE_DETAILS['roof-repair'];

const RoofRepair = () => (
  <>
    <SEO title={data.title} description={data.metaDescription} path="/roof-repair" keywords={data.keywords} />
    <ServiceHero title={data.title} subtitle={data.heroSubtitle} image={data.heroImage} />
    <EmergencyBanner />
    <ProblemsOrBenefitsGrid intro={data.intro} items={data.problemsOrBenefits} />
    <ProcessSteps title="Our Inspection & Repair Process" steps={data.process} />
    <EmergencyCallout title={data.emergency.title} description={data.emergency.description} />
    <ServiceGalleryTeaser category="Roof Repair" />
    <ServiceReviews />
    <ServiceFAQs items={data.faqs} />
    <ServiceQuoteCTA serviceName={data.title} />
  </>
);

export default RoofRepair;
