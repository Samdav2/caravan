import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

export const metadata: Metadata = {
  title: 'Caravantastic | Static Caravans & Lodges For Sale UK',
  description: 'Huge selection of new and used static caravans & lodges for sale off-site across Devon, Somerset, and Sussex. Visit our 3 showgrounds in Exeter, West Sussex, and Taunton.',
  keywords: ['static caravans for sale', 'lodges for sale', 'caravantastic', 'used static caravans', 'off site caravans', 'self build accommodation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
