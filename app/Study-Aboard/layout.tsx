import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Study Abroad: One Health in East Africa',
  description: 'Field-based study abroad rotations in Uganda connecting human, animal, and environmental health, with university and conservation partners.',
  path: '/Study-Aboard',
  image: '/assets/heroes/study-abroad-hero.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
