import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ComponentShowcase } from "@/components/sections/component-showcase";
import { Separator } from "@/components/ui/separator";

/**
 * 컴포넌트 쇼케이스 페이지
 */
export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="border-b border-border/40 bg-muted/50 py-12">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              컴포넌트 쇼케이스
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              shadcn/ui 컴포넌트의 모든 기능과 사용 예시를 확인하세요.
            </p>
          </div>
        </section>

        {/* 컨텐츠 */}
        <section className="container">
          <ComponentShowcase />
        </section>
      </main>
      <Footer />
    </div>
  );
}
