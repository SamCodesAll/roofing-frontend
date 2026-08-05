import heroRoofingCrew from "@assets/images/hero/hero-home.webp";

export const SITE_URL = 'https://www.scottsmithroofing.com';

// NOTE: this resolves to a same-origin path once deployed (e.g.
// https://www.scottsmithroofing.com/assets/hero-roofing-crew-<hash>.svg), so it
// satisfies "no external image dependency." For real production launch,
// replace this with a proper 1200x630 JPG/PNG — SVG has inconsistent
// support as an Open Graph / Twitter Card preview image across social
// platforms (LinkedIn and some Facebook/Slack unfurl bots don't render it).
export const DEFAULT_OG_IMAGE = `${SITE_URL}${heroRoofingCrew}`;
