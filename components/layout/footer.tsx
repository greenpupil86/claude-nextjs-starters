import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";

/**
 * 푸터 컴포넌트 (서버 컴포넌트)
 */
export function Footer() {
  const currentYear = formatDate(new Date(), "yyyy");

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <Separator className="mb-8" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
          {/* 브랜드 정보 */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Next Starter</h3>
            <p className="text-xs text-muted-foreground">
              Next.js 16 + React 19 기반의 모던 웹 스타터킷
            </p>
          </div>

          {/* 링크 그룹 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-3">문서</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  shadcn/ui
                </a>
              </li>
            </ul>
          </div>

          {/* 링크 그룹 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-3">리소스</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vercel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 저작권 */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Next Starter. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
