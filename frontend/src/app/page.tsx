'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  ArrowRight, 
  Clock, 
  Ticket, 
  Sparkles, 
  Users, 
  Bot, 
  Shield,
  LucideProps
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const steps = [
    { 
      icon: (props: LucideProps) => <Bot {...props} />, 
      title: "Create Your Bot", 
      description: "Set up an AI bot with specific instructions for your queue" 
    },
    { 
      icon: (props: LucideProps) => <Clock {...props} />, 
      title: "Bot Joins Queue", 
      description: "Your AI assistant enters the digital queue on your behalf" 
    },
    { 
      icon: (props: LucideProps) => <Ticket {...props} />, 
      title: "Secure Your Spot", 
      description: "Get notified when it's your turn or your item is secured" 
    },
  ];

  const features = [
    { 
      icon: (props: LucideProps) => <Clock {...props} />, 
      title: "Save Time", 
      description: "Reclaim hours spent waiting in digital queues" 
    },
    { 
      icon: (props: LucideProps) => <Ticket {...props} />, 
      title: "Never Miss Out", 
      description: "Increase your chances of securing high-demand items" 
    },
    { 
      icon: (props: LucideProps) => <Sparkles {...props} />, 
      title: "Smart Queueing", 
      description: "Our AI adapts to various queue systems for optimal performance" 
    },
    { 
      icon: (props: LucideProps) => <Users {...props} />, 
      title: "Multiple Queues", 
      description: "Manage multiple queues simultaneously with ease" 
    },
    { 
      icon: (props: LucideProps) => <Shield {...props} />, 
      title: "Secure & Reliable", 
      description: "Your data is protected, and our system is built for reliability" 
    },
    { 
      icon: (props: LucideProps) => <Bot {...props} />, 
      title: "24/7 Availability", 
      description: "Our bots work round the clock, never missing an opportunity" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Queue Smarter with AI
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let our AI assistants handle the waiting while you focus on what matters
        </motion.p>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/dashboard">
            <Button size="lg" className="mr-4">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {step.icon({ className: "h-8 w-8 text-primary" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16 mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {feature.icon({ className: "h-8 w-8 text-primary" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Waiting Experience?</h2>
        <Link href="/dashboard">
          <Button size="lg">
            Start Using QueueMaster AI <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}