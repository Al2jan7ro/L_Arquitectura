'use client';

import { usePathname } from 'next/navigation';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function ViewTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Desactivamos ViewTransition en la página de inicio para evitar conflictos con el parallax.
  if (pathname === '/') {
    return <>{children}</>;
  }

  return <ViewTransition>{children}</ViewTransition>;
}
