"use client";

import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary text-[#FFA69E]">Ploby</h1>
        <nav>
          <ul className="flex gap-4">
            <li>홈</li>
            <li>취미 찾기</li>
            <li>커뮤니티</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
