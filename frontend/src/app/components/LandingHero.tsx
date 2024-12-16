import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-purple-900 sm:text-6xl">
            Queue Smarter,{' '}
            <span className="text-purple-600">Not Harder</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Join the future of queuing with our AI-powered assistant. Perfect for concert tickets, 
            class registration, theme parks, and more.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signup">
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Queueing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/trial">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-purple-600 hover:text-purple-700 text-lg"
              >
                Try Demo
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              >
                <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Real-time Updates",
    description: "Get instant notifications about your queue position and status.",
    icon: ArrowRight
  },
  {
    title: "Multi-Queue Support",
    description: "Manage multiple queues simultaneously with ease.",
    icon: ArrowRight
  },
  {
    title: "Smart Automation",
    description: "Let our AI handle the waiting while you focus on what matters.",
    icon: ArrowRight
  }
];
