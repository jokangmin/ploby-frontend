// src/app/signup/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const isPasswordMismatch =
    password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword;

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
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-extrabold ${textPrimary}`}>회원가입</h1>
          <p className={`mt-2 ${textSecondary}`}>
            취미 기반 <span className="font-semibold">소셜 매칭 플랫폼</span> Ploby 🚀
          </p>
        </div>

        {/* 회원가입 폼 */}
        <form className="space-y-6">
          {/* 아이디 */}
          <div>
            <label htmlFor="id" className={`block text-sm font-medium ${textSecondary}`}>
              아이디
            </label>
            <input
              type="id"
              id="id"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-ploby-400 focus:border-ploby-400 sm:text-sm ${inputBg}`}
            />
          </div>

          {/* 닉네임 */}
          <div>
            <label htmlFor="nickname" className={`block text-sm font-medium ${textSecondary}`}>
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              placeholder="닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-ploby-400 focus:border-ploby-400 sm:text-sm ${inputBg}`}
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label htmlFor="password" className={`block text-sm font-medium ${textSecondary}`}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm sm:text-sm ${inputBg} ${
                isPasswordMismatch
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "focus:ring-ploby-400 focus:border-ploby-400"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={isPasswordMismatch}
            />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <label htmlFor="confirmPassword" className={`block text-sm font-medium ${textSecondary}`}>
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="비밀번호를 한 번 더 입력하세요"
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm sm:text-sm ${inputBg} ${
                isPasswordMismatch
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "focus:ring-ploby-400 focus:border-ploby-400"
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-invalid={isPasswordMismatch}
              aria-describedby={isPasswordMismatch ? "password-error" : undefined}
            />
            {isPasswordMismatch && (
              <p className="text-red-500 text-sm mt-1">비밀번호가 일치하지 않습니다.</p>
            )}
          </div>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-ploby-400 hover:bg-ploby-300 text-ploby-500 font-bold rounded-lg shadow-md transition"
            disabled={isPasswordMismatch || password.length === 0 || id.length === 0}
          >
            가입하기
          </button>
        </form>

        {/* 로그인 CTA */}
        <p className={`mt-6 text-center text-sm ${textSecondary}`}>
          이미 계정이 있으신가요?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-ploby-100 hover:underline font-semibold"
          >
            로그인
          </button>
        </p>
      </div>
    </main>
  );
}
