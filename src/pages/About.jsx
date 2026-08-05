import ServiceHero from '@components/services/ServiceHero';
import heroAbout from '@assets/images/hero/hero-about.svg';
import SEO from '@components/shared/SEO';
import CompanyStory from '@components/about/CompanyStory';
import MissionValues from '@components/about/MissionValues';
import TeamGrid from '@components/about/TeamGrid';
import LicensingCommunity from '@components/about/LicensingCommunity';
import WhyChooseUs from '@components/home/WhyChooseUs';
import ServiceQuoteCTA from '@components/services/ServiceQuoteCTA';

const About = () => (
  <>
    <SEO
      title="About Us | Licensed Roofing Company in Ocala, FL"
      description="Apex Roofing Co. is a licensed, locally owned roofing, patio, and electrical company serving Marion County families since 2011. Meet our team."
      path="/about"
    />
    <ServiceHero
      title="About Apex Roofing Co."
      subtitle="A licensed, locally owned roofing, patio, and electrical company serving Marion County families since 2011."
      image={heroAbout}
    />
    <CompanyStory />
    <MissionValues />
    <TeamGrid />
    <LicensingCommunity />
    <WhyChooseUs />
    <ServiceQuoteCTA serviceName="Your" />
  </>
);

export default About;
