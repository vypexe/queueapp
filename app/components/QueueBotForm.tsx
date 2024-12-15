'use client'

import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Textarea } from '../../components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card'

export default function QueueBotForm() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [instructions, setInstructions] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement bot creation logic
    console.log('Creating bot:', { name, url, instructions })
    // Reset form
    setName('')
    setUrl('')
    setInstructions('')
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Create AI Queue Bot</CardTitle>
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
        <Button type="submit" onClick={handleSubmit}>Create Bot</Button>
      </CardFooter>
    </Card>
  )
}

