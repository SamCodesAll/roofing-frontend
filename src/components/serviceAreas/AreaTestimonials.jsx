import SectionHeading from '@components/ui/SectionHeading';
import ReviewCard from '@components/ui/ReviewCard';
import Button from '@components/ui/Button';
import { REVIEWS } from '@data/reviews';

/**
 * <AreaTestimonials cityName="Ocala" state="FL" />
 */
const AreaTestimonials = ({ cityName, state }) => {
  const location = `${cityName}, ${state}`;
  const localReviews = REVIEWS.filter((r) => r.location === location);
  const featured = (localReviews.length > 0 ? localReviews : REVIEWS).slice(0, 3);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Local Testimonials"
          title={`What ${cityName} Homeowners Are Saying`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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

export default AreaTestimonials;
