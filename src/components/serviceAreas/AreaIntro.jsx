import { HiMapPin } from 'react-icons/hi2';
import MapEmbed from './MapEmbed';

/**
 * <AreaIntro area={areaDataObject} />
 */
const AreaIntro = ({ area }) => (
  <section className="section">
    <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="heading-eyebrow">Serving {area.name}, {area.state}</span>
        <h2 className="heading-section mt-3">Local Roofing, Patio & Electrical Work in {area.name}</h2>
        <p className="text-body-lg mt-4">{area.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {area.landmarks.map((landmark) => (
            <span
              key={landmark}
              className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
            >
              <HiMapPin className="text-[var(--color-accent-500)]" />
              {landmark}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-[var(--color-text-muted)]">Proudly serving zip codes {area.zip}</p>
      </div>

      <MapEmbed lat={area.lat} lng={area.lng} label={`${area.name}, ${area.state}`} />
    </div>
  </section>
);

export default AreaIntro;
