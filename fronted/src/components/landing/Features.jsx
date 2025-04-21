import React from "react";
import { motion } from "framer-motion";
import {
  FiLayout,
  FiFeather,
  FiZap,
  FiCode,
  FiSmile,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: <FiLayout size={24} />,
    title: "Beautiful Components",
    description:
      "Carefully crafted components with attention to detail and aesthetics.",
  },
  {
    icon: <FiFeather size={24} />,
    title: "Lightweight",
    description: "Optimized for performance with minimal bundle size impact.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Easy to Use",
    description: "Simple API with sensible defaults for quick implementation.",
  },
  {
    icon: <FiCode size={24} />,
    title: "Customizable",
    description: "Highly customizable components to match your design system.",
  },
  {
    icon: <FiSmile size={24} />,
    title: "Accessible",
    description: "Built with accessibility in mind for all users.",
  },
  {
    icon: <FiShield size={24} />,
    title: "TypeScript Support",
    description: "Full TypeScript support with comprehensive type definitions.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Why Choose</span> Design Labs UI?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our component library is built with modern web standards and best
            practices to help you create stunning user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient p-6 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4 text-primary-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
