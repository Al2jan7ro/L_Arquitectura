import { MetadataRoute } from 'next'
import projectsData from '@/data/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://LAarquitectura.vercel.app/';

  // Rutas estáticas
  const staticRoutes = [
    '/',
    '/services',
    '/projects',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  // Rutas dinámicas para cada proyecto
  const projectIds = Object.keys(projectsData);
  const projectRoutes = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
  ];
}