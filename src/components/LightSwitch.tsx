import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // On component mount, check the saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <div>
      <input
        type="checkbox"
        id="theme-switch"
        className="hidden"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label
        htmlFor="theme-switch"
        className="flex cursor-pointer items-center"
      >
        <span className="relative inline-block h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-800">
          <span
            className={`absolute inset-1 transition-transform duration-300 ease-in-out ${
              isDarkMode ? "translate-x-5" : "translate-x-1"
            }`}
          >
            <svg
              className="h-4 w-4 -translate-x-1 transform rounded-full bg-indigo-500 text-white shadow"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
          </span>
        </span>
        <span
          className={`mx-2 transition-transform duration-500 ease-in-out ${
            isDarkMode ? "rotate-[360deg]" : ""
          }`}
        >
          {isDarkMode ? (
            <Icon
              icon="material-symbols:dark-mode-outline-rounded"
              className="hover:animate-spin"
            />
          ) : (
            <Icon
              icon="material-symbols:light-mode-outline"
              className="hover:animate-spin"
            />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
