import React from 'react'
import { Metadata } from 'next'
import '@/styles/globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
