"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

/**
 * 폼 검증 스키마 (Zod)
 */
const formSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다"),
  email: z.string().email("유효한 이메일을 입력해주세요"),
  age: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !isNaN(num) && num >= 18 && num <= 120;
  }, "18세 이상 120세 이하여야 합니다"),
  website: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, "유효한 URL을 입력해주세요"),
});

type FormData = z.infer<typeof formSchema>;

/**
 * 폼 검증 예시 페이지
 */
export default function FormExamplePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      // 시뮬레이션: 0.5초 대기
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitted(data);
      toast.success("폼이 성공적으로 제출되었습니다!");
      reset();
    } catch (error) {
      toast.error("폼 제출 중 오류가 발생했습니다");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="border-b border-border/40 bg-muted/50 py-12">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              폼 검증 예시
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              react-hook-form + zod를 사용한 폼 검증 예시
            </p>
          </div>
        </section>

        {/* 콘텐츠 */}
        <section className="container py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 폼 */}
            <Card>
              <CardHeader>
                <CardTitle>사용자 정보 폼</CardTitle>
                <CardDescription>
                  필수 항목을 작성하고 제출해주세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* 이름 필드 */}
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* 이메일 필드 */}
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* 나이 필드 */}
                  <div className="space-y-2">
                    <Label htmlFor="age">나이</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      {...register("age")}
                      aria-invalid={!!errors.age}
                    />
                    {errors.age && (
                      <p className="text-sm text-destructive">
                        {errors.age.message}
                      </p>
                    )}
                  </div>

                  {/* 웹사이트 필드 (선택사항) */}
                  <div className="space-y-2">
                    <Label htmlFor="website">웹사이트 (선택사항)</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://example.com"
                      {...register("website")}
                      aria-invalid={!!errors.website}
                    />
                    {errors.website && (
                      <p className="text-sm text-destructive">
                        {errors.website.message}
                      </p>
                    )}
                  </div>

                  {/* 제출 버튼 */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "제출 중..." : "제출하기"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 제출 결과 */}
            <Card>
              <CardHeader>
                <CardTitle>제출 결과</CardTitle>
                <CardDescription>
                  폼을 제출한 후 결과가 여기에 표시됩니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <pre className="overflow-auto text-sm">
                        {JSON.stringify(submitted, null, 2)}
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      위는 zod 스키마로 검증된 데이터입니다.
                      TypeScript의 완벽한 타입 지원을 받습니다.
                    </p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <p className="text-muted-foreground">
                      폼을 작성하고 제출해주세요
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* 예시 코드 */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>구현 방법</CardTitle>
              <CardDescription>react-hook-form + zod 사용법</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Zod 스키마 정의</h3>
                  <pre className="overflow-auto rounded-lg bg-muted p-4 text-xs">
{`const formSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자"),
  email: z.string().email("유효한 이메일"),
  age: z.coerce.number().min(18, "18세 이상"),
})`}
                  </pre>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. useForm 설정</h3>
                  <pre className="overflow-auto rounded-lg bg-muted p-4 text-xs">
{`const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(formSchema),
})`}
                  </pre>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. 폼 필드 렌더링</h3>
                  <pre className="overflow-auto rounded-lg bg-muted p-4 text-xs">
{`<Input {...register("name")} />
{errors.name && <p>{errors.name.message}</p>}`}
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  ✅ 완전한 타입 안전성, ✅ 자동 검증, ✅ 작은 번들 크기
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
