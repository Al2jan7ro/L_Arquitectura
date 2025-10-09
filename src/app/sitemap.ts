import { MetadataRoute } from 'next'
import featuredProjects from '@/data/BestProjectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laarquitectura.vercel.app';

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
  const projectRoutes = featuredProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
  ];
}