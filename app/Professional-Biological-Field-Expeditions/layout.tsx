import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'One Health Tourism',
  description: 'Biological research, veterinary conservation, and medical field expeditions across East Africa for students, researchers, and professionals.',
  path: '/Professional-Biological-Field-Expeditions',
  image: '/assets/programs/professional/hero-giraffe-capture-team.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
