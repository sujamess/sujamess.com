"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai/react";
import { themeAtom } from "@/core/stores";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        checked={theme === "dracula"}
        onChange={(e) => {
          console.log(e.target.value, theme);
          setTheme(e.target.value === "cupcake" ? "dracula" : "cupcake");
        }}
      />
      <SunIcon className="swap-on w-5 h-5" />
      <MoonIcon className="swap-off w-5 h-5" />
    </label>
  );
}
