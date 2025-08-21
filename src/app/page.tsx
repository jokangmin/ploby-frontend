"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 다크모드 적용
  const sectionBgClass = theme === "dark" ? "bg-gray-900" : "bg-ploby-200";
  const headingColorClass = theme === "dark" ? "text-white" : "text-gray-900";
  const textColorClass = theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <main className={`min-h-screen ${sectionBgClass} transition-colors duration-300`}>
      {/* Top Banner Image */}
      <div className="w-full mt-16">
        <Image
          src="/images/hero/hobby_banner.webp"
          alt="플로비 메인 배너"
          width={1920}
          height={550}
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-extrabold mb-6 ${headingColorClass}`}
        >
          플로비(Ploby)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`max-w-xl text-lg mb-8 ${textColorClass}`}
        >
          취미 기반 <span className="font-semibold">실시간 매칭</span> &{" "}
          <span className="font-semibold">커뮤니티 플랫폼</span> 🚀
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-2xl bg-ploby-100 text-white font-semibold shadow-lg hover:bg-rose-300 transition"
          onClick={() => router.push("/find-hobby")}
        >
          지금 시작하기
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-14 max-w-6xl mx-auto">
        {[
          {
            title: "취미 매칭",
            desc: "비슷한 취향의 사람들과 실시간으로 연결됩니다.",
            icon: "🎯",
          },
          {
            title: "커뮤니티",
            desc: "관심사 기반 모임을 만들고 활동하세요.",
            icon: "💬",
          },
          {
            title: "추천 알고리즘",
            desc: "AI 기반으로 딱 맞는 취미 활동을 추천합니다.",
            icon: "🤖",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-2xl shadow-md border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className={`text-xl font-semibold mb-2 ${headingColorClass}`}>{f.title}</h3>
            <p className={`${textColorClass}`}>{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className={`text-3xl font-bold mb-6 ${headingColorClass}`}>
          당신의 취미, 지금 바로 Ploby에서 시작하세요
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-2xl bg-ploby-400 text-ploby-500 font-bold shadow-lg hover:bg-ploby-300 transition"
          onClick={() => router.push("/login")}
        >
          무료로 가입하기
        </motion.button>
      </section>
    </main>
  );
}
