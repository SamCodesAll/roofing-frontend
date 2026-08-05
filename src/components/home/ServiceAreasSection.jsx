import { HiArrowRight, HiMapPin } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import SectionHeading from '@components/ui/SectionHeading';
import { SERVICE_AREAS } from '@data/serviceAreas';

const ServiceAreasSection = () => (
  <section className="section section-alt">
    <div className="container-custom">
      <SectionHeading
        eyebrow="Where We Work"
        title="Proudly Serving Marion County & Beyond"
        subtitle="Local crews who know Florida roofing codes, weather patterns, and permitting inside and out."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICE_AREAS.map((area, i) => (
          <Link
            key={area.slug}
            to={`/service-areas/${area.slug}`}
            className="card card-hover group relative overflow-hidden p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-50)] text-xl text-[var(--color-primary-600)]">
              <HiMapPin />
            </span>
            <h3 className="mt-4 font-heading font-bold text-[var(--color-text-primary)]">
              {area.name}, {area.state}
            </h3>
            <span className="mt-1 flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-600)]">
              View Local Projects
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute -bottom-4 -right-4 text-6xl font-heading font-extrabold text-[var(--color-primary-50)] group-hover:text-[var(--color-primary-100)] transition-colors">
              0{i + 1}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;
