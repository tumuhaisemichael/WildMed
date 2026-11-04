import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes = [
  '/', '/Destinations', '/Uganda-Adventures', '/Rwanda-Safaris', '/Kenya-Safaris', '/Tanzania-Safari', '/Custom-Safaris',
  '/Ugandan-3Days', '/Ugandan-4Days', '/Ugandan-4Days2', '/Ugandan-5-Days', '/Ugandan-5Days', '/Ugandan-6Days2', '/Rwanda-7-Days',
  '/Ugandan-8days', '/Ugandan-8days2', '/Ugandan-8days3', '/Ugandan-11-Days', '/Ugandan-11Days', '/Ugandan-14-Days',
  '/Professional-Biological-Field-Expeditions', '/Biological-Field-Research-Expeditions', '/Veterinary-Conservation-', '/Medical-Expedition-Programs',
  '/Study-Aboard', '/Course', '/About-Us', '/gallery', '/recentgallery', '/Review',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    changeFrequency: route === '/Review' || route === '/recentgallery' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
