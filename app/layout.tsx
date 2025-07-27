import type { Metadata } from 'next';

import {  Roboto_Mono } from 'next/font/google';
import './globals.css';

// Font setup


const mono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Margika Yatra',
  description: 'A journey through the world of Margika',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" type="image/x-icon" />
        </head>
        <body className={` ${mono.variable} antialiased`}>
          {children}
        </body>
      </html>
   
  );
}
