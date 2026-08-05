import { useState } from 'react';
import SectionHeading from '@components/ui/SectionHeading';
import Button from '@components/ui/Button';
import GalleryCard from '@components/ui/GalleryCard';
import Modal from '@components/ui/Modal';
import BeforeAfterSlider from '@components/ui/BeforeAfterSlider';
import { GALLERY_PROJECTS } from '@data/gallery';

/**
 * <NearbyProjects cityName="Ocala" state="FL" />
 */
const NearbyProjects = ({ cityName, state }) => {
  const [active, setActive] = useState(null);
  const location = `${cityName}, ${state}`;
  const projects = GALLERY_PROJECTS.filter((p) => p.location === location);

  if (projects.length === 0) return null;

  return (
    <section className="section section-alt">
      <div className="container-custom">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Nearby Projects"
            title={`Recent Work in ${cityName}`}
            className="mx-0"
          />
          <Button to="/gallery" variant="outline" className="shrink-0">
            View Full Gallery
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {projects.map((project) => (
            <GalleryCard
              key={project.id}
              className="aspect-square"
              image={project.after}
              title={project.title}
              category={project.category}
              onClick={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title} size="lg">
        {active && <BeforeAfterSlider before={active.before} after={active.after} alt={active.title} />}
      </Modal>
    </section>
  );
};

export default NearbyProjects;
