import { MetadataRoute } from 'next'
import featuredProjects from '@/data/BestProjectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laarquitectura.vercel.app';
  const currentDate = new Date();
  
  // Fecha estable para las rutas estáticas (actualizada mensualmente)
  const staticLastModified = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  
  // Fecha para proyectos (actualizada semanalmente)
  const projectLastModified = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  // Rutas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Rutas dinámicas para cada proyecto
  const projectRoutes: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.url}`,
    lastModified: projectLastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
  ];
}