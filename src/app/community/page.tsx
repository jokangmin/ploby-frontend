// src/app/community/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

// 게시물 더미 데이터 타입
type Post = {
  id: number;
  title: string;
  category: string;
  type: string;
  thumbnail: string;
  date: string;
};

const dummyPosts: Post[] = Array.from({ length: 100 }).map((_, idx) => ({
  id: idx + 1,
  title: `게시물 ${idx + 1}`,
  category: ["보드게임", "파티", "푸드", "취미"][idx % 4],
  type: ["모집", "후기"][idx % 2],
  thumbnail: `https://picsum.photos/seed/${idx}/400/250`, // 샘플 이미지
  date: "2025-09-01",
}));

export default function CommunityPage() {
  const router = useRouter();
  const { theme } = useTheme();

  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(16);

  // 최초 데이터 로딩
  useEffect(() => {
    setPosts(dummyPosts.slice(0, visibleCount));
  }, [visibleCount]);

  // 무한 스크롤
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setVisibleCount((prev) => prev + 12);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 테마별 색상
  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const cardBg = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const hoverCard = theme === "dark" ? "hover:shadow-gray-700" : "hover:shadow-lg";

  return (
    <main className={`min-h-screen pt-20 transition-colors duration-300 ${bgClass}`}>
      {/* 상단 필터 영역 */}
      <div
        className={`sticky top-0 z-10 px-6 py-3 flex gap-4 items-center border-b ${cardBg} ${borderClass}`}
      >
        <select className={`border rounded-lg px-3 py-2 text-sm ${borderClass} ${bgClass}`}>
          <option>전체 카테고리</option>
          <option>보드게임</option>
          <option>파티</option>
          <option>푸드</option>
          <option>취미</option>
        </select>
        <select className={`border rounded-lg px-3 py-2 text-sm ${borderClass} ${bgClass}`}>
          <option>전체 유형</option>
          <option>모집</option>
          <option>후기</option>
        </select>
        <button className={`ml-auto border rounded-lg px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${borderClass}`}>
          최신순
        </button>
        <button className={`border rounded-lg px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${borderClass}`}>
          인기순
        </button>
      </div>

      {/* 게시물 리스트 (가운데 정렬) */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-[80%] mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => router.push(`/community/${post.id}`)}
              className={`cursor-pointer rounded-xl shadow-md overflow-hidden transition ${cardBg} ${hoverCard}`}
            >
              <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs text-ploby-100 font-semibold">{post.category}</span>
                <h2 className="text-lg font-bold mt-1">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 게시물 작성 버튼 (FAB) */}
      <button
        onClick={() => router.push("/community/new")}
        className="fixed bottom-6 right-6 bg-ploby-400 text-ploby-500 px-6 py-3 rounded-full shadow-lg hover:bg-ploby-300 transition"
      >
        + 글쓰기
      </button>
    </main>
  );
}
