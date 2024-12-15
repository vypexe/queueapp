'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Mock data for active bots
const activeBots = [
  { id: 1, name: 'Concert Tickets Bot', status: 'In Queue', position: 145 },
  { id: 2, name: 'Limited Edition Sneakers Bot', status: 'Waiting', position: null },
  { id: 3, name: 'PS5 Restock Bot', status: 'Completed', position: null },
]

export default function ActiveBots() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Bots</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activeBots.map((bot) => (
            <li key={bot.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div>
                <h3 className="font-semibold">{bot.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Status: {bot.status}
                  {bot.position && ` (Position: ${bot.position})`}
                </p>
              </div>
              <Badge variant={bot.status === 'Completed' ? 'success' : 'default'}>
                {bot.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

