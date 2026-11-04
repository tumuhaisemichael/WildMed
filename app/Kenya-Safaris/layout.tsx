import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Kenya Safaris: Maasai Mara, Amboseli & Tsavo',
  description: 'Witness the Great Migration in the Maasai Mara, elephants beneath Kilimanjaro in Amboseli, and Tsavo’s red elephants on a Kenya safari.',
  path: '/Kenya-Safaris',
  image: '/img/Destination/Kenya/tsavo-red-elephants.jpg',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
