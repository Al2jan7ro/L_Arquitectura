
import { Metadata } from 'next';

//interfaz para las propiedades que nuestra función de SEO aceptará.
interface SeoProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  pathname?: string;
}

// Valores por defecto para el SEO del sitio.
const defaultMeta = {
  title: 'LAarquitectura | Arquitectura e Ingeniería Civil',
  description: 'Estudio de arquitectura e ingeniería civil. Transformamos ideas en espacios funcionales y estéticamente excepcionales en Venezuela y más allá.',
  siteName: 'LAarquitectura',
  // Reemplaza con la URL de tu logo o una imagen genérica para compartir.
  imageUrl: '/images/logoB.png', 
  baseUrl: 'https://laarquitectura.vercel.app',
};


export function generateSeoMetadata({ title, description, imageUrl, pathname }: SeoProps): Metadata {
  const currentUrl = `${defaultMeta.baseUrl}${pathname || ''}`;
  const effectiveTitle = title ? `${title} | ${defaultMeta.siteName}` : defaultMeta.title;
  const effectiveDescription = description || defaultMeta.description;
  // Construye la URL absoluta para la imagen
  const effectiveImageUrl = imageUrl 
    ? `${defaultMeta.baseUrl}${imageUrl}` 
    : defaultMeta.imageUrl;

  return {
    title: effectiveTitle,
    description: effectiveDescription,
    openGraph: {
      title: effectiveTitle,
      description: effectiveDescription,
      url: currentUrl,
      siteName: defaultMeta.siteName,
      images: [
        {
          url: effectiveImageUrl,
          alt: `Imagen para ${effectiveTitle}`,
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical: currentUrl,
    },
    icons: {
      icon: '/Favicon.png', 
    },
  };
}
