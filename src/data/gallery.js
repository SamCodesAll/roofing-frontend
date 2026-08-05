import roofRepairBefore from '@assets/images/gallery/roof-repair-before.svg';
import roofRepairAfter from '@assets/images/gallery/roof-repair-after.svg';
import roofReplacementBefore from '@assets/images/gallery/roof-replacement-before.svg';
import roofReplacementAfter from '@assets/images/gallery/roof-replacement-after.svg';
import patioConstructionBefore from '@assets/images/gallery/patio-construction-before.svg';
import patioConstructionAfter from '@assets/images/gallery/patio-construction-after.svg';
import electricalServicesBefore from '@assets/images/gallery/electrical-services-before.svg';
import electricalServicesAfter from '@assets/images/gallery/electrical-services-after.svg';

export const GALLERY_PROJECTS = [
  {
    id: 'ocala-metal-roof',
    title: 'Metal Roof Replacement',
    category: 'Roof Replacement',
    location: 'Ocala, FL',
    before: roofReplacementBefore,
    after: roofReplacementAfter,
  },
  {
    id: 'the-villages-shingle-roof',
    title: 'Asphalt Shingle Replacement',
    category: 'Roof Replacement',
    location: 'The Villages, FL',
    before: roofReplacementBefore,
    after: roofReplacementAfter,
  },
  {
    id: 'belleview-storm-repair',
    title: 'Storm Damage Repair',
    category: 'Roof Repair',
    location: 'Belleview, FL',
    before: roofRepairBefore,
    after: roofRepairAfter,
  },
  {
    id: 'reddick-leak-repair',
    title: 'Roof Leak Repair',
    category: 'Roof Repair',
    location: 'Reddick, FL',
    before: roofRepairBefore,
    after: roofRepairAfter,
  },
  {
    id: 'citra-patio-cover',
    title: 'Custom Covered Patio',
    category: 'Patio Construction',
    location: 'Citra, FL',
    before: patioConstructionBefore,
    after: patioConstructionAfter,
  },
  {
    id: 'ocala-outdoor-living',
    title: 'Outdoor Living Space',
    category: 'Patio Construction',
    location: 'Ocala, FL',
    before: patioConstructionBefore,
    after: patioConstructionAfter,
  },
  {
    id: 'ocala-panel-upgrade',
    title: 'Electrical Panel Upgrade',
    category: 'Electrical Services',
    location: 'Ocala, FL',
    before: electricalServicesBefore,
    after: electricalServicesAfter,
  },
  {
    id: 'belleview-lighting',
    title: 'Outdoor Lighting Install',
    category: 'Electrical Services',
    location: 'Belleview, FL',
    before: electricalServicesBefore,
    after: electricalServicesAfter,
  },
];
