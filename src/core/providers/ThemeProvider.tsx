"use client";
import { useAtom } from "jotai/react";
import { Theme } from "react-daisyui";
import { themeAtom } from "@/core/stores";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useAtom(themeAtom);

  return (
    <Theme
      dataTheme={theme}
      className="w-full min-h-screen flex justify-center"
    >
      {children}
    </Theme>
  );
}
