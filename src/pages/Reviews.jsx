import ServiceHero from '@components/services/ServiceHero';
import heroReviews from '@assets/images/hero/hero-reviews.svg';
import SEO from '@components/shared/SEO';
import JsonLd from '@components/shared/JsonLd';
import RatingSummary from '@components/reviews/RatingSummary';
import VideoTestimonials from '@components/reviews/VideoTestimonials';
import ReviewCard from '@components/ui/ReviewCard';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';
import { REVIEWS } from '@data/reviews';
import { buildReviewSchema } from '@utils/schema';

const Reviews = () => (
  <>
    <SEO
      title="Customer Reviews | 4.6★ Rated Roofing Company"
      description="Read verified customer reviews of Apex Roofing Co. — 4.6 stars from homeowners across Ocala, Belleview, Citra, Reddick, and The Villages, FL."
      path="/reviews"
    />
    <JsonLd data={buildReviewSchema(REVIEWS)} />
    <ServiceHero
      title="Customer Reviews"
      subtitle="Real feedback from homeowners across Marion County — every review is from a verified customer."
      image={heroReviews}
    />

    <section className="section">
      <div className="container-custom">
        <RatingSummary />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>

    <VideoTestimonials />

    <ServiceQuoteCTA serviceName="Your" />
  </>
);

export default Reviews;
