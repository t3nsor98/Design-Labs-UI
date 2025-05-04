import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGithub } from "react-icons/fi";
import ThemeToggle from "../showcase/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className={"flex items-center space-x-2"}>
          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-primary-500"
          />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-display font-bold gradient-text"
          >
            Design Labs UI
          </motion.h1>
        </NavLink>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold transition-colors"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink
              to="/showcase"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold transition-colors"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Components
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink
              to="/documentation"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold transition-colors"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Documentation
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <a
              href="https://github.com/t3nsor98/Design-Labs-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ThemeToggle />
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-secondary-800 border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold transition-colors py-2"
                  : "text-white/80 hover:text-white transition-colors py-2"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/showcase"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold transition-colors py-2"
                  : "text-white/80 hover:text-white transition-colors py-2"
              }
              onClick={() => setIsOpen(false)}
            >
              Components
            </NavLink>
            <NavLink
              to="/documentation"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold transition-colors py-2"
                  : "text-white/80 hover:text-white transition-colors py-2"
              }
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </NavLink>
            <a
              href="https://github.com/t3nsor98/Design-Labs-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
