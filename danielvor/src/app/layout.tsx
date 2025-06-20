import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

import Providers from './providers'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio | Daniel Victor de Oliveira Rodrigues',
  description: 'Portfólio de Daniel Victor de Oliveira Rodrigues'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
