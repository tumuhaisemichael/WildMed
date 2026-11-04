import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Field Courses & Training',
  description: 'Hands-on field courses in Uganda covering wildlife health, conservation, and One Health, led by experienced East African practitioners.',
  path: '/Course',
  image: '/assets/heroes/course-field-learning-hero.png',
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
