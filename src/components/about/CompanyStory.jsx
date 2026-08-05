import { motion } from 'framer-motion';
import { COMPANY } from '@data/company';
import companyStoryImage from '@assets/images/about/company-story.svg';

const CompanyStory = () => (
  <section className="section">
    <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="heading-eyebrow">Our Story</span>
        <h2 className="heading-section mt-3">Built in Ocala, Built to Last</h2>
        <p className="text-body-lg mt-4">
          {COMPANY.name} started with a single crew and a simple idea: roofing companies should
          tell homeowners the truth about their roof, not just the price. Over {COMPANY.yearsExperience}+
          years, that idea grew into a full-service roofing, patio, and electrical company serving
          Marion County — but the promise hasn't changed.
        </p>
        <p className="text-body-lg mt-4">
          Today our licensed crews have completed {COMPANY.projectsCompleted.toLocaleString()}+ projects,
          from emergency storm repairs to full custom outdoor living builds, while keeping the same
          transparent pricing and workmanship guarantee we started with.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl"
      >
        <img
          src={companyStoryImage}
          alt="Apex Roofing Co. crew on a job site"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default CompanyStory;
