import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://LAarquitectura.vercel.app/';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/admin/', // Ejemplo: si tuvieras una ruta privada que no quieres que se indexe
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
