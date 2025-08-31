// src/app/find-hobby/page.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FindHobbyPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [textAnswer, setTextAnswer] = useState(""); // 모든 text 질문 입력값 관리

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 다크모드 색상 클래스
  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const cardBgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const inputBg =
    theme === "dark"
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
      : "bg-white border-gray-300 text-gray-900";

  // 질문 리스트
  const questions = [
    { q: "주말에 가장 하고 싶은 활동은 무엇인가요?", type: "text" },
    { q: "실내/실외 중 어떤 활동을 선호하나요?", type: "choice", options: ["실내", "실외"] },
    { q: "혼자보다는 함께하는 활동을 좋아하시나요?", type: "choice", options: ["혼자", "함께"] },
    { q: "새로운 기술을 배우는 걸 즐기시나요?", type: "choice", options: ["예", "아니오"] },
    { q: "운동을 좋아하시나요?", type: "choice", options: ["네", "아니요"] },
    { q: "여행을 간다면 어떤 목적지를 선호하시나요?", type: "text" },
  ];

  const current = questions[step];

  const handleNext = (answer: string) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[step] = answer;
      return updated;
    });
    setTextAnswer(""); // text input 초기화

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert("AI가 당신의 취미를 분석 중입니다! 🚀");
      console.log("답변:", answers);
    }
  };

  return (
    <main className={`relative flex items-center justify-center min-h-screen`}>

      {/* 배경 이미지 */}
      <Image
        src="/images/hero/hobby_find.webp"
        alt="플로비 취미 찾기 배경"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className={`relative w-full max-w-xl p-8 rounded-2xl shadow-lg ${cardBgClass}`}>
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-extrabold ${textPrimary}`}>나의 취미 찾기</h1>
          <p className={`mt-2 ${textSecondary}`}>AI와 함께하는 취미 탐색 여정 ✨</p>
        </div>

        {/* 질문 */}
        <div className="space-y-6">
          <h2 className={`text-lg font-semibold ${textPrimary}`}>{current.q}</h2>

          {current.type === "choice" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.options?.map((choice, i) => (
                <button
                  key={i}
                  onClick={() => handleNext(choice)}
                  className="py-3 px-4 bg-ploby-400 hover:bg-ploby-300 text-ploby-500 font-bold rounded-lg shadow-md transition"
                >
                  {choice}
                </button>
              ))}
            </div>
          )}

          {current.type === "text" && (
            <div className="flex gap-2">
              <input
                type="text"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="답변을 입력하세요..."
                className={`flex-1 border rounded-lg px-4 py-2 text-sm ${inputBg}`}
              />
              <button
                onClick={() => textAnswer.trim() && handleNext(textAnswer)}
                className="px-4 py-2 bg-ploby-100 text-ploby-500 font-bold rounded-lg hover:bg-ploby-200 transition"
              >
                다음
              </button>
            </div>
          )}
        </div>

        {/* 진행 상황 */}
        <div className="mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-ploby-100 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className={`mt-2 text-sm text-center ${textSecondary}`}>
            {step + 1} / {questions.length} 질문
          </p>
        </div>
      </div>
    </main>
  );
}
