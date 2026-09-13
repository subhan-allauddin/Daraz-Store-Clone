import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Midnight Thread — Curated essentials after dark',
  description: 'Objects with presence, curated for the after-dark hours.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
