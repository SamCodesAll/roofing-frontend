import { PiHandHeartDuotone, PiHammerDuotone, PiShieldCheckDuotone, PiUsersThreeDuotone } from 'react-icons/pi';
import SectionHeading from '@components/ui/SectionHeading';
import FeatureCard from '@components/ui/FeatureCard';
import { VALUES } from '@data/values';

const ICONS = {
  integrity: PiHandHeartDuotone,
  craftsmanship: PiHammerDuotone,
  safety: PiShieldCheckDuotone,
  community: PiUsersThreeDuotone,
};

const MissionValues = () => (
  <section className="section section-alt">
    <div className="container-custom">
      <SectionHeading
        eyebrow="Our Mission"
        title="Roofing Built on Trust, Not Just Transactions"
        subtitle="We measure success by roofs that don't need a callback, not by how fast we can move to the next job."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value) => {
          const Icon = ICONS[value.iconKey];
          return <FeatureCard key={value.title} icon={<Icon />} title={value.title} description={value.description} />;
        })}
      </div>
    </div>
  </section>
);

export default MissionValues;
