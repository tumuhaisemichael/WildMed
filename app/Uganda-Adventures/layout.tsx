import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Uganda Safaris & Gorilla Trekking',
  description: 'Track mountain gorillas in Bwindi, chimpanzees in Kibale, and tree-climbing lions in Queen Elizabeth on tailored Uganda safaris and field programmes.',
  path: '/Uganda-Adventures',
  image: '/assets/3day-gorilla/bwindi-gorilla-juvenile.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
