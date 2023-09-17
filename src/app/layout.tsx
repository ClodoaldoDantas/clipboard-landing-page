import './globals.scss'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Bai_Jamjuree } from 'next/font/google'
import { Footer } from '@/components/Footer'

const bai_jamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Clipboard Landing Page',
  description: 'Frontend Mentor Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bai_jamjuree.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
