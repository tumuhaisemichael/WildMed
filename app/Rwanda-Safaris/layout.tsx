import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Rwanda Safaris & Gorilla Trekking',
  description: 'Mountain gorillas and golden monkeys in Volcanoes National Park, Nyungwe’s canopy walk, Akagera’s Big Five, and Lake Kivu on a Rwanda safari.',
  path: '/Rwanda-Safaris',
  image: '/assets/11day-uganda-rwanda/day10-golden-monkeys.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
