import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-secondary-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-primary-500" />
              <h2 className="text-xl font-display font-bold gradient-text">
                Design Labs UI
              </h2>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              A modern UI component library for React applications, designed to
              help developers build beautiful interfaces with ease.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/t3nsor98/Design-Labs-UI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/showcase"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/t3nsor98/Design-Labs-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Release Notes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} Design Labs UI. Created by Digbijaya
            Lenka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
