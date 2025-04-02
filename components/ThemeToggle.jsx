"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Estado por defecto
  const [isMounted, setIsMounted] = useState(false); // Estado para evitar el error de hidratación

  useEffect(() => {
    setIsMounted(true); // Marcamos como montado
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Evitamos aplicar el tema antes de la hidratación
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  if (!isMounted) return null; // Evitamos el error de hidratación

  return (
    <button
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}
