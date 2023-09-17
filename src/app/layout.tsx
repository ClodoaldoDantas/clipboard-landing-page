import './globals.scss'
import type { Metadata } from 'next'
import { Bai_Jamjuree } from 'next/font/google'

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
      <body className={bai_jamjuree.className}>{children}</body>
    </html>
  )
}
