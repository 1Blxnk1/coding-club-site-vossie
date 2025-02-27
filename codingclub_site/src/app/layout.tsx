import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coding Club',
  description: 'Welcome to our coding club website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="relative">
          {/* Header and Footer in front layer */}
          <div className="relative z-50">
            <Header />
          </div>

          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  )
}