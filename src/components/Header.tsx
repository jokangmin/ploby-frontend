"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../recoil/authAtom";
//import JsonLd from "./JsonLd";

export default function Header() {
  // 만약 이 컴포넌트에서 로그인 상태를 변경해야 한다면 useSetRecoilState나 useRecoilState를 사용
  //const isLoggedIn = useRecoilValue(isLoggedInState);

  // const siteMetadata = {
  //   url: "https://www.your-ploby-site.com",
  //   logo: "https://www.your-ploby-site.com/penguin_logo.webp",
  //   name: "Ploby",
  // };

  return (
    //<JsonLd data={siteMetadata} />

    <header className="fixed top-0 w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Ploby 홈으로 이동">
          <Image
            src="/penguin_logo.webp"
            alt="Ploby Logo"
            width={30}
            height={30}
            priority
          />
          <span className="text-3xl font-bold text-ploby-100">Ploby</span>
        </Link>
        <nav aria-label="메인 메뉴">
          <ul className="flex items-center gap-14">
            <li>
              <Link href="/about">소개</Link>
            </li>
            <li>
              <Link href="/find-hobby">나의 취미 찾기</Link>
            </li>
            <li>
              <Link href="/community">커뮤니티</Link>
            </li>
            <li>
              {/* Recoil에서 가져온 isLoggedIn 상태에 따라 조건부 렌더링 */}
              {/* {isLoggedIn ? (
                <Link
                  href="/mypage"
                  className="bg-ploby-400 text-ploby-500 px-4 py-2 rounded-md hover:bg-ploby-300"
                >
                  마이페이지
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="bg-ploby-400 text-ploby-500 px-4 py-2 rounded-md hover:bg-ploby-300"
                >
                  로그인
                </Link>
              )} */}
              <Link
                  href="/login"
                  className="bg-ploby-400 text-ploby-500 px-4 py-2 rounded-md hover:bg-ploby-300"
                >
                로그인
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}