import { useMemo, useState } from 'react';
import heroGallery from '@assets/images/hero/hero-gallery.webp';
import ServiceHero from '@components/services/ServiceHero';
import SEO from '@components/shared/SEO';
import GalleryFilters from '@components/gallery/GalleryFilters';
import GalleryGrid from '@components/gallery/GalleryGrid';
import GalleryLightbox from '@components/gallery/GalleryLightbox';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';
import { GALLERY_PROJECTS } from '@data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [compareMode, setCompareMode] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return GALLERY_PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <SEO
        title="Project Gallery | Roofing, Patio & Electrical Photos"
        description="Browse real before-and-after photos of roof repairs, roof replacements, patio builds, and electrical projects completed across Marion County, FL."
        path="/gallery"
        keywords={['roofing project photos Ocala', 'before after roof replacement', 'patio construction photos Florida']}
      />
      <ServiceHero
        title="Project Gallery"
        subtitle="Browse recent roof repairs, replacements, patio builds, and electrical projects across Marion County — drag any before/after photo to see the difference."
        image={heroGallery}
      />

      <section className="section">
        <div className="container-custom">
          <GalleryFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            search={search}
            onSearchChange={setSearch}
            compareMode={compareMode}
            onCompareModeChange={setCompareMode}
          />

          <div className="mt-10">
            <GalleryGrid projects={filteredProjects} onSelect={setActiveProject} />
          </div>
        </div>
      </section>

      <GalleryLightbox
        project={activeProject}
        projects={filteredProjects}
        onClose={() => setActiveProject(null)}
        onNavigate={setActiveProject}
        compareMode={compareMode}
      />

      <ServiceQuoteCTA serviceName="Your Next" />
    </>
  );
};

export default Gallery;
