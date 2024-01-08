import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kris Store',
  description: 'Your Market Solution',
  // manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-2xl md:max-w-full mx-auto bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
}
