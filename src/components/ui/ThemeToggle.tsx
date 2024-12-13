"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // 로컬 스토리지에서 저장된 테마 불러오기
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme); // 로컬 저장된 테마가 있으면 해당 테마로 적용
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)" // 로컬스토리지에 저장된 테마가 없으면 사용자 시스템 테마에 따라 설정
      ).matches;
      setTheme(prefersDark ? "dark" : "light"); // 다크모드 설정이라면 dark, 없으면 light
    }
  }, [setTheme]);

  // 테마가 변경될 때 로컬 스토리지와 body에 클래스 추가
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme); // 테마 변경 시 로컬 스토리지에 저장
      document.body.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <button
      suppressHydrationWarning
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-1 border border-solid border-white rounded-[8px]"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
