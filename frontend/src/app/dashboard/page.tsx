'use client'

import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Textarea } from '../../components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Bell, CheckCircle, Clock, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [instructions, setInstructions] = useState('')
  const [activeBots, setActiveBots] = useState<Array<{
    id: number,
    name: string,
    status: string,
    position: number | null
  }>>([])
  const [notifications, setNotifications] = useState<Array<{
    id: number,
    message: string,
    type: string
  }>>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create new bot
    const newBot = {
      id: Date.now(),
      name: name,
      status: 'Waiting',
      position: null
    }
    
    // Add new bot to active bots
    setActiveBots(prev => [...prev, newBot])
    
    // Create notification for new bot
    const newNotification = {
      id: Date.now(),
      message: `${name}: Bot created and waiting in queue`,
      type: 'info'
    }
    setNotifications(prev => [...prev, newNotification])

    // Reset form
    setName('')
    setUrl('')
    setInstructions('')
  }

  // Calculate dashboard stats
  const completedBots = activeBots.filter(bot => bot.status === 'Completed').length
  const inProgressBots = activeBots.filter(bot => bot.status === 'In Queue' || bot.status === 'Waiting').length
  const totalActiveBots = activeBots.length

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 p-8">
      <h1 className="text-4xl font-bold text-purple-800 mb-8">QueueMaster AI Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Create AI Queue Bot</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Bot Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter bot name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="url">Queue URL</Label>
                      <Input
                        id="url"
                        placeholder="https://example.com/queue"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="instructions">Instructions</Label>
                      <Textarea
                        id="instructions"
                        placeholder="Enter specific instructions for the bot"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit" onClick={handleSubmit} className="w-full bg-purple-600 hover:bg-purple-700">
                  <Plus className="mr-2 h-4 w-4" /> Create Bot
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Active Bots</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {activeBots.map((bot, index) => (
                    <motion.li
                      key={bot.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div>
                        <h3 className="font-semibold text-purple-800">{bot.name}</h3>
                        <p className="text-sm text-purple-600">
                          Status: {bot.status}
                          {bot.position && ` (Position: ${bot.position})`}
                        </p>
                      </div>
                      <Badge variant={bot.status === 'Completed' ? 'success' : 'default'}>
                        {bot.status}
                      </Badge>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Bell className="h-12 w-12 text-purple-600 mb-2" />
                    <p className="text-2xl font-bold text-purple-800">{totalActiveBots}</p>
                    <p className="text-sm text-purple-600">Active Bots</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                    <p className="text-2xl font-bold text-purple-800">{completedBots}</p>
                    <p className="text-sm text-purple-600">Completed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Clock className="h-12 w-12 text-yellow-500 mb-2" />
                    <p className="text-2xl font-bold text-purple-800">{inProgressBots}</p>
                    <p className="text-sm text-purple-600">In Progress</p>
                  </CardContent>
                </Card>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Recent Notifications</h3>
              <ul className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.li
                    key={notification.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <p className="text-sm text-purple-700">{notification.message}</p>
                    <Badge variant={notification.type === 'success' ? 'success' : notification.type === 'warning' ? 'warning' : 'default'}>
                      {notification.type}
                    </Badge>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

