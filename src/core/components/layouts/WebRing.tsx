"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function WebRing() {
  const { theme } = useTheme();

  return (
    <Link
      href="https://webring.wonderful.software#sujamess.com"
      title="วงแหวนเว็บ"
    >
      <Image
        alt="วงแหวนเว็บ"
        width="20"
        height="20"
        src="https://webring.wonderful.software/webring.black.svg"
      />
      {/* {theme === "light" ? (
        <Image
          alt="วงแหวนเว็บ"
          width="20"
          height="20"
          src="https://webring.wonderful.software/webring.black.svg"
        />
      ) : (
        <Image
          alt="วงแหวนเว็บ"
          width="20"
          height="20"
          src="https://webring.wonderful.software/webring.white.svg"
        />
      )} */}
    </Link>
  );
}
