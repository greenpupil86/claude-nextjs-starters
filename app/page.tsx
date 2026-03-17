import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { TechStackSection } from "@/components/sections/tech-stack";
import { CTASection } from "@/components/sections/cta";

/**
 * 홈 페이지 (랜딩 페이지)
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
