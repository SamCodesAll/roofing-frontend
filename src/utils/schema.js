import { COMPANY } from '@data/company';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@constants/seo';

/**
 * LocalBusiness schema, rendered once sitewide via Layout.
 * Covers licensing, hours, address, aggregate rating, and social profiles.
 */
export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: COMPANY.name,
  image: DEFAULT_OG_IMAGE,
  telephone: COMPANY.phone.display,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: COMPANY.address.lat,
    longitude: COMPANY.address.lng,
  },
  url: SITE_URL,
  priceRange: '$$',
  openingHoursSpecification: COMPANY.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.time.split('–')[0]?.trim(),
    closes: h.time.split('–')[1]?.trim() || h.time,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: COMPANY.rating,
    reviewCount: COMPANY.reviewCount,
  },
  sameAs: Object.values(COMPANY.social),
  areaServed: ['Ocala, FL', 'Reddick, FL', 'Belleview, FL', 'Citra, FL', 'The Villages, FL'],
});

/**
 * FAQPage schema. Pass the same plain-string `items` array used by
 * <FAQAccordion> — question/answer stay in sync between the visible UI
 * and the structured data automatically.
 */
export const buildFAQSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

/**
 * BreadcrumbList schema. Pass the same crumbs array rendered by
 * <Breadcrumbs> so the visible trail and structured data always match.
 */
export const buildBreadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: crumb.label,
      item: `${SITE_URL}${crumb.path}`,
    })),
  ],
});

/**
 * Review schema for the Reviews page — individual customer reviews tied
 * to the business.
 */
export const buildReviewSchema = (reviews) => ({
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: COMPANY.name,
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: COMPANY.rating,
    reviewCount: COMPANY.reviewCount,
  },
});
