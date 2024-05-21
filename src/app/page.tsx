import dynamic from "next/dynamic";

const TypewriterEffect = dynamic(
  () => import("@/core/components/TypewriterEffect"),
);

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="hero relative top-1/2 -translate-y-1/2">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi, I&apos;m Surarerk 👋🏻</h1>
            <div className="py-6">
              <TypewriterEffect text="I'm a software engineer who loves Golang but is now exploring Next.js. Always learning, always coding!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
