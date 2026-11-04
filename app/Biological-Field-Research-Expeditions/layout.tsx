import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Biological Field Research Expeditions',
  description: 'Science-driven field expeditions in Uganda: biodiversity surveys, wildlife monitoring, ecological sampling, and conservation research.',
  path: '/Biological-Field-Research-Expeditions',
  image: '/assets/programs/biological/hero-field-team.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
