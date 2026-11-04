import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Veterinary & Conservation Field Programmes',
  description: 'Work alongside wildlife veterinarians in Uganda: health monitoring, immobilisation training, disease surveillance, and conservation medicine.',
  path: '/Veterinary-Conservation-',
  image: '/assets/programs/veterinary/hero-lioness-procedure.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
