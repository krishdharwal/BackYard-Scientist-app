import React from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon, Lightbulb, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="hero-section pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-abril-fatface mb-6 text-white">
            Backyard Scientist
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Where curiosity sparks discovery! Explore amazing science projects that make learning an exciting adventure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: BeakerIcon,
              title: "Discover Science",
              description: "Hands-on experiments that make learning fun"
            },
            {
              icon: Lightbulb,
              title: "Spark Creativity",
              description: "Turn everyday items into amazing discoveries"
            },
            {
              icon: Sparkles,
              title: "Safe & Educational",
              description: "Kid-friendly projects with expert guidance"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};