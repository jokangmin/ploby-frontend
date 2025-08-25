# 📚 Ploby: 취미 기반 소셜 매칭 플랫폼

## 💡 프로젝트 소개

**Ploby**는 사용자들이 자신의 취미(사진, 드로잉, 음악, 운동, 게임 등)를 공유하고, 비슷한 취미를 가진 사람들과 실시간으로 소통하며 관계를 맺을 수 있는 플랫폼입니다. 실시간 채팅, 주제별 채팅방, 그리고 AI 기반 추천 시스템을 통해 사용자 경험을 극대화하는 것을 목표로 합니다.

## ✨ 주요 기능

  * **회원가입/로그인**: JWT 기반 인증 시스템으로 보안을 강화했으며, 이메일과 소셜 로그인(Google, GitHub)을 지원합니다.
  * **취미 프로필**: 사용자별로 여러 개의 취미를 등록하고 수정할 수 있는 기능을 제공합니다.
  * **콘텐츠 피드**: 취미별로 사진, 글, 영상 링크 등을 업로드하고, 좋아요 및 댓글로 소통할 수 있습니다. TanStack Query를 활용한 무한 스크롤 기능을 구현합니다.
  * **실시간 채팅**: WebSocket(Socket.io) 기반의 실시간 채팅 기능을 통해 취미별 오픈 채팅방과 1:1 매칭 채팅을 지원합니다.
  * **추천 알고리즘**: 같은 취미, 같은 지역, 같은 시간대 활동하는 유저를 추천하고, 바로 채팅을 시작할 수 있는 버튼을 제공합니다.
  * **실시간 알림**: 새로운 채팅 메시지, 댓글, 좋아요 등 다양한 알림을 웹소켓 푸시를 통해 전달합니다.

## 🛠️ 기술 스택

### **Frontend**

  * **프레임워크**: Next.js (App Router)
  * **스타일링**: Tailwind CSS
  * **상태 관리**: Recoil
  * **데이터 페칭**: TanStack Query
  * **기타**: Framer Motion, Axios, next-themes

### **Backend**

  * **프레임워크**: NestJS
  * **데이터베이스**: MySQL
  * **ORM**: Prisma
  * **실시간 통신**: Socket.io
  * **인증**: JWT

## 📂 파일 구조

### **Frontend**

```
src/
├─ app/                 # Next.js App Router
├─ components/          # 재사용 가능한 UI 컴포넌트
├─ hooks/               # 커스텀 훅
├─ recoil/              # Recoil 상태 관리 아톰
├─ services/            # TanStack Query API 훅
├─ styles/              # 전역 스타일 및 Tailwind CSS
├─ types/               # 타입 정의
└─ utils/               # 유틸리티 함수
```

### **Backend**

```
src/
├─ modules/             # 기능별 모듈 (Auth, User, Hobby 등)
│   ├─ auth/
│   ├─ user/
│   ├─ hobby/
│   ├─ chat/
│   ├─ post/
├─ common/              # 공통 모듈 (DTO, Guard, Filter 등)
├─ prisma/              # Prisma 스키마 및 설정
└─ main.ts              # 애플리케이션 진입점
```

## 📜 데이터베이스 ERD (초안)

### **User**

  - `id` (PK)
  - `email`
  - `password_hash`
  - `nickname`
  - `avatar_url`
  - `created_at`
  - `updated_at`

### **Hobby**

  - `id` (PK)
  - `name`
  - `description`

### **UserHobby**

  - `id` (PK)
  - `user_id` (FK → User.id)
  - `hobby_id` (FK → Hobby.id)

### **Post**

  - `id` (PK)
  - `user_id` (FK → User.id)
  - `hobby_id` (FK → Hobby.id)
  - `content`
  - `created_at`
  - `updated_at`

### **Comment**

  - `id` (PK)
  - `post_id` (FK → Post.id)
  - `user_id` (FK → User.id)
  - `content`
  - `created_at`

### **ChatRoom**

  - `id` (PK)
  - `type` (enum: 'public', 'private')
  - `hobby_id` (nullable, FK → Hobby.id)

### **ChatMessage**

  - `id` (PK)
  - `room_id` (FK → ChatRoom.id)
  - `sender_id` (FK → User.id)
  - `message`
  - `created_at`

## 🚀 시작하기

### **초기 환경 세팅**

1.  **Frontend**: Next.js + Tailwind + Recoil + TanStack Query
2.  **Backend**: NestJS + Prisma + MySQL + Socket.io

### **프론트엔드 실행**

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### **백엔드 실행 (Prisma 설정 포함)**

```bash
# 의존성 설치
npm install

# Prisma 마이그레이션 (DB에 스키마 적용)
npx prisma migrate dev

# 개발 서버 실행
npm run start:dev
```

## 🔗 API 명세 (예시)
### **Auth**

  - `POST /auth/register`
  - `POST /auth/login`
  - `GET /auth/me`

### **Hobby**

  - `GET /hobbies`
  - `POST /user/hobbies`

### **Post**

  - `GET /posts?hobby_id=1`
  - `POST /posts`
  - `POST /posts/:id/comments`

### **Chat (WebSocket)**

  - `WS /chat/join-room`
  - `WS /chat/send-message`

## 🧑‍💻 기여자

이 프로젝트에 기여하고 싶으시면 언제든지 연락 주세요\!
