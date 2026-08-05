import { PiWrenchDuotone, PiHouseSimpleDuotone, PiBuildingsDuotone, PiMagnifyingGlassDuotone, } from 'react-icons/pi';
import SectionHeading from '@components/ui/SectionHeading';
import ServiceCard from '@components/ui/ServiceCard';
import { SERVICES } from '@data/services';

const ICONS = {
  repair: PiWrenchDuotone,
  replacement: PiHouseSimpleDuotone,
  commercial: PiBuildingsDuotone,
  inspection: PiMagnifyingGlassDuotone,
};

const FeaturedServices = () => (
  <section className="section section-alt">
    <div className="container-custom">
      <SectionHeading
        eyebrow="What We Do"
        title="Complete Roofing Solutions"
        subtitle="From emergency roof repairs and inspections to commercial roofing and full roof replacements, our experienced team delivers dependable roofing solutions built to last."
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
