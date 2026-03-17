# CLAUDE.md

Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어(코드 표준 준수)

## 프로젝트 개요

이것은 Next.js 16 + React 19을 기반으로 한 모던 스타터 템플릿입니다. TypeScript, Tailwind CSS v4, shadcn/ui 컴포넌트로 구축되어 있으며, 프로덕션 환경에서 사용 가능한 수준의 완성도를 갖추고 있습니다. 폼 검증, 다크모드, 반응형 레이아웃의 동작 예시를 포함하고 있습니다.

## 주요 명령어

### 개발
- **개발 서버 실행**: `npm run dev` → http://localhost:3000에서 Next.js 시작
- **빌드**: `npm run build` → 프로덕션 빌드 생성
- **빌드된 앱 실행**: `npm start`
- **린트 검사**: `npm run lint` → ESLint 실행

## 기술 스택

- **Next.js 16**: App Router 사용 (Pages Router 아님)
- **React 19**: 최신 React 기능 및 API
- **TypeScript**: Strict 모드 활성화, `@/*` 경로 별칭 설정
- **Tailwind CSS v4**: 새로운 PostCSS 플러그인 (별도 설정 파일 불필요)
- **UI 컴포넌트**: shadcn/ui (Radix UI 원시 컴포넌트 + CVA 스타일링)
- **폼 처리**: react-hook-form + Zod 검증
- **아이콘**: Lucide React
- **테마**: next-themes (라이트/다크/시스템 모드)
- **알림**: Sonner (토스트 알림)
- **유틸리티**: clsx, tailwind-merge, date-fns, usehooks-ts

## 아키텍처 및 프로젝트 구조

### 디렉토리 구성

```
.
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 홈/랜딩 페이지
│   ├── layout.tsx                # 루트 레이아웃 (테마, 프로바이더)
│   ├── globals.css               # Tailwind v4를 이용한 글로벌 스타일
│   ├── components/               # 컴포넌트 쇼케이스 데모 페이지
│   └── form-example/             # 폼 검증 예시 페이지
├── components/                   # 재사용 가능한 React 컴포넌트
│   ├── ui/                       # shadcn/ui 기본 컴포넌트 (button, card, input 등)
│   ├── layout/                   # 레이아웃 컴포넌트 (header, footer, mobile-nav)
│   └── sections/                 # 페이지 섹션 (hero, features, tech-stack, cta)
├── public/                       # 정적 자산
├── tsconfig.json                 # TypeScript 설정 (Strict 모드)
├── eslint.config.mjs             # ESLint 설정 (Next.js + TypeScript)
├── postcss.config.mjs            # PostCSS (Tailwind v4 플러그인)
└── next.config.ts                # Next.js 설정
```

### 컴포넌트 조직 패턴

**UI 컴포넌트** (`components/ui/`):
- shadcn/ui에서 제공하는 저수준 원시 컴포넌트 (button, card, input, dialog 등)
- 최소한의 스타일링으로 조합 가능하게 설계됨
- 동적 클래스 병합을 위해 `cn()` 사용 (clsx + tailwind-merge)
- 예: `Button`, `Card`, `Input`, `Label`

**레이아웃 컴포넌트** (`components/layout/`):
- 헤더, 푸터, 네비게이션, 사이드바
- 상호작용이 필요할 경우 `"use client"` 마크
- UI 컴포넌트를 조합하여 구성

**섹션 컴포넌트** (`components/sections/`):
- 독립적인 페이지 섹션 (hero, features, CTA)
- 클라이언트 또는 서버 컴포넌트 모두 가능
- 레이아웃 및 UI 컴포넌트로 조합됨
- 예: `HeroSection`, `FeaturesSection`, `TechStackSection`

**페이지** (`app/*/page.tsx`):
- 섹션과 레이아웃을 조합하여 전체 페이지 구성
- 기본적으로 서버 렌더링됨
- 상호작용이 필요할 때만 `"use client"` 추가

### 핵심 아키텍처 패턴

**1. 기본적으로 서버 컴포넌트 사용**
- 페이지와 섹션은 클라이언트 상호작용이 필요하지 않으면 서버 컴포넌트
- Hook(useState, useForm 등)을 사용할 때만 `"use client"` 마크
- 예: `Header`는 클라이언트 컴포넌트 (네비게이션 상태 관리), 섹션은 서버 컴포넌트

**2. Tailwind CSS v4로 스타일링**
- Tailwind v4는 `@tailwindcss/postcss` 플러그인 사용 (별도 tailwind.config.ts 불필요)
- CSS 변수는 `app/globals.css`에서 `@theme` 지시어로 정의
- 다크모드는 CSS 변수로 구현 (라이트는 `:root`, 다크는 `.dark` 선택자)
- 모든 색상 토큰(primary, secondary, destructive 등)은 CSS 변수
- 조건부 클래스 병합을 위해 `cn()` 유틸리티 사용:
  ```typescript
  import { clsx } from "clsx";
  import { twMerge } from "tailwind-merge";

  const cn = (...classes: any[]) => twMerge(clsx(...classes));
  // 사용: cn("base-class", condition && "conditional-class")
  ```

**3. react-hook-form + Zod를 이용한 폼 처리**
- Zod로 검증 스키마 정의 (예: `const formSchema = z.object({ name: z.string().min(2) })`)
- `zodResolver`로 react-hook-form과 Zod 연결
- 스키마에서 TypeScript 타입 추출: `type FormData = z.infer<typeof formSchema>`
- `{...register("fieldName")}`로 입력 등록
- `errors.fieldName.message`로 오류 메시지 접근
- 전체 예시는 `app/form-example/page.tsx` 참조

