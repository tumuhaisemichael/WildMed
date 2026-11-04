import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Traveller Reviews',
  description: 'Read reviews from travellers, students, and professionals who explored East Africa with WildMed, and share your own story.',
  path: '/Review',
  image: '/assets/heroes/traveler-reviews-hero.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
