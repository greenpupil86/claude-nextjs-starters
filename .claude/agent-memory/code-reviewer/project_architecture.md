---
name: 프로젝트 아키텍처 패턴
description: claude-nextjs-starters 프로젝트의 컴포넌트 구조, 주요 패턴, 반복적으로 관찰된 사항
type: project
---

이 프로젝트는 Next.js 16 App Router 기반 스타터킷으로 아래 패턴을 일관되게 따른다.

**컴포넌트 계층:**
- `components/ui/` - shadcn/ui 원시 컴포넌트 (CVA + Radix UI 기반)
- `components/layout/` - Header, Footer, MobileNav (레이아웃 담당)
- `components/sections/` - HeroSection, FeaturesSection 등 페이지 섹션
- `app/*/page.tsx` - 섹션을 조합하는 최상위 페이지

**"use client" 사용 현황:**
- Header, MobileNav, ThemeToggle, ComponentShowcase, Sheet, Dialog, DropdownMenu에 사용
- HeroSection, FeaturesSection, TechStackSection, CTASection, Footer는 서버 컴포넌트

**폼 처리:**
- `app/form-example/page.tsx`: react-hook-form + Zod 패턴 구현
- age 필드가 `z.string().refine()` 방식 사용 (코드 예시와 불일치 - 예시에는 `z.coerce.number()` 권장)

**주요 발견 이슈:**
1. `navLinks` 배열이 Header와 MobileNav에 중복 정의됨
2. Footer의 `href="#"` 플레이스홀더 링크
3. `Header`가 "use client"이지만 실제 상태나 훅 미사용 (MobileNav/ThemeToggle은 자체적으로 클라이언트)
4. `onSubmit` 함수에서 `try-catch`가 있지만 내부 로직에서 실제 throw가 없어 catch 블록 미도달
5. `ComponentShowcase`의 이메일 input id가 form-example 페이지와 충돌 가능성 (같은 페이지에서는 아님)
6. `Button` variant "default"에 `[a]:hover:bg-primary/80` - 새로운 Tailwind v4 selector 문법

**Why:** 이 패턴 목록은 향후 리뷰에서 동일 이슈를 빠르게 식별하기 위해 기록.
**How to apply:** 다음 리뷰에서 위 이슈들이 수정되었는지 확인하고, 같은 패턴의 신규 코드에서 재발 여부 체크.
