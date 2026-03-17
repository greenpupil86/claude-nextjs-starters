"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { ChevronDown, Settings, LogOut } from "lucide-react";

/**
 * 컴포넌트 쇼케이스 페이지 (클라이언트 컴포넌트)
 * 다양한 shadcn 컴포넌트의 실사용 예시
 */
export function ComponentShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    toast.success("버튼이 클릭되었습니다!");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      toast.success(`입력값: ${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div className="space-y-12 py-12">
      {/* 버튼 컴포넌트 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Button 컴포넌트</h2>
        <Card>
          <CardHeader>
            <CardTitle>버튼 Variants</CardTitle>
            <CardDescription>
              다양한 버튼 스타일과 크기를 제공합니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleButtonClick}>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">📌</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 배지 컴포넌트 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Badge 컴포넌트</h2>
        <Card>
          <CardHeader>
            <CardTitle>배지 Variants</CardTitle>
            <CardDescription>상태, 태그, 라벨을 표시합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Card 컴포넌트 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Card 컴포넌트</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>카드 1</CardTitle>
              <CardDescription>카드 설명</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                카드는 정보를 그룹화하고 표시하는 기본 컨테이너입니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>카드 2</CardTitle>
              <CardDescription>호버 효과</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                마우스를 올렸을 때 부드러운 전환 효과를 제공합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 탭 컴포넌트 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Tabs 컴포넌트</h2>
        <Card>
          <CardHeader>
            <CardTitle>탭 네비게이션</CardTitle>
            <CardDescription>다양한 콘텐츠를 탭으로 전환합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tab1">탭 1</TabsTrigger>
                <TabsTrigger value="tab2">탭 2</TabsTrigger>
                <TabsTrigger value="tab3">탭 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  첫 번째 탭의 콘텐츠입니다.
                </p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  두 번째 탭의 콘텐츠입니다.
                </p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  세 번째 탭의 콘텐츠입니다.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* 입력 필드 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Input & Label 컴포넌트</h2>
        <Card>
          <CardHeader>
            <CardTitle>폼 요소</CardTitle>
            <CardDescription>입력 필드와 라벨</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                제출
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* 다이얼로그 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Dialog 컴포넌트</h2>
        <Card>
          <CardHeader>
            <CardTitle>모달 다이얼로그</CardTitle>
            <CardDescription>팝업 모달 창을 표시합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>다이얼로그 제목</DialogTitle>
                  <DialogDescription>
                    이것은 모달 다이얼로그의 설명입니다.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    다이얼로그 내용이 여기에 표시됩니다.
                  </p>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      toast.success("다이얼로그가 닫혔습니다!");
                    }}
                  >
                    닫기
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>

      {/* 드롭다운 메뉴 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Dropdown Menu 컴포넌트</h2>
        <Card>
          <CardHeader>
            <CardTitle>드롭다운 메뉴</CardTitle>
            <CardDescription>컨텍스트 메뉴를 제공합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  메뉴 열기
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => toast.success("프로필 클릭")}>
                  프로필
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => toast.success("설정 클릭")}
                  className="gap-2"
                >
                  <Settings className="h-4 w-4" />
                  설정
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => toast.success("로그아웃")}
                  className="gap-2 text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>
      </section>

      {/* Toast 알림 */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Toast 알림</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sonner Toast</CardTitle>
            <CardDescription>비침투적 알림 메시지</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => toast.success("성공 알림!")}
              >
                Success
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.error("에러 발생!")}
              >
                Error
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.info("정보 알림")}
              >
                Info
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.loading("로딩 중...")}
              >
                Loading
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
