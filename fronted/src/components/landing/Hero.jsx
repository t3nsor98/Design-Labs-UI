import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { StyleDiv } from "design-labs-ui";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const floatingShapes = [
    { size: "w-20 h-20", position: "top-20 left-[10%]", delay: 0, rotate: 12 },
    {
      size: "w-16 h-16",
      position: "top-40 right-[15%]",
      delay: 1.5,
      rotate: -12,
    },
    {
      size: "w-24 h-24",
      position: "bottom-20 left-[20%]",
      delay: 0.8,
      rotate: 45,
    },
    {
      size: "w-12 h-12",
      position: "bottom-40 right-[25%]",
      delay: 2,
      rotate: -45,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden purple-gradient pt-24 pb-16">
      {/* Floating shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-500/20 backdrop-blur-md border border-white/10 ${shape.size} ${shape.position}`}
          initial={{ opacity: 0, rotate: shape.rotate }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            rotate: shape.rotate,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: shape.delay,
          }}
        />
      ))}

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
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">Design Labs UI</span>
            <br />
            <span className="text-white">Modern React Components</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl"
            variants={itemVariants}
          >
            A beautiful, customizable, and accessible component library for
            building stunning React applications with minimal effort.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link
              to="/showcase"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-500 to-primary-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Explore Components
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
        </motion.div>

        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <StyleDiv
            backgroundColor="rgba(255, 255, 255, 0.03)"
            padding="2rem"
            borderRadius="1rem"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
            className="backdrop-blur-md border border-white/10"
          >
            <pre className="text-sm md:text-base overflow-x-auto text-white/90">
              <code>
                {`// Install with npm
npm install design-labs-ui

// Import and use components
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
    </StyleDiv>
  );
}`}
              </code>
            </pre>
          </StyleDiv>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-secondary-800"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
