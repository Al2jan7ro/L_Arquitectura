import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "LArquitectura Website",
  description: 'Sitio web de la empresa LArquitectura en barquisimeto venezuela',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body >
        {children}
      </body>
    </html>
  );
}
