import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 purple-gradient relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Ready to Build Beautiful UIs?
            <br />
            <span className="gradient-text">
              Start Using Design Labs UI Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Join developers who are building modern, responsive, and accessible
            web applications with Design Labs UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/documentation"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-500 to-primary-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/t3nsor98/Design-Labs-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
            >
              View on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
