import roofRepairCard from '@assets/images/services/roof-repair-card.svg';
import roofReplacementCard from '@assets/images/services/roof-replacement-card.svg';
import patioConstructionCard from '@assets/images/services/patio-construction-card.svg';
import electricalServicesCard from '@assets/images/services/electrical-services-card.svg';

export const SERVICES = [
  {
    slug: 'roof-repair',
    iconKey: 'repair',
    title: 'Roof Repair',
    description: 'Fast, reliable leak and storm damage repair from licensed roofing professionals — most repairs completed same-day.',
    image: roofRepairCard,
    path: '/roof-repair',
  },
  {
    slug: 'roof-replacement',
    iconKey: 'replacement',
    title: 'Roof Replacement',
    description: 'Full tear-off and premium material installation — asphalt shingle or metal roofing systems built to last decades.',
    image: roofReplacementCard,
    path: '/roof-replacement',
  },
  {
    slug: 'patio-construction',
    iconKey: 'patio',
    title: 'Patio Construction',
    description: 'Custom covered patios and outdoor living spaces designed to extend your home and match your roofline.',
    image: patioConstructionCard,
    path: '/patio-construction',
  },
  {
    slug: 'electrical-services',
    iconKey: 'electrical',
    title: 'Electrical Services',
    description: 'Panel upgrades, lighting, and licensed safety inspections — from routine repairs to full residential rewiring.',
    image: electricalServicesCard,
    path: '/electrical-services',
  },
];
