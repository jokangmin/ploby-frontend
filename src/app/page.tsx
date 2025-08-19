"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // 클라이언트에서 마운트된 후에만 렌더링
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 마운트 전에는 아무것도 렌더링하지 않아 하이드레이션 오류 방지
  }

  // 동적으로 적용할 배경색 클래스 결정
  const sectionBgClass = theme === "dark" ? "bg-ploby-500" : "bg-ploby-400";
  const headingColorClass = theme === "dark" ? "text-gray-300" : "text-black";
  const textColorClass = theme === "dark" ? "text-gray-50" : "text-gray-700";

  return (
    <section className={`flex flex-col items-center justify-center py-20 ${sectionBgClass}`}>
      <h1 className={`text-4xl font-bold mb-4 ${headingColorClass}`}>
        플로비(Ploby)
      </h1>
      <p className={`text-lg ${textColorClass}`}>
        취미 기반 실시간 매칭 & 커뮤니티 플랫폼
      </p>
    </section>
  );
}