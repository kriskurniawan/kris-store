import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/common/components/layouts/Header'
import Navigation from '@/common/components/layouts/Navigation'
import Footer from '@/common/components/layouts/Footer'

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
        <main className="bg-gray-50">
          <Header />
          <Navigation />
          <div className="container lg:w-[1200px] md:max-w-full mx-auto">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
