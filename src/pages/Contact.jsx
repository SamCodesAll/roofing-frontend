import ServiceHero from '@components/services/ServiceHero';
import heroContact from '@assets/images/hero/hero-contact.svg';
import SEO from '@components/shared/SEO';
import QuoteForm from '@components/contact/QuoteForm';
import ContactInfoCard from '@components/contact/ContactInfoCard';
import BusinessHours from '@components/contact/BusinessHours';
import ContactMap from '@components/contact/ContactMap';
import SectionHeading from '@components/ui/SectionHeading';

const Contact = () => (
  <>
    <SEO
      title="Contact Us | Free Roofing Estimate"
      description="Request a free roofing, patio, or electrical estimate from Apex Roofing Co. Call, WhatsApp, or fill out our quote form — we respond fast, day or night."
      path="/contact"
    />
    <ServiceHero
      title="Contact Us"
      subtitle="Request a free estimate, ask a question, or reach us directly — we respond fast, day or night."
      image={heroContact}
    />

    <section className="section">
      <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Request a Free Estimate"
            title="Tell Us About Your Project"
            subtitle="Fill out the form below and we'll follow up using your preferred contact method — usually within one business day."
            className="mx-0 mb-8"
          />
          <QuoteForm />
        </div>

        <div className="space-y-6">
          <ContactInfoCard />
          <BusinessHours />
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container-custom">
        <SectionHeading eyebrow="Find Us" title="Our Office" />
        <div className="mt-8">
          <ContactMap />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
