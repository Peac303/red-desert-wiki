import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Red Desert Wiki - Official Game Wiki & Community',
  description: 'Comprehensive guide and community for the Red Desert game',
  keywords: 'Red Desert, game, wiki, guide, community, desert, adventure',
  openGraph: {
    title: 'Red Desert Wiki',
    description: 'Official wiki and community for Red Desert game',
    type: 'website',
    url: 'https://reddesertwiki.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}