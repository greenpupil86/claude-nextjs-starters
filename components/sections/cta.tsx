import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * 하단 Call To Action 섹션
 * 강조 배경 + 제목 + 버튼 2개
 */
export function CTASection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
          {/* 배경 그라디언트 효과 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* 콘텐츠 */}
          <div className="relative flex flex-col items-center gap-8 text-center">
            {/* 제목 */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
                지금 바로 시작하세요
              </h2>
              <p className="mt-4 text-lg text-white/80">
                몇 분 안에 프로덕션 레디 프로젝트를 만들어보세요.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                프로젝트 생성
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                더 알아보기
              </Button>
            </div>

            {/* 추가 정보 */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/60">
                이미 개발자들이 선택한 스타터킷
              </p>
              <div className="mt-4 flex justify-center gap-8 text-white">
                <div>
                  <p className="font-semibold">1000+</p>
                  <p className="text-xs text-white/60">다운로드</p>
                </div>
                <div>
                  <p className="font-semibold">99%</p>
                  <p className="text-xs text-white/60">만족도</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
