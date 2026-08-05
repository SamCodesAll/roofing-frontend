import SectionHeading from '@components/ui/SectionHeading';
import FAQAccordion from '@components/ui/FAQAccordion';
import JsonLd from '@components/shared/JsonLd';
import { buildFAQSchema } from '@utils/schema';

/**
 * <ServiceFAQs items={[{question, answer}]} />
 */
const ServiceFAQs = ({ items }) => (
  <section className="section">
    <JsonLd data={buildFAQSchema(items)} />
    <div className="container-custom">
      <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
      <div className="mx-auto mt-10 max-w-3xl">
        <FAQAccordion items={items} />
      </div>
    </div>
  </section>
);

export default ServiceFAQs;
