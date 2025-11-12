import '@fontsource/ibm-plex-mono'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-synkron-black text-synkron-teal font-mono">{children}</body>
    </html>
  )
}
