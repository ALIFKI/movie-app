import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Movie app with next js',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
