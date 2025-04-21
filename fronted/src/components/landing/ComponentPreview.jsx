import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { StyleDiv } from "design-labs-ui";

const ComponentPreview = () => {
  return (
    <section className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Showcase</span> of Components
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our growing collection of beautiful and functional
            components.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <StyleDiv
              backgroundColor="rgba(45, 27, 105, 0.3)"
              padding="2rem"
              borderRadius="1rem"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
              className="backdrop-blur-md border border-white/10 h-full"
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-white">
                StyleDiv
              </h3>
              <p className="text-white/70 mb-4">
                A flexible container component with customizable styling
                properties.
              </p>
              <div className="bg-primary-900/30 p-4 rounded-lg border border-primary-500/20">
                <p className="text-white/90">
                  This is a StyleDiv component with custom styling applied
                  through props.
                </p>
              </div>
            </StyleDiv>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">
                More Components Coming Soon
              </h3>
              <p className="text-white/70 mb-6">
                We're actively working on expanding our component library with
                buttons, cards, inputs, and more.
              </p>
              <Link
                to="/showcase"
                className="px-6 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
              >
                View All Components
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComponentPreview;
