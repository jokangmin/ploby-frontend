"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();


  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-50";

  return (
    <footer className={`p-4 text-center transition-colors duration-300 ${bgClass}`}>
      <p>© 2025 Ploby. All rights reserved.</p>

      {/* 다크모드 토글 버튼 */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mt-2 px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:opacity-80 transition"
      >
        {theme === "dark" ? "라이트 모드 적용" : "다크 모드 적용"}
      </button>
    </footer>
  );
}
