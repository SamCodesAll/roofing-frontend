import heroRoofRepair from '@assets/images/hero/hero-roof-repair.svg';
import heroRoofReplacement from '@assets/images/hero/hero-roof-replacement.svg';
import heroPatio from '@assets/images/hero/hero-patio.svg';
import heroElectrical from '@assets/images/hero/hero-electrical.svg';

export const SERVICE_DETAILS = {
  'roof-repair': {
    title: 'Roof Repair',
    heroSubtitle: 'Fast, honest roof leak and storm damage repair from a licensed local crew — most repairs completed the same day you call.',
    heroImage: heroRoofRepair,
    keywords: ['Roof Leak Repair', 'Storm Damage Repair', 'Emergency Roofing', 'Roof Inspection'],
    metaDescription: "Licensed roof leak repair and storm damage repair in Ocala, FL and Marion County. 24/7 emergency roofing, free inspections, same-day service.",
    intro: {
      eyebrow: 'Common Roofing Problems',
      title: 'We Fix the Issues That Actually Cause Damage',
      description: 'Small roofing problems become expensive fast. Our crews are trained to find and fix the root cause, not just patch the surface.',
    },
    problemsOrBenefits: [
      { iconKey: 'leak', title: 'Active Leaks', description: 'Water stains, drips, or damp insulation — we trace leaks to their source, not just the visible drip point.' },
      { iconKey: 'storm', title: 'Storm & Wind Damage', description: 'Missing shingles, lifted flashing, and impact damage from Florida storm season.' },
      { iconKey: 'shingle', title: 'Damaged Shingles', description: 'Curling, cracking, or granule loss that signals your roof is failing early.' },
      { iconKey: 'flashing', title: 'Flashing & Vent Failures', description: 'Deteriorated flashing around chimneys, skylights, and vents is a top cause of hidden leaks.' },
      { iconKey: 'sag', title: 'Sagging Roof Deck', description: 'Soft or sagging spots can indicate structural rot that needs prompt attention.' },
      { iconKey: 'ice', title: 'Ventilation Issues', description: 'Poor attic ventilation accelerates shingle wear and drives up cooling costs.' },
    ],
    process: [
      { title: 'Call or Request Online', description: 'Reach us 24/7 by phone or submit a quote request — most calls get a same-day response.' },
      { title: 'Free Roof Inspection', description: 'A licensed technician inspects the full roof system, not just the reported problem area.' },
      { title: 'Written, Itemized Estimate', description: 'You get a clear price before any work starts — no surprise charges after the job.' },
      { title: 'Repair Completed', description: 'Most repairs are completed same-day with a full site cleanup when finished.' },
      { title: 'Final Walkthrough', description: 'We walk the repair with you and answer any questions before we consider the job done.' },
    ],
    emergency: {
      title: 'Emergency Repairs, Any Time',
      description: 'Active leak after a storm? We offer 24/7 emergency tarping and stabilization to protect your home until a full repair can be scheduled.',
    },
    faqs: [
      { question: 'How fast can you respond to an emergency roof leak?', answer: 'For active leaks we aim to have a crew out the same day, and we offer 24/7 emergency tarping for storm damage to prevent further water intrusion.' },
      { question: 'Is the roof inspection really free?', answer: 'Yes. Every inspection and estimate is free with no obligation to move forward with the repair.' },
      { question: 'Will my homeowners insurance cover the repair?', answer: 'Many storm-related repairs are covered. We can document the damage with photos and a detailed report to support your claim.' },
      { question: 'How long does a typical roof repair take?', answer: 'Most localized repairs — leaks, flashing, damaged shingles — are completed within a single day.' },
    ],
  },

  'roof-replacement': {
    title: 'Roof Replacement',
    heroSubtitle: 'Full tear-off and premium material installation — asphalt shingle or metal roofing systems built to protect your home for decades.',
    heroImage: heroRoofReplacement,
    keywords: ['Roof Replacement', 'New Roofing Systems', 'Asphalt Shingles', 'Metal Roofing', 'Roof Installation'],
    metaDescription: "Full roof replacement in Ocala, FL — asphalt shingle and metal roofing systems installed by a GAF and Owens Corning certified crew. Free estimates.",
    intro: {
      eyebrow: 'Roofing Systems We Install',
      title: 'Manufacturer-Certified Roofing, Built to Last',
      description: 'We install GAF and Owens Corning certified systems, matched to your home, budget, and Florida’s climate.',
    },
    problemsOrBenefits: [
      { iconKey: 'shingle', title: 'Architectural Asphalt Shingles', description: 'The most popular choice — durable, wind-rated, and available in a wide range of colors.' },
      { iconKey: 'metal', title: 'Standing Seam Metal Roofing', description: 'Superior wind and impact resistance with a 50+ year lifespan, ideal for Florida weather.' },
      { iconKey: 'material', title: 'Manufacturer Warranties', description: 'GAF and Owens Corning preferred contractor status means stronger warranty coverage for you.' },
      { iconKey: 'tearoff', title: 'Full Tear-Off & Deck Repair', description: 'We remove old roofing completely and repair any damaged decking before installing new materials.' },
      { iconKey: 'ventilation', title: 'Improved Attic Ventilation', description: 'Proper ridge and soffit ventilation extends roof life and lowers energy bills.' },
      { iconKey: 'warranty', title: 'Workmanship Guarantee', description: 'Installation labor is backed by our workmanship warranty, on top of material coverage.' },
    ],
    process: [
      { title: 'Free In-Home Consultation', description: 'We assess your current roof, discuss material options, and provide transparent pricing.' },
      { title: 'Material Selection', description: 'Choose from asphalt shingle or metal roofing systems in a range of colors and profiles.' },
      { title: 'Permitting Handled For You', description: 'We pull all required permits and coordinate any HOA approvals on your behalf.' },
      { title: 'Full Tear-Off & Installation', description: 'Complete removal of old roofing, deck inspection/repair, and new system installation.' },
      { title: 'Final Inspection & Warranty Registration', description: 'We register your manufacturer warranty and walk the finished roof with you.' },
    ],
    faqs: [
      { question: 'How long does a full roof replacement take?', answer: 'Most residential replacements are completed in 1–3 days depending on roof size and material.' },
      { question: 'Asphalt shingles or metal roofing — which is better?', answer: 'Asphalt shingles offer the best value and widest style range; metal roofing offers longer lifespan and stronger wind resistance. We help you weigh cost against longevity for your specific home.' },
      { question: 'Do you handle permits and HOA approval?', answer: 'Yes, we handle all permitting and can provide documentation needed for HOA approval.' },
      { question: 'What warranty comes with a new roof?', answer: 'You get both a manufacturer material warranty (up to 50 years depending on system) and our workmanship guarantee on installation.' },
    ],
  },

  'patio-construction': {
    title: 'Patio Construction',
    heroSubtitle: 'Custom covered patios and outdoor living spaces designed to extend your home and match your roofline.',
    heroImage: heroPatio,
    keywords: ['Covered Patios', 'Outdoor Living Spaces', 'Custom Patio Design'],
    metaDescription: "Custom covered patios and outdoor living spaces built to match your home in Ocala, FL and Marion County. Free design consultation.",
    intro: {
      eyebrow: 'Outdoor Living, Built Right',
      title: 'Covered Patios Designed Around Your Home',
      description: 'From simple covered patios to full outdoor living spaces, we design and build structures that match your home’s roofline and materials.',
    },
    problemsOrBenefits: [
      { iconKey: 'patio', title: 'Covered Patios', description: 'Shade and weather protection with a roofline that matches your existing home.' },
      { iconKey: 'living', title: 'Outdoor Living Spaces', description: 'Full outdoor kitchens, seating areas, and entertaining spaces designed for Florida living.' },
      { iconKey: 'design', title: 'Custom Design', description: 'Every patio is designed around your yard, home style, and how you actually use the space.' },
      { iconKey: 'material', title: 'Matched Materials', description: 'Roofing, trim, and paint matched to your home for a seamless, built-in look.' },
      { iconKey: 'permit', title: 'Permitting Included', description: 'We handle permitting and inspections so your addition is fully code-compliant.' },
      { iconKey: 'warranty', title: 'Workmanship Warranty', description: 'Construction backed by the same workmanship guarantee as our roofing projects.' },
    ],
    process: [
      { title: 'Free Design Consultation', description: 'We visit your property to discuss layout, size, and how you plan to use the space.' },
      { title: 'Custom Design & Quote', description: 'A detailed design and itemized quote matched to your home’s style and your budget.' },
      { title: 'Permitting', description: 'We pull all required permits before construction begins.' },
      { title: 'Construction', description: 'Our crew builds your patio with minimal disruption to your yard and daily routine.' },
      { title: 'Final Walkthrough', description: 'We review the finished space with you and address any final details.' },
    ],
    faqs: [
      { question: 'Can you match a new patio to my existing roof?', answer: 'Yes, matching roofing materials, color, and trim to your existing home is standard on every patio project.' },
      { question: 'Do I need a permit for a covered patio?', answer: 'In most cases yes, and we handle the permitting process for you as part of the project.' },
      { question: 'How long does patio construction take?', answer: 'Most covered patios are completed within 1–2 weeks depending on size and design complexity.' },
      { question: 'Can you add electrical or lighting to the patio?', answer: 'Yes — our licensed electricians can wire outlets, fans, and lighting as part of the same project.' },
    ],
  },

  'electrical-services': {
    title: 'Electrical Services',
    heroSubtitle: 'Panel upgrades, lighting, and licensed safety inspections — from routine repairs to full residential rewiring.',
    heroImage: heroElectrical,
    keywords: ['Residential Electrical Repairs', 'Panel Upgrades', 'Lighting', 'Safety Inspections'],
    metaDescription: "Licensed residential electrical repairs, panel upgrades, lighting, and safety inspections in Ocala, FL. Same trusted crew as our roofing work.",
    intro: {
      eyebrow: 'Licensed Electrical Work',
      title: 'Electrical Services Backed by the Same Trusted Crew',
      description: 'Our licensed electricians handle everything from a flickering light to a full panel upgrade, with the same transparent pricing as our roofing work.',
    },
    problemsOrBenefits: [
      { iconKey: 'panel', title: 'Panel Upgrades', description: 'Replace outdated or undersized panels to safely support modern electrical demand.' },
      { iconKey: 'repair', title: 'Residential Repairs', description: 'Flickering lights, tripped breakers, dead outlets — diagnosed and fixed correctly.' },
      { iconKey: 'lighting', title: 'Lighting Installation', description: 'Indoor and outdoor lighting design and installation, including energy-efficient upgrades.' },
      { iconKey: 'inspection', title: 'Safety Inspections', description: 'Full-home electrical safety inspections, especially useful before buying or selling.' },
      { iconKey: 'wiring', title: 'Rewiring', description: 'Partial or whole-home rewiring for older homes or major renovations.' },
      { iconKey: 'warranty', title: 'Licensed & Insured', description: 'Every electrician is licensed, insured, and held to the same standards as our roofing crews.' },
    ],
    process: [
      { title: 'Describe the Issue', description: 'Call or request a quote online and tell us what you’re experiencing.' },
      { title: 'Diagnostic Visit', description: 'A licensed electrician diagnoses the issue and explains what’s needed in plain language.' },
      { title: 'Upfront Pricing', description: 'You approve a clear price before any work begins.' },
      { title: 'Work Completed', description: 'Most repairs and small installs are completed in a single visit.' },
      { title: 'Safety Check', description: 'We test the completed work and confirm everything is up to code.' },
    ],
    faqs: [
      { question: 'Are your electricians licensed?', answer: 'Yes, every electrician on our team is licensed and insured under Florida electrical contracting requirements.' },
      { question: 'Do you offer emergency electrical repairs?', answer: 'Yes, for urgent safety issues like exposed wiring or a tripped main breaker we offer expedited scheduling.' },
      { question: 'How do I know if I need a panel upgrade?', answer: 'Frequent tripped breakers, a panel over 20 years old, or adding major appliances are common signs. A safety inspection can confirm.' },
      { question: 'Can you combine electrical work with a roofing or patio project?', answer: 'Yes, we regularly coordinate electrical work with patio construction and roofing projects under one schedule.' },
    ],
  },
};
