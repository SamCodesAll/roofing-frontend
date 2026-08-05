import { FaGoogle, FaStar } from 'react-icons/fa6';
import SectionHeading from '@components/ui/SectionHeading';
import ReviewCard from '@components/ui/ReviewCard';
import Button from '@components/ui/Button';
import { REVIEWS } from '@data/reviews';
import { COMPANY } from '@data/company';

const ServiceReviews = () => {
  const featured = REVIEWS.slice(0, 3);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading eyebrow="Trusted by Local Homeowners" title="What Customers Are Saying" />

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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button to="/reviews" variant="outline">
            Read All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceReviews;
