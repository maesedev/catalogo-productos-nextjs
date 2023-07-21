import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catalogo de productos',
  description: 'Catalogo de productos tecnologicos de santiago garzon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-100"}>

        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
