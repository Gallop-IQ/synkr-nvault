'use client'

import { useEffect, useState } from 'react'

const bootLogs = [
  'Initializing Synkrōn Protocol...',
  'Loading modular vault architecture...',
  'Activating signal overlays...',
  'Routing capital across Solana...',
  'Boot complete. Welcome to Synkrōn.',
]

export default function Home() {
  const [logIndex, setLogIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="text-left p-6 max-w-xl">
        {bootLogs.slice(0, logIndex + 1).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {logIndex === bootLogs.length - 1 && <div className="mt-4 blink">>_</div>}
      </div>
      <style jsx>{`
        .blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </main>
  )
}
