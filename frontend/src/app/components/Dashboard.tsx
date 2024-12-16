'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bell, CheckCircle, Clock } from 'lucide-react'

// Mock data for notifications
const notifications = [
  { id: 1, message: 'Concert Tickets Bot: Your turn is coming up soon!', type: 'warning' },
  { id: 2, message: 'PS5 Restock Bot: Successfully secured a spot!', type: 'success' },
  { id: 3, message: 'Limited Edition Sneakers Bot: Queue opened, now waiting.', type: 'info' },
]

export default function Dashboard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Bell className="h-12 w-12 text-primary mb-2" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Active Bots</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
              <p className="text-2xl font-bold">1</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Clock className="h-12 w-12 text-yellow-500 mb-2" />
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <p className="text-sm">{notification.message}</p>
              <Badge variant={notification.type === 'success' ? 'success' : notification.type === 'warning' ? 'warning' : 'default'}>
                {notification.type}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
} 