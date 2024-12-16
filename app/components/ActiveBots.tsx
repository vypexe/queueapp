'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

interface Bot {
  id: number
  name: string
  status: string
  position: number | null
}

export default function ActiveBots() {
  const [activeBots, setActiveBots] = useState<Bot[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchActiveBots = async () => {
      try {
        const response = await fetch('http://localhost:3000/active-bots', {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const data: Bot[] = await response.json()
        setActiveBots(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchActiveBots()

    // Optional: Set up polling
    const interval = setInterval(() => {
      fetchActiveBots()
    }, 60000) // Refresh every 60 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center">🔄 Loading active bots...</div>
  }

  if (error) {
    return <div className="text-red-500">⚠️ Error fetching active bots: {error}</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Bots</CardTitle>
      </CardHeader>
      <CardContent>
        {activeBots.length === 0 ? (
          <div>No active bots found.</div>
        ) : (
          <ul className="space-y-4">
            {activeBots.map((bot) => (
              <li key={bot.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <h3 className="font-semibold">{bot.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Status: {bot.status}
                    {bot.position !== null && ` (Position: ${bot.position})`}
                  </p>
                </div>
                <Badge variant={bot.status === 'Completed' ? 'success' : 'default'}>
                  {bot.status}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}