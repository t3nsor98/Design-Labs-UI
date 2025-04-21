// src/pages/Documentation.jsx
import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../components/showcase/CodeBlock";

const Documentation = () => {
  return (
    <div className="bg-secondary-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Learn how to install and use Design Labs UI in your React projects.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          <div className="card-gradient rounded-xl border border-white/10 p-6 mb-8">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Installation
            </h2>
            <p className="text-white/70 mb-4">
              Install Design Labs UI using npm or yarn:
            </p>
            <CodeBlock
              code={`npm install design-labs-ui\n\n# or with yarn\nyarn add design-labs-ui`}
            />
          </div>

          <div className="card-gradient rounded-xl border border-white/10 p-6 mb-8">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Usage
            </h2>
            <p className="text-white/70 mb-4">
              Import components from the library and use them in your React
              application:
            </p>
            <CodeBlock
              code={`import React from 'react';
import { StyleDiv } from 'design-labs-ui';

function App() {
  return (
    <StyleDiv
      backgroundColor="#f5f5f5"
      padding="20px"
      borderRadius="8px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    >
      <h1>Hello from Design Labs UI!</h1>
      <p>This is a styled div component from our library.</p>
    </StyleDiv>
  );
}

export default App;`}
            />
          </div>

          <div className="card-gradient rounded-xl border border-white/10 p-6">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Components
            </h2>
            <p className="text-white/70 mb-4">
              Check out the{" "}
              <a
                href="/showcase"
                className="text-primary-400 hover:text-primary-300"
              >
                Component Showcase
              </a>{" "}
              for a complete list of available components and their
              documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
