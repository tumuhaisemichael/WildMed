import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Recent Field Moments',
  description: 'The latest photos and videos from WildMed’s recent safaris and field programmes in Uganda.',
  path: '/recentgallery',
  image: '/assets/heroes/recent-field-hero.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
