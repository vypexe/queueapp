'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TrialPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement trial subscription logic
    console.log('Starting trial for:', email)
  }

  const features = [
    "14-day free trial",
    "Unlimited AI queue bots",
    "Real-time notifications",
    "Priority support",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-800">Start Your Free Trial</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-purple-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleSubmit}>
              Start Free Trial
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

