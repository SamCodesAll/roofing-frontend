import { PiWrenchDuotone, PiHouseSimpleDuotone, PiUmbrellaDuotone, PiLightningDuotone } from 'react-icons/pi';
import SectionHeading from '@components/ui/SectionHeading';
import ServiceCard from '@components/ui/ServiceCard';
import { SERVICES } from '@data/services';

const ICONS = {
  repair: PiWrenchDuotone,
  replacement: PiHouseSimpleDuotone,
  patio: PiUmbrellaDuotone,
  electrical: PiLightningDuotone,
};

const FeaturedServices = () => (
  <section className="section section-alt">
    <div className="container-custom">
      <SectionHeading
        eyebrow="What We Do"
        title="Roofing, Outdoor Living & Electrical — One Trusted Crew"
        subtitle="From a single leak to a full replacement or a new covered patio, our licensed crews handle it start to finish."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.iconKey];
          return (
            <ServiceCard
              key={service.slug}
              icon={<Icon />}
              title={service.title}
              description={service.description}
              image={service.image}
              to={service.path}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedServices;
