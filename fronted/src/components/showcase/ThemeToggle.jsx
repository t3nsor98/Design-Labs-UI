import React, { useCallback, useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  // initialize from localStorage or document class
  const getInitialIsDark = () => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
    } catch {
      // ignore localStorage access errors
    }
    return document.documentElement.classList.contains("dark");
  };

  const [isDark, setIsDark] = useState(getInitialIsDark);

  // apply theme to document and persist
  const applyTheme = useCallback((dark) => {
    if (dark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {
        // ignore
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {
        // ignore
      }
    }
    // dispatch a simple event so other components can sync
    window.dispatchEvent(new CustomEvent("dlui:theme-change", { detail: { isDark: dark } }));
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      applyTheme(next);
      return next;
    });
  };

  // add listeners once (sync across tabs/components)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "theme") {
        const next = e.newValue === "dark";
        setIsDark(next);
      }
    };

    const onCustom = (e) => {
      if (e && e.detail && typeof e.detail.isDark === "boolean") {
        setIsDark(e.detail.isDark);
      }
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("dlui:theme-change", onCustom);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("dlui:theme-change", onCustom);
    };
  }, []);

  // apply theme whenever isDark changes
  useEffect(() => {
    applyTheme(isDark);
  }, [isDark, applyTheme]);

  return (
    <div
      onClick={toggleTheme}
      className={`flex h-[30px] w-[60px] cursor-pointer rounded-full p-[2px] ${
        isDark ? "justify-end bg-primary-600" : "justify-start bg-primary-300"
      }`}
    >
      <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white">
        <div>
          {isDark ? (
            <FiMoon className="text-primary-600" size={16} />
          ) : (
            <FiSun className="text-primary-400" size={16} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
