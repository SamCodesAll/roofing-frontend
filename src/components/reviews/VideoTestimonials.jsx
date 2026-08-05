import { HiPlay } from 'react-icons/hi2';
import SectionHeading from '@components/ui/SectionHeading';
import video1 from '@assets/images/testimonials/testimonial-video-1.svg';
import video2 from '@assets/images/testimonials/testimonial-video-2.svg';
import video3 from '@assets/images/testimonials/testimonial-video-3.svg';

const PLACEHOLDER_THUMBS = [video1, video2, video3];

const VideoTestimonials = () => (
  <section className="section section-alt">
    <div className="container-custom">
      <SectionHeading eyebrow="Coming Soon" title="Video Testimonials" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {PLACEHOLDER_THUMBS.map((thumb, i) => (
          <div key={i} className="group relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <img src={thumb} alt="" loading="lazy" className="h-full w-full scale-105 object-cover opacity-50 blur-[1px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--color-primary-900)]/40">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-[var(--color-primary-600)]">
                <HiPlay />
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--color-primary-700)]">
                Coming Soon
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
        We're collecting video testimonials from recent customers — check back soon.
      </p>
    </div>
  </section>
);

export default VideoTestimonials;
