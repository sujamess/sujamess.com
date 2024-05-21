"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "react-daisyui";
import { useMemo } from "react";

export default function WebRing() {
  const { theme } = useTheme();

  const imageSrc = useMemo(() => {
    return theme === "cupcake"
      ? "https://webring.wonderful.software/webring.black.svg"
      : "https://webring.wonderful.software/webring.white.svg";
  }, [theme]);

  return (
    <Link
      href="https://webring.wonderful.software#sujamess.com"
      title="วงแหวนเว็บ"
    >
      <Image alt="วงแหวนเว็บ" width="20" height="20" src={imageSrc} />
    </Link>
  );
}
