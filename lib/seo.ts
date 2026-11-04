import type { Metadata } from 'next';

export const SITE_NAME = 'WildMed Safaris & Field Projects';
export const SITE_URL = (process.env.SITE_URL || 'https://wildmedug.com').replace(/\/$/, '');
export const DEFAULT_SHARE_IMAGE = '/assets/14day-luxury/queen-elizabeth-lion-kob.jpg';

type PageSeo = { title: string; description: string; path: string; image?: string };

// Title, description, canonical URL, and social-sharing (Open Graph / Twitter) tags for one page.
export function pageMetadata({ title, description, path, image = DEFAULT_SHARE_IMAGE }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | WildMed`, description, url: path, siteName: SITE_NAME, type: 'website', images: [{ url: image, alt: title }] },
    twitter: { card: 'summary_large_image', title: `${title} | WildMed`, description, images: [image] },
  };
}

type TripSeo = { title: string; description: string; heroImage: string; duration: string; destination: string };

export function tripMetadata(trip: TripSeo, path: string): Metadata {
  return pageMetadata({ title: trip.title, description: `${trip.description} ${trip.duration} in ${trip.destination} with WildMed.`, path, image: trip.heroImage });
}
