import { motion } from 'framer-motion';
import SectionHeading from '@components/ui/SectionHeading';
import { TEAM } from '@data/team';

const TeamGrid = () => (
  <section className="section">
    <div className="container-custom">
      <SectionHeading eyebrow="Meet the Team" title="The Crew Behind the Work" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="card-flush card-hover text-center"
          >
            <img src={member.image} alt={member.name} loading="lazy" className="aspect-square w-full object-cover" />
            <div className="p-5">
              <p className="font-heading font-bold text-[var(--color-text-primary)]">{member.name}</p>
              <p className="mt-0.5 text-sm font-semibold text-[var(--color-accent-600)]">{member.role}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamGrid;
