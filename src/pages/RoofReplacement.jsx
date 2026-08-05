import ServiceHero from '@components/services/ServiceHero';
import SEO from '@components/shared/SEO';
import ProblemsOrBenefitsGrid from '@components/services/ProblemsOrBenefitsGrid';
import ProcessSteps from '@components/services/ProcessSteps';
import ServiceGalleryTeaser from '@components/services/ServiceGalleryTeaser';
import ServiceReviews from '@components/services/ServiceReviews';
import ServiceFAQs from '@components/services/ServiceFAQs';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';
import { SERVICE_DETAILS } from '@data/serviceDetails';

const data = SERVICE_DETAILS['roof-replacement'];

const RoofReplacement = () => (
  <>
    <SEO title={data.title} description={data.metaDescription} path="/roof-replacement" keywords={data.keywords} />
    <ServiceHero title={data.title} subtitle={data.heroSubtitle} image={data.heroImage} />
    <ProblemsOrBenefitsGrid intro={data.intro} items={data.problemsOrBenefits} />
    <ProcessSteps title="Our Replacement Process" steps={data.process} />
    <ServiceGalleryTeaser category="Roof Replacement" />
    <ServiceReviews />
    <ServiceFAQs items={data.faqs} />
    <ServiceQuoteCTA serviceName={data.title} />
  </>
);

export default RoofReplacement;
