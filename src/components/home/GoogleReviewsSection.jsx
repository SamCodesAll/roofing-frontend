import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaGoogle, FaStar } from 'react-icons/fa6';
import SectionHeading from '@components/ui/SectionHeading';
import ReviewCard from '@components/ui/ReviewCard';
import Button from '@components/ui/Button';
import { REVIEWS } from '@data/reviews';
import { COMPANY } from '@data/company';

const GoogleReviewsSection = () => (
  <section className="section">
    <div className="container-custom">
      <SectionHeading eyebrow="Trusted by Local Homeowners" title="What Our Customers Are Saying" />

      <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 shadow-[var(--shadow-soft)]">
        <FaGoogle className="text-lg text-[var(--color-text-secondary)]" />
        <span className="font-heading font-bold text-[var(--color-text-primary)]">{COMPANY.rating}</span>
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(COMPANY.rating) ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-border)]'}
            />
          ))}
        </span>
        <span className="text-sm text-[var(--color-text-secondary)]">({COMPANY.reviewCount} reviews)</span>
      </div>

      <div className="mt-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
          className="!pb-12"
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.name} className="h-auto">
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center">
        <Button to="/reviews" variant="outline">
          Read All Reviews
        </Button>
      </div>
    </div>
  </section>
);

export default GoogleReviewsSection;
