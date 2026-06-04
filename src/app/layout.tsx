import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nadia Store - Premium Products',
  description: 'Welcome to Nadia Store. Discover premium products with modern design and exceptional quality.',
  keywords: ['Nadia Store', 'Products', 'Premium Quality', 'E-commerce'],
  authors: [{ name: 'Nadia Store Team' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={inter.variable}>
      <head />
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <AIAssistant />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
