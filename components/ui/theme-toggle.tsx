"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Use resolvedTheme to get the actual theme after considering system preference
  const isLight = resolvedTheme === "light";

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="p-2 rounded border border-gray-500 hover:border-blue-600 transition-colors"
    >
      {isLight ? (
        <FaMoon className="text-yellow-100 w-6 h-6" />
      ) : (
        <FaSun className="text-yellow-100 w-6 h-6" />
      )}
    </button>
  );
}
