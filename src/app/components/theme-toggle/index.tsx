/** @jsxImportSource @emotion/react */
"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  // Theme button hidden for now
  return null;

  /*
  const { theme, toggleTheme } = useTheme();

  return (

    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      className="p-2 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 shadow-md focus:outline-none"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        color: "var(--text-primary)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <svg
            className="w-5 h-5 text-amber-300 transition-transform duration-300 hover:rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-indigo-600 transition-transform duration-300 -rotate-12 hover:rotate-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
    </button>
  );
  */
}

