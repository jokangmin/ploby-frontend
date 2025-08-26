// src/app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 다크모드 색상 클래스
  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const cardBgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const inputBg = theme === "dark" ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900";

  return (
    <main className={`flex items-center justify-center min-h-screen ${bgClass} transition-colors duration-300`}>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-lg transition-colors duration-300 ${cardBgClass}`}>
        {/* 로고 / 헤더 */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-extrabold ${textPrimary}`}>로그인</h1>
          <p className={`mt-2 ${textSecondary}`}>Ploby에 오신 걸 환영합니다 🚀</p>
        </div>

        {/* 로그인 폼 */}
        <form className="space-y-6">
          <div>
            <label htmlFor="id" className={`block text-sm font-medium ${textSecondary}`}>
              아이디
            </label>
            <input
              type="text"
              id="id"
              placeholder="아이디를 입력하세요"
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-ploby-400 focus:border-ploby-400 sm:text-sm ${inputBg}`}
            />
          </div>

          <div>
            <label htmlFor="password" className={`block text-sm font-medium ${textSecondary}`}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-ploby-400 focus:border-ploby-400 sm:text-sm ${inputBg}`}
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-ploby-400 hover:bg-ploby-300 text-ploby-500 font-bold rounded-lg shadow-md transition"
          >
            로그인
          </button>
        </form>

        {/* 회원가입 CTA */}
        <p className={`mt-6 text-center text-sm ${textSecondary}`}>
          아직 계정이 없으신가요?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="text-ploby-100 hover:underline font-semibold"
          >
            회원가입
          </button>
        </p>
      </div>
    </main>
  );
}
