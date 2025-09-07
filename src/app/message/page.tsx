// src/app/message/page.tsx
"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function MessagePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "me", text: "안녕하세요 👋" },
    { id: 2, sender: "other", text: "반가워요! 🚀" },
    { id: 3, sender: "me", text: "메시지 페이지 UI 테스트 중입니다." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 다크모드 색상 클래스
  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const sidebarBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const chatBg = theme === "dark" ? "bg-gray-700" : "bg-gray-100";
  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "me", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <main className={`flex min-h-screen ${bgClass} transition-colors duration-300 pt-20`}>
      {/* 사이드바 (유저 목록) */}
      <aside className={`w-64 p-4 border-r ${sidebarBg} border-gray-300 dark:border-gray-600`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-lg font-bold ${textPrimary}`}>대화 목록</h2>
          {/* 다크모드 토글 */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 hover:opacity-80 transition"
          >
            {theme === "dark" ? "라이트" : "다크"}
          </button>
        </div>
        <ul className="space-y-3">
          <li className={`${textPrimary} font-medium cursor-pointer hover:underline`}>
            사용자 A
          </li>
          <li className={`${textPrimary} font-medium cursor-pointer hover:underline`}>
            사용자 B
          </li>
          <li className={`${textPrimary} font-medium cursor-pointer hover:underline`}>
            사용자 C
          </li>
        </ul>
      </aside>

      {/* 채팅창 */}
      <section className="flex-1 flex flex-col">
        {/* 채팅 헤더 */}
        <div className={`px-4 py-3 border-b ${sidebarBg} border-gray-300 dark:border-gray-600`}>
          <h2 className={`font-bold ${textPrimary}`}>사용자 A와의 대화</h2>
        </div>

        {/* 채팅 메시지 영역 */}
        <div className={`flex-1 overflow-y-auto p-4 space-y-3 ${chatBg}`}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`px-4 py-2 rounded-lg shadow text-sm ${
                  msg.sender === "me"
                    ? "bg-ploby-400 text-ploby-500"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* 입력창 */}
        <div className={`p-4 border-t ${sidebarBg} border-gray-300 dark:border-gray-600 flex`}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="메시지를 입력하세요..."
            className={`flex-1 px-4 py-2 rounded-lg border focus:ring-ploby-400 focus:border-ploby-400 ${textPrimary} ${theme === "dark" ? "bg-gray-700 border-gray-600 placeholder-gray-400" : "bg-white border-gray-300 placeholder-gray-500"}`}
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-ploby-400 hover:bg-ploby-300 text-ploby-500 font-bold rounded-lg shadow transition"
          >
            전송
          </button>
        </div>
      </section>
    </main>
  );
}
