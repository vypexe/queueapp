import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/card';

export function QueueStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.title}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  { title: "Active Users", value: "10K+" },
  { title: "Time Saved", value: "1M+ hrs" },
  { title: "Success Rate", value: "99.9%" }
];
