/**
 * 네비게이션 메뉴 항목
 * Header와 MobileNav에서 공유하는 단일 소스
 */
export const navLinks = [
  { label: "홈", href: "/" },
  { label: "컴포넌트", href: "/components" },
  { label: "폼 예시", href: "/form-example" },
  { label: "문서", href: "https://nextjs.org" },
  { label: "깃허브", href: "https://github.com" },
] as const;
