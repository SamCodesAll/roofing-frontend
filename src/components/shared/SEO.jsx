import { SITE_URL, DEFAULT_OG_IMAGE } from '@constants/seo';
import { COMPANY } from '@data/company';

/**
 * <SEO title="Roof Repair | Sam Codes" description="..." path="/roof-repair" keywords={[...]} />
 *
 * React 19 automatically hoists <title>, <meta>, and <link> tags rendered
 * anywhere in the component tree into <head> — no extra library needed.
 */
const SEO = ({ title, description, path = '', image = DEFAULT_OG_IMAGE, keywords = [], noindex = false }) => {
  const fullTitle = title.includes(COMPANY.name) ? title : `${title} | ${COMPANY.name}`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEO;
