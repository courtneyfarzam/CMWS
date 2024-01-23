'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/index.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">

      <head />
      <body className={inter.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
