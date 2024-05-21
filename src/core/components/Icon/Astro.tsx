"use client";

import { themeAtom } from "@/core/stores";
import { useAtom } from "jotai/react";
import Image from "next/image";
import { useMemo } from "react";

export default function AstroIcon() {
  const [theme] = useAtom(themeAtom);

  const icon = useMemo(() => {
    return theme === "cupcake" ? (
      <Image
        src="/svgs/astro-icon-dark.svg"
        height={16}
        width={16}
        alt="astro-icon"
      />
    ) : (
      <Image
        src="/svgs/astro-icon-light-gradient.svg"
        height={16}
        width={16}
        alt="astro-icon"
      />
    );
  }, [theme]);

  return icon;
}
