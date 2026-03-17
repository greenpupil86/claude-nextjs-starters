import { Badge } from "@/components/ui/badge";

/**
 * 기술 스택 섹션
 * 사용된 라이브러리와 도구들을 Badge로 표시
 */
export function TechStackSection() {
  const techStack = [
    // 코어 프레임워크
    { name: "Next.js 16", category: "프레임워크" },
    { name: "React 19", category: "프레임워크" },
    { name: "TypeScript", category: "언어" },

    // 스타일링
    { name: "Tailwind CSS v4", category: "스타일" },
    { name: "shadcn/ui", category: "컴포넌트" },
    { name: "Radix UI", category: "컴포넌트" },

    // UI/UX
    { name: "Lucide Icons", category: "아이콘" },
    { name: "next-themes", category: "테마" },

    // 유틸리티
    { name: "date-fns", category: "유틸" },
    { name: "usehooks-ts", category: "훅" },
    { name: "clsx", category: "유틸" },
    { name: "tailwind-merge", category: "유틸" },

    // 폼 & 검증 (Phase 3)
    { name: "react-hook-form", category: "폼" },
    { name: "zod", category: "검증" },
  ];

  const categories = Array.from(new Set(techStack.map((tech) => tech.category)));
  const categoryColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    프레임워크: "default",
    언어: "secondary",
    스타일: "secondary",
    컴포넌트: "secondary",
    아이콘: "outline",
    테마: "outline",
    유틸: "outline",
    훅: "outline",
    폼: "outline",
    검증: "outline",
  };

  return (
    <section className="w-full py-20 sm:py-32 bg-muted/50">
      <div className="container">
        {/* 섹션 제목 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            기술 스택
          </h2>
          <p className="mt-4 text-muted-foreground">
            검증된 라이브러리와 최신 기술로 구성됨
          </p>
        </div>

        {/* 카테고리별 기술 스택 */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <Badge key={tech.name} variant={categoryColors[category]}>
                      {tech.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
