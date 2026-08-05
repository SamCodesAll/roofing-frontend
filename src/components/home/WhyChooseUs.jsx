import { PiCertificateDuotone, PiShieldCheckDuotone, PiClockCountdownDuotone, PiStackDuotone, PiSealCheckDuotone, PiTagDuotone } from 'react-icons/pi';
import SectionHeading from '@components/ui/SectionHeading';
import FeatureCard from '@components/ui/FeatureCard';
import { WHY_CHOOSE_US } from '@data/whyChooseUs';

const ICONS = {
  license: PiCertificateDuotone,
  shield: PiShieldCheckDuotone,
  clock: PiClockCountdownDuotone,
  material: PiStackDuotone,
  warranty: PiSealCheckDuotone,
  pricing: PiTagDuotone,
};

const WhyChooseUs = () => (
  <section className="section">
    <div className="container-custom">
      <SectionHeading
        eyebrow="Why Homeowners Choose Us"
        title="Roofing Backed by Licensing, Insurance, and a Warranty"
        subtitle="Every job we take on is built around three things: safety, transparency, and materials that hold up in Florida weather."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_US.map((item) => {
          const Icon = ICONS[item.iconKey];
          return (
            <FeatureCard key={item.title} icon={<Icon />} title={item.title} description={item.description} />
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
