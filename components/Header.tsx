// components/Header.tsx
"use client"; // Mark as a client component because we'll use hooks

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="p-4 flex justify-between items-center bg-gray-800">
      <h1 className="text-xl font-bold text-white">
        Direktor Tournament Manager
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-green-500 text-black rounded"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}
