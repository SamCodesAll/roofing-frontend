export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    isMegaMenu: true,
    children: [
      { label: 'Roof Repair', path: '/roof-repair', description: 'Leak repair, storm damage & emergency fixes' },
      { label: 'Roof Replacement', path: '/roof-replacement', description: 'Full tear-off, shingles & metal roofing' },
      { label: 'Commercial Roofing', path: '/commercial-roofing', description: 'Large-scale commercial roofing projects' },
      { label: 'Roof Inspection', path: '/roof-inspection', description: 'Comprehensive roof assessments & evaluations' },
    ],
  },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PRIMARY_CTA = { label: 'Request Free Quote', path: '/contact' };

// Routes whose page bleeds a full hero image under the fixed transparent navbar.
// Every other route gets a solid navbar immediately, since it has no dark
// hero background behind it yet. Extend this list as more pages get a hero
// banner in later modules.
export const HERO_ROUTES = [
  '/',
  '/roof-repair',
  '/roof-replacement',
  '/commercial-roofing',
  '/roof-inspection',
  '/service-areas',
  '/gallery',
  '/reviews',
  '/about',
  '/contact',
];

// /service-areas/:slug is dynamic, so it's matched by pattern rather than
// listed literally in HERO_ROUTES.
export const isHeroRoute = (pathname) =>
  HERO_ROUTES.includes(pathname) || /^\/service-areas\/[^/]+$/.test(pathname);
