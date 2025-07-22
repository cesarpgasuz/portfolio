import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cesar Pablo Garcia Suarez - Portfolio',
  description: 'Desarrollador Frontend con experiencia en React, Next.js y JavaScript. Apasionado por crear interfaces de usuario atractivas y funcionales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-c-marino text-white`}>{children}</body>
    </html>
  )
}
