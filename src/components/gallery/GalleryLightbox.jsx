import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Modal from '@components/ui/Modal';
import BeforeAfterSlider from '@components/ui/BeforeAfterSlider';

/**
 * <GalleryLightbox project={activeProject} projects={allVisibleProjects}
 *   onClose={...} onNavigate={(project) => ...} compareMode={compareMode} />
 */
const GalleryLightbox = ({ project, projects, onClose, onNavigate, compareMode }) => {
  if (!project) return null;

  const index = projects.findIndex((p) => p.id === project.id);
  const goTo = (delta) => {
    const nextIndex = (index + delta + projects.length) % projects.length;
    onNavigate(projects[nextIndex]);
  };

  return (
    <Modal open={!!project} onClose={onClose} title={project.title} size="lg">
      <div className="relative">
        {compareMode ? (
          <BeforeAfterSlider before={project.before} after={project.after} alt={project.title} />
        ) : (
          <img
            src={project.after}
            alt={project.title}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        )}

        {projects.length > 1 && (
          <>
            <button
              onClick={() => goTo(-1)}
              aria-label="Previous project"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-primary-600)] shadow-md hover:bg-white"
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={() => goTo(1)}
              aria-label="Next project"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-primary-600)] shadow-md hover:bg-white"
            >
              <HiChevronRight />
            </button>
          </>
        )}
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
        {project.category} &middot; {project.location}
      </p>
    </Modal>
  );
};

export default GalleryLightbox;
