"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxContainer({ children, className }: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // Seleccionamos el hero y su contenido
    const hero = container.querySelector('.hero');
    const heroContent = container.querySelector('.hero-content');

    if (hero && heroContent) {
      // Animación principal que fija el hero y mueve su contenido
      gsap.to(heroContent, {
        yPercent: 30, // Mueve el contenido hacia abajo para el efecto parallax
        opacity: 0,   // Desvanece el contenido al hacer scroll
        ease: "none",
        scrollTrigger: {
          trigger: hero, // El trigger es la sección hero
          start: "top top",
          end: "+=50%", // La animación se completa en la mitad de la altura de la pantalla
          pin: true,     // ¡Esta es la clave! Fija el hero en su lugar
          pinSpacing: false, // Evita que se añada espacio extra después de fijar
          scrub: 1,      // Anima suavemente con el scroll
        },
      });
    }
  }, { scope: containerRef });

  return <div ref={containerRef} className={className}>{children}</div>;
}
