"use client";

import { themeAtom } from "@/core/stores";
import { useAtom } from "jotai/react";
import Image from "next/image";
import { useMemo } from "react";

export default function GitHubIcon() {
  const [theme] = useAtom(themeAtom);

  const icon = useMemo(() => {
    return theme === "cupcake" ? (
      <Image
        src="/svgs/github-mark.svg"
        height={16}
        width={16}
        alt="github-icon"
      />
    ) : (
      <Image
        src="/svgs/github-mark-white.svg"
        height={16}
        width={16}
        alt="github-icon"
      />
    );
  }, [theme]);

  return icon;
}
