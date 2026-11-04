import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Tanzania Safaris: Serengeti, Ngorongoro & Kilimanjaro',
  description: 'Follow the Serengeti migration, descend into Ngorongoro Crater, and explore Tarangire and Kilimanjaro on a tailored Tanzania safari.',
  path: '/Tanzania-Safari',
  image: '/img/Destination/TZ/serengeti-migration.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
