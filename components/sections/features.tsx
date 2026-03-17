import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Palette,
  Moon,
  Smartphone,
  Code2,
  Package,
} from "lucide-react";

/**
 * 기능 소개 섹션
 * 6개 기능을 Card 그리드로 표시
 */
export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "빠른 성능",
      description: "Next.js 16의 최신 최적화로 번개처럼 빠른 페이지 로드",
    },
    {
      icon: Palette,
      title: "아름다운 UI",
      description: "shadcn/ui와 Tailwind CSS로 만든 현대적인 디자인",
    },
    {
      icon: Moon,
      title: "다크모드",
      description: "next-themes로 시스템 설정과 함께 다크모드 자동 전환",
    },
    {
      icon: Smartphone,
      title: "반응형 디자인",
      description: "모바일부터 데스크톱까지 완벽한 반응형 레이아웃",
    },
    {
      icon: Code2,
      title: "TypeScript",
      description: "완전한 TypeScript 타입 지원으로 안전한 개발",
    },
    {
      icon: Package,
      title: "프로덕션 레디",
      description: "즉시 배포 가능한 완성된 스타터 구조",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container">
        {/* 섹션 제목 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            강력한 기능
          </h2>
          <p className="mt-4 text-muted-foreground">
            프로덕션 개발을 위한 모든 것이 준비되어 있습니다
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
