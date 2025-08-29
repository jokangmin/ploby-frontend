// src/app/community/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";

// 더미 게시물 데이터
const dummyPosts = Array.from({ length: 100 }).map((_, idx) => ({
  id: idx + 1,
  title: `게시물 ${idx + 1}`,
  category: ["보드게임", "파티", "푸드", "취미"][idx % 4],
  type: ["모집", "후기"][idx % 2],
  thumbnail: `https://picsum.photos/seed/${idx}/800/400`,
  content: `이것은 게시물 ${idx + 1}의 상세 내용입니다.\n\n여기에는 작성자가 쓴 본문 텍스트, 모집 인원, 장소, 일정 등의 상세 정보가 들어갑니다.\n\n✨ 함께하면 더 즐거운 시간을 보낼 수 있어요!`,
  date: "2025-09-01",
  author: `작성자${idx + 1}`,
}));

export default function PostDetailPage() {
  const params = useParams();
  const { theme } = useTheme();
  const id = Number(params?.id);

  // 해당 게시물 찾기
  const post = dummyPosts.find((p) => p.id === id);

  // 댓글 상태 관리
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <main className="min-h-screen pt-28 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">
          해당 게시물을 찾을 수 없습니다.
        </p>
      </main>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  // 테마별 색상
  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const cardBg = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <main className={`min-h-screen px-6 py-10 pt-28 transition-colors duration-300 ${bgClass}`}>
      {/* 게시물 상세 카드 */}
      <div className={`max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden ${cardBg}`}>
        {/* 대표 이미지 */}
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-64 object-cover"
        />

        {/* 게시물 내용 */}
        <div className="p-6">
          <div className={`flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400`}>
            <span className="px-2 py-1 bg-ploby-200 text-ploby-100 rounded-md">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="font-medium">by {post.author}</span>
          </div>

          <h1 className="text-2xl font-bold mt-3">{post.title}</h1>
          <p className="mt-4 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div
        className={`max-w-3xl mx-auto mt-8 rounded-xl shadow-md p-6 ${cardBg} border ${borderClass}`}
      >
        <h2 className="text-lg font-semibold mb-4">💬 댓글</h2>

        {/* 댓글 리스트 */}
        <div className="space-y-3 mb-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              아직 댓글이 없습니다. 첫 댓글을 남겨보세요!
            </p>
          ) : (
            comments.map((c, i) => (
              <div
                key={i}
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-800 dark:text-gray-200"
              >
                {c}
              </div>
            ))
          )}
        </div>

        {/* 댓글 입력 */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요..."
            className={`flex-1 border rounded-lg px-4 py-2 text-sm focus:ring-indigo-400 focus:border-indigo-400 
              bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
          >
            등록
          </button>
        </div>
      </div>
    </main>
  );
}
