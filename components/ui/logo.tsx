/**
 * 텍스트 기반 로고 컴포넌트 (서버 컴포넌트)
 */
export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
        N
      </div>
      <span className="hidden font-semibold sm:inline-block">
        Next Starter
      </span>
    </div>
  );
}
