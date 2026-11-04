import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: '3-Day Gorilla Trekking & Batwa Experience',
  description: 'A compact Bwindi journey pairing mountain gorilla trekking with a Batwa cultural experience, with lodges and transfers arranged.',
  path: '/Ugandan-3Days',
  image: '/assets/3day-gorilla/bwindi-gorilla-juvenile.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
