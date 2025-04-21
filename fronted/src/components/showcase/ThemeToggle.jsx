import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={toggleTheme}
      className={`flex h-[30px] w-[60px] cursor-pointer rounded-full p-[2px] ${
        isDark ? "justify-end bg-primary-600" : "justify-start bg-primary-300"
      }`}
    >
      <motion.div
        className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isDark ? (
            <FiMoon className="text-primary-600" size={16} />
          ) : (
            <FiSun className="text-primary-400" size={16} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
