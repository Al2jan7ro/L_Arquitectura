import type { Metadata } from "next";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { unstable_ViewTransition as ViewTransition } from 'react';
import { baskervville} from "@/components/ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "LArquitectura Website",
  description: 'Sitio web de la empresa LArquitectura en barquisimeto venezuela',
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
    <ViewTransition>
    <html lang="es">
        <body className={`min-h-screen flex flex-col w-full ${baskervville .className} antialiased`}>
          <Header />
        <main className="flex-1 flex flex-col items-center">
          {children}
        </main>
       
        <Footer />
      </body>
    </html>
      </ViewTransition>
  );
}
