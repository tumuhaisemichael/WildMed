import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Photo Gallery',
  description: 'Wildlife, conservation, and field-work photographs from WildMed expeditions across Uganda and East Africa.',
  path: '/gallery',
  image: '/assets/heroes/gallery-conservation-hero.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
