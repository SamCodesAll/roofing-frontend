import { useEffect, useRef } from 'react';
import GalleryCard from '@components/ui/GalleryCard';
import { getGsapScrollTrigger, prefersReducedMotion } from '@animations/gsapSetup';

const HEIGHTS = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-80'];

/**
 * <GalleryGrid projects={filteredProjects} onSelect={(project) => ...} />
 */
const GalleryGrid = ({ projects, onSelect }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || projects.length === 0 || prefersReducedMotion()) return undefined;

    const { gsap, ScrollTrigger } = getGsapScrollTrigger();
    const items = grid.querySelectorAll('.gallery-item');

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 24 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
        },
      });
    }, grid);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.trigger === grid && t.kill());
    };
    // Re-run whenever the filtered project list changes (category/search/etc.)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--color-border-strong)] py-16 text-center">
        <p className="font-heading font-semibold text-[var(--color-text-primary)]">No projects match your search</p>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Try a different category or search term.</p>
      </div>
    );
  }

  return (
    <div ref={gridRef} className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      {projects.map((project, i) => (
        <div key={project.id} className="gallery-item mb-4 break-inside-avoid">
          <GalleryCard
            image={project.after}
            title={project.title}
            category={project.location}
            className={HEIGHTS[i % HEIGHTS.length]}
            onClick={() => onSelect(project)}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
