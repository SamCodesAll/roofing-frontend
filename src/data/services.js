import roofRepairCard from '@assets/images/services/roof-repair-card.svg';
import roofReplacementCard from '@assets/images/services/roof-replacement-card.svg';
import commercialRoofingCard from '@assets/images/services/commercial-roofing-card.svg';
import roofInspectionCard from '@assets/images/services/roof-inspection-card.svg';

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
    slug: 'commercial-roofing',
    iconKey: 'commercial',
    title: 'Commercial Roofing',
    description: 'Specialized solutions for commercial properties, including flat roofs and complex structures.',
    image: commercialRoofingCard,
    path: '/commercial-roofing',
  },
  {
    slug: 'roof-inspection',
    iconKey: 'inspection',
    title: 'Roof Inspection',
    description: 'Comprehensive roof assessments to identify potential issues and ensure your roof is in optimal condition.',
    image: roofInspectionCard,
    path: '/roof-inspection',
  },
];
