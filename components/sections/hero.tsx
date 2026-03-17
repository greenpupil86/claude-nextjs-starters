import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * 랜딩 페이지 Hero 섹션
 * Badge + 제목 + 부제목 + CTA 버튼 + 그라디언트 배경
 */
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-32 lg:py-48">
      {/* 그라디언트 배경 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
        <div className="absolute left-1/4 bottom-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="container flex flex-col items-center justify-center gap-8 text-center">
        {/* Badge */}
        <Badge variant="secondary" className="px-4 py-1.5">
          ✨ Next.js 16 + React 19
        </Badge>

        {/* 제목 */}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          모던 웹을 위한{" "}
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            완벽한 스타터킷
          </span>
        </h1>

        {/* 부제목 */}
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Tailwind CSS, shadcn/ui, 다크모드 지원이 포함된 프로덕션 레디 스타터.
          즉시 개발을 시작하세요.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
          <Button size="lg" className="px-8">
            시작하기
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            문서 읽기
          </Button>
        </div>

        {/* 통계 */}
        <div className="mt-8 grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-bold sm:text-3xl">10+</p>
            <p className="text-xs text-muted-foreground">shadcn 컴포넌트</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-bold sm:text-3xl">4</p>
            <p className="text-xs text-muted-foreground">검증된 훅</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-bold sm:text-3xl">100%</p>
            <p className="text-xs text-muted-foreground">TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
}
