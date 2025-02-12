import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/widgets/header/ui/Header'
import { Footer } from '@/widgets/footer/ui/footer'

export const metadata: Metadata = {
  title: 'Sofas',
  description: 'Shop in sofas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
