import type { Metadata } from "next";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { unstable_ViewTransition as ViewTransition, Suspense } from 'react';
import { baskervville} from "@/components/ui/fonts";
import { ViewTransitionWrapper } from '@/components/ui/ViewTransitionWrapper';

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.larquitectura.com'),

  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="es">
        <body className={`min-h-screen flex flex-col w-full ${baskervville .className} antialiased`} suppressHydrationWarning={true}>
          <Header />
        <main className="flex-1 flex flex-col items-center">
          <Suspense>
            <ViewTransitionWrapper>
              {children}
            </ViewTransitionWrapper>
          </Suspense>
        </main>
       
        <Footer />
      </body>
    </html>
  );
}
