"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsClient } from "usehooks-ts";

/**
 * 다크모드 토글 버튼 (클라이언트 컴포넌트)
 * next-themes useTheme() 훅 사용
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();

  // SSR 중에는 렌더링하지 않음 (hydration mismatch 방지)
  if (!isClient) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="테마 전환"
        >
          {isDark ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {isDark ? "라이트 모드" : "다크 모드"}
      </TooltipContent>
    </Tooltip>
  );
}
