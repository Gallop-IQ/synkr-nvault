import '@fontsource/ibm-plex-mono'
import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Synkrōn Vaults',
  description: 'Modular DeFi strategy orchestration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-synkron-black text-synkron-teal font-mono">{children}</body>
    </html>
  )
}