**4. next-themes로 다크모드 구현**
- `app/layout.tsx`에서 `ThemeProvider`로 설정
- Attribute는 `"class"` (HTML의 `.dark` 클래스로 다크모드 제어)
- 기본값은 `"system"` (OS 설정 따라감)
- `ThemeToggle` 컴포넌트로 사용자가 테마 전환
- CSS 변수가 `:root`와 `.dark` 선택자 사이에서 자동 전환

**5. 클라이언트 상호작용 프로바이더**
- `ThemeProvider`: 다크모드 전환 활성화
- `TooltipProvider`: Tooltip 컴포넌트 필수 요구
- `Toaster`: Sonner 토스트 알림 (루트 레이아웃에 추가)

## 개발 패턴

### 새로운 페이지 추가

1. `app/new-page/page.tsx` 생성
2. 섹션 또는 기존 컴포넌트로 조합
3. 필요하면 `<Header>`, `<main>`, `<Footer>`로 감싸기
4. 예시:
```typescript
export default function NewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SectionComponent />
      </main>
      <Footer />
    </div>
  );
}
```

### 새로운 UI 컴포넌트 추가

1. `components/ui/new-component.tsx` 생성
2. `radix-ui` 패키지에서 원시 컴포넌트 임포트
3. Tailwind와 CVA(class-variance-authority)로 스타일링
4. 예시 구조:
```typescript
import * as React from "react";
import { cn } from "@/lib/utils"; // 또는 인라인 cn 함수

const NewComponent = React.forwardRef<
  HTMLElement,
  React.ComponentProps<...>
>(({ className, ...props }, ref) => (
  <element
    ref={ref}
    className={cn("base-class", className)}
    {...props}
  />
));
```

### 폼 처리하기

1. 명확한 검증 메시지(한국어 권장)로 Zod 스키마 정의
2. `zodResolver`와 함께 `useForm` 훅 사용
3. 입력 등록하고 오류 메시지 표시
4. async/await와 오류 처리로 폼 제출 처리
5. Sonner `toast`로 사용자 피드백 제공
6. `app/form-example/page.tsx` 예시 참조

### 스타일 가이드라인

- Tailwind 유틸리티 클래스를 직접 사용 (CSS 모듈 불필요)
- `container` 클래스로 콘텐츠 최대 폭 제어
- 색상에는 CSS 변수 사용: `bg-primary`, `text-foreground`, `border-border`
- 조건부 스타일은 `cn()` 유틸리티 사용
- 다크모드 색상은 CSS 변수로 자동 처리
- 반응형 접두사: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- 레이아웃 패턴: `flex`, `grid`, `gap-*` 간격 조정

### 테마 및 커스터마이제이션

- 모든 색상은 `app/globals.css`의 CSS 변수로 정의
- `:root` 또는 `.dark`의 변수 수정으로 색상 변경
- OKLch 색 공간 사용 (모던하고 시각적으로 균등)
- 사이드바, 차트, 테두리 반경 모두 커스터마이저블
- 예: `--primary: oklch(0.205 0 0)`는 주요 색상 정의

## 주요 작업

### 개발 서버 실행
```bash
npm run dev
```

### 린트 문제 확인
```bash
npm run lint
```

### 새로운 shadcn 컴포넌트 추가
이 프로젝트는 `radix-ui`와 `class-variance-authority`와 함께 shadcn/ui를 사용합니다. 기본 컴포넌트들(button, card, input 등)이 이미 설치되어 있습니다. 추가 컴포넌트가 필요하면, 기존 패턴을 따라 `components/ui/`에 수동으로 생성합니다.

### 색상/테마 커스터마이제이션
`app/globals.css`의 `:root` (라이트 모드) 및 `.dark` (다크 모드)에서 CSS 변수 수정

## 코딩 표준

- **TypeScript**: Strict 모드 활성화, 모든 props에 적절한 타입 정의
- **컴포넌트명**: React 컴포넌트는 PascalCase (예: `Header.tsx`, `HeroSection.tsx`)
- **유틸리티명**: 함수와 유틸리티는 camelCase (예: `formatDate.ts`)
- **CSS 클래스**: Tailwind 유틸리티만 사용
- **Props**: React.ComponentProps 또는 인라인 interface로 정의
- **접근성**: 의미론적 HTML 사용, 필요시 aria 속성, 이미지 alt 텍스트

## 파일 네이밍 컨벤션

- 컴포넌트: PascalCase (예: `Header.tsx`, `HeroSection.tsx`)
- 유틸리티/함수: camelCase (예: `formatDate.ts`)
- 타입: PascalCase 또는 인라인 (예: `type Props = {...}`)
- CSS: `globals.css`의 글로벌 스타일, 별도 CSS 파일 불필요
- 페이지: 라우트 디렉토리 하위 `page.tsx` (Next.js 컨벤션)

## 중요 사항

- **Next.js App Router**: 이 프로젝트는 App Router를 사용합니다 (Pages Router 아님). 라우트는 `app/` 디렉토리 구조로 정의됩니다.
- **TypeScript Strict 모드**: 모든 컴포넌트는 적절한 타입 정의가 필요합니다.
- **빌드 설정 불필요**: Tailwind CSS v4와 Next.js가 모든 번들링을 자동으로 처리합니다.
- **CSS 기반 다크모드**: `<html>` 요소의 `.dark` 클래스를 사용합니다.
- **폼은 클라이언트 컴포넌트**: 폼이 있는 페이지는 `"use client"` 지시어 필요합니다.
- **검증된 라이브러리 사용**: 유틸리티 구현 시 검증된 유명 라이브러리 우선 사용 (참고: `feedback_use_validated_libraries.md`)

## Git 및 커밋

- 커밋 메시지는 한국어로 작성
- 커밋은 집중되고 원자적으로 유지
- "무엇"보다 "왜"를 설명하는 설명적인 메시지 포함

