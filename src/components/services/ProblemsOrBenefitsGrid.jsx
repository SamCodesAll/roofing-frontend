import SectionHeading from '@components/ui/SectionHeading';
import FeatureCard from '@components/ui/FeatureCard';
import { SERVICE_ICONS } from './serviceIcons';

/**
 * <ProblemsOrBenefitsGrid intro={{eyebrow,title,description}} items={[{iconKey,title,description}]} />
 */
const ProblemsOrBenefitsGrid = ({ intro, items }) => (
  <section className="section">
    <div className="container-custom">
      <SectionHeading eyebrow={intro.eyebrow} title={intro.title} subtitle={intro.description} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = SERVICE_ICONS[item.iconKey];
          return <FeatureCard key={item.title} icon={<Icon />} title={item.title} description={item.description} />;
        })}
      </div>
    </div>
  </section>
);

export default ProblemsOrBenefitsGrid;
