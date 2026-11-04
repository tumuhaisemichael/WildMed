import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Custom East Africa Safaris',
  description: 'Design a private safari across Uganda, Rwanda, Kenya, and Tanzania around your dates, interests, and travel style with WildMed’s local team.',
  path: '/Custom-Safaris',
  image: '/assets/heroes/custom-safari-hero.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
