import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, Clock, Ticket, Sparkles, Users, Bot, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'QueueMaster AI - Your Intelligent Queue Assistant',
  description: 'Revolutionize your waiting experience with AI-powered queue management for concerts, classes, and theme parks.',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-800">QueueMaster AI</h1>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-purple-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Never Miss Out Again
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-800 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            QueueMaster AI revolutionizes waiting in line. Our intelligent bots handle digital queues for concert tickets, class registrations, and theme park attractions, so you don't have to.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Queueing Smarter <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-purple-800 text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: "Create Your Bot", description: "Set up an AI bot with specific instructions for your queue" },
              { icon: Clock, title: "Bot Joins Queue", description: "Your AI assistant enters the digital queue on your behalf" },
              { icon: Ticket, title: "Secure Your Spot", description: "Get notified when it's your turn or your item is secured" },
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                <step.icon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-purple-800 mb-2">{step.title}</h4>
                <p className="text-purple-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-purple-800 text-center mb-8">Why Choose QueueMaster AI?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Save Time", description: "Reclaim hours spent waiting in digital queues" },
              { icon: Ticket, title: "Never Miss Out", description: "Increase your chances of securing high-demand items" },
              { icon: Sparkles, title: "Smart Queueing", description: "Our AI adapts to various queue systems for optimal performance" },
              { icon: Users, title: "Multiple Queues", description: "Manage multiple queues simultaneously with ease" },
              { icon: Shield, title: "Secure & Reliable", description: "Your data is protected, and our system is built for reliability" },
              { icon: Bot, title: "24/7 Availability", description: "Our bots work round the clock, never missing an opportunity" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-purple-800 mb-2">{feature.title}</h4>
                <p className="text-purple-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-purple-800 text-center mb-8">Perfect For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Students", description: "Never miss out on popular classes during registration periods" },
              { title: "Concert Enthusiasts", description: "Secure tickets to high-demand shows and events" },
              { title: "Theme Park Visitors", description: "Optimize your visit by queueing for multiple attractions" },
            ].map((audience, index) => (
              <motion.div 
                key={index}
                className="bg-purple-600 p-6 rounded-lg shadow-md text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <h4 className="text-2xl font-semibold mb-2">{audience.title}</h4>
                <p>{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-purple-800 text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { question: "How does QueueMaster AI work?", answer: "QueueMaster AI uses advanced algorithms to simulate human behavior in digital queues. Our AI bots join queues on your behalf, following specific instructions you provide, and notify you when action is required or your goal is achieved." },
              { question: "Is it legal to use AI bots for queueing?", answer: "QueueMaster AI is designed to comply with the terms of service of most queueing systems. However, it's always recommended to check the specific rules of the service you're using. Our bots are built to mimic ethical human behavior in queues." },
              { question: "Can I use QueueMaster AI for any type of queue?", answer: "QueueMaster AI is primarily designed for digital queues such as online ticket sales, class registrations, and virtual waiting rooms. It may not be suitable for physical, in-person queues." },
              { question: "How much does it cost?", answer: "We offer a range of plans to suit different needs, starting with a free trial. Visit our pricing page for more details on our subscription options." },
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-purple-800 mb-2">{faq.question}</h4>
                <p className="text-purple-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-4">Ready to Revolutionize Your Waiting Experience?</h3>
            <p className="text-xl text-purple-700 mb-8">Join thousands of satisfied users who have reclaimed their time with QueueMaster AI.</p>
            <Link href="/signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">QueueMaster AI</h4>
              <p>Revolutionizing the way you wait in line.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 QueueMaster AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

