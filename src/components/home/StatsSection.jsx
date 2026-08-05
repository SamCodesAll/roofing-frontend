import Counter from '@components/ui/Counter';
import { COMPANY } from '@data/company';

const STATS = [
  { value: COMPANY.projectsCompleted, suffix: '+', label: 'Roofs Installed' },
  { value: 3800, suffix: '+', label: 'Repairs Completed' },
  { value: COMPANY.yearsExperience, suffix: '+', label: 'Years Experience' },
  { value: 5200, suffix: '+', label: 'Happy Customers' },
];

const StatsSection = () => (
  <section className="gradient-primary section">
    <div className="container-custom grid grid-cols-2 gap-8 lg:grid-cols-4">
      {STATS.map((stat) => (
        <Counter key={stat.label} variant="light" {...stat} />
      ))}
    </div>
  </section>
);

export default StatsSection;
