"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * 모바일 네비게이션 메뉴 (클라이언트 컴포넌트)
 * Sheet 기반 드로어 메뉴
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "홈", href: "/" },
    { label: "컴포넌트", href: "/components" },
    { label: "폼 예시", href: "/form-example" },
    { label: "문서", href: "https://nextjs.org" },
    { label: "깃허브", href: "https://github.com" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <SheetClose key={link.href} asChild>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
          <div className="border-t pt-4 mt-2">
            <ThemeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
