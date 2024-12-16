import React from 'react'
import { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QueueMaster AI - Your Intelligent Queue Assistant',
  description: 'Revolutionize your waiting experience with AI-powered queue management for concerts, classes, and theme parks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 container py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
