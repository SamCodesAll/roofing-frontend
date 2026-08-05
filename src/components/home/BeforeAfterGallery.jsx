import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from '@components/ui/SectionHeading';
import Button from '@components/ui/Button';
import BeforeAfterSlider from '@components/ui/BeforeAfterSlider';
import { GALLERY_PROJECTS } from '@data/gallery';

const BeforeAfterGallery = () => (
  <section className="section">
    <div className="container-custom">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Real Projects, Real Results"
          title="Drag to See the Difference"
          subtitle="A look at recent roof repairs, replacements, and patio builds across Marion County — before we arrived and after we finished."
          className="mx-0"
        />
        <Button to="/gallery" variant="outline" className="hidden shrink-0 sm:inline-flex">
          View Full Gallery
        </Button>
      </div>

      <div className="mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          noSwiping={true}
          noSwipingClass="swiper-no-swiping"
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {GALLERY_PROJECTS.map((project) => (
            <SwiperSlide key={project.id}>
              <BeforeAfterSlider before={project.before} after={project.after} alt={project.title} />
              <div className="mt-3">
                <p className="font-heading font-bold text-[var(--color-text-primary)]">{project.title}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {project.category} &middot; {project.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Button to="/gallery" variant="outline" className="mt-2 w-full sm:hidden">
        View Full Gallery
      </Button>
    </div>
  </section>
);

export default BeforeAfterGallery;
