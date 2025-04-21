import React, { useState } from "react";
import { motion } from "framer-motion";
import { components } from "../../data/components";
import ComponentCard from "./ComponentCard";

const ComponentDisplay = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="gradient-text">Component</span> Showcase
        </h1>
        <p className="text-lg text-white/70 max-w-2xl">
          Explore our collection of components and learn how to use them in your
          projects.
        </p>
      </motion.div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-secondary-800 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="space-y-8">
        {filteredComponents.length > 0 ? (
          filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-white/70">
              No components found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentDisplay;
