/**
 * Este archivo contiene constantes con los metadatos SEO
 * para las páginas estáticas de la aplicación.
 */

interface SeoData {
  title: string;
  description: string;
  imageUrl?: string;
  pathname: string;
}

export const HOME_SEO: SeoData = {
  title: "LArquitectura | Arquitectura e Ingeniería Civil",
  description: "Estudio de arquitectura e ingeniería civil. Transformamos ideas en espacios funcionales y estéticamente excepcionales en Venezuela y más allá.",
  pathname: "/",
  // La imagen usará el valor por defecto de SEO.ts
};

export const SERVICES_SEO: SeoData = {
  title: "Servicios Integrales de Arquitectura e Ingeniería",
  description: "Descubre nuestra cartera de servicios: arquitectura, diseño estructural, instalaciones eléctricas, hidrosanitarias, mecánicas y construcción con metodología BIM.",
  pathname: "/services",
  imageUrl: "/images/bimservices.webp" // Imagen representativa de la página
};

export const PROJECTS_SEO: SeoData = {
    title: "Portafolio de Proyectos",
    description: "Explora una selección de nuestros proyectos, desde centros deportivos de alto rendimiento hasta desarrollos comerciales y residenciales.",
    pathname: "/projects",
    imageUrl: "/images/landing2.webp" // Imagen general de proyectos
};

export const ABOUT_SEO: SeoData = {
    title: "Sobre Nosotros | L Arquitectura",
    description: "Conoce nuestro equipo, nuestra filosofía y el enfoque que nos permite entregar proyectos de alta calidad que superan las expectativas.",
    pathname: "/about",
};

export const CONTACT_SEO: SeoData = {
    title: "Contacto | Hablemos de tu Proyecto",
    description: "Ponte en contacto con nosotros para discutir tus ideas. Estamos listos para ayudarte a construir tu próximo gran proyecto.",
    pathname: "/contact",
};