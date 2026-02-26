import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LenisProvider } from './providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Parash.dev - Digital Agency',
  description: 'We build brands & digital products for lasting success',
  icons: {
    icon: [
      {
        url: '/plogo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/plogo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/plogo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/plogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
