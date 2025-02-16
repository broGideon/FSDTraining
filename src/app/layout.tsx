import type { Metadata } from 'next'
import './globals.scss'
import { Rubik } from 'next/font/google'
import { Header } from '@/widgets/header/ui/header'
import { Footer } from '@/widgets/footer/ui/footer'
import React from 'react'

export const metadata: Metadata = {
  title: 'Sofas',
  description: 'Shop in sofas',
}

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-rubik',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <main className="container mx-auto flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
