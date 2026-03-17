import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns"
import { ko } from "date-fns/locale"

/**
 * Tailwind CSS 클래스 병합 유틸리티
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 날짜를 형식화하는 유틸리티 (한국어 지원)
 * @param date - 포맷할 날짜 (Date 객체 또는 ISO 문자열)
 * @param formatStr - date-fns 포맷 문자열 (기본값: "yyyy년 MM월 dd일")
 * @returns 포맷된 날짜 문자열
 */
export function formatDate(
  date: Date | string,
  formatStr: string = "yyyy년 MM월 dd일"
): string {
  try {
    const dateObj = typeof date === "string" ? parseISO(date) : date
    return format(dateObj, formatStr, { locale: ko })
  } catch {
    return ""
  }
}

/**
 * 문자열을 지정된 길이로 자르고 끝에 "..."을 붙이는 유틸리티
 * @param str - 자를 문자열
 * @param maxLength - 최대 길이
 * @returns 잘린 문자열
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + "..."
}
