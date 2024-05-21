"use client";
import dynamic from "next/dynamic";

const TypewriterEffect = dynamic(() => import("typewriter-effect"));

interface Props {
  text: string;
}

export default function Typewriter({ text }: Props) {
  return (
    <TypewriterEffect
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
      options={{
        autoStart: true,
        delay: 75,
      }}
    />
  );
}
