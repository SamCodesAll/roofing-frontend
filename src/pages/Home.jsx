import Hero from '@components/home/Hero';
import SEO from '@components/shared/SEO';
import EmergencyBanner from '@components/shared/EmergencyBanner';
import WhyChooseUs from '@components/home/WhyChooseUs';
import FeaturedServices from '@components/home/FeaturedServices';
import BeforeAfterGallery from '@components/home/BeforeAfterGallery';
import ServiceAreasSection from '@components/home/ServiceAreasSection';
import GoogleReviewsSection from '@components/home/GoogleReviewsSection';
import StatsSection from '@components/home/StatsSection';
import WarrantyFinancing from '@components/home/WarrantyFinancing';
import FinalCTA from '@components/home/FinalCTA';

const Home = () => {
  return (
    <>
      <SEO
        title="Sam Codes | Licensed Roofing & Home Services in Ocala, FL"
        description="Sam Codes provides licensed, insured roof repair, roof replacement, patio construction, and electrical services across Ocala, Reddick, Belleview, Citra & The Villages. 24/7 emergency service, free estimates."
        path="/"
        keywords={['roofing Ocala FL', 'roof repair Ocala', 'roof replacement Marion County', 'emergency roofing Florida']}
      />
      <Hero />
      <EmergencyBanner />
      <WhyChooseUs />
      <FeaturedServices />
      <BeforeAfterGallery />
      <ServiceAreasSection />
      <GoogleReviewsSection />
      <StatsSection />
      <WarrantyFinancing />
      <FinalCTA />
    </>
  );
};

export default Home;
