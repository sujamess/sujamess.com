import { Separator } from "@/core/components/ui/Separator";
import dynamic from "next/dynamic";
import Link from "next/link";

const GitHubIcon = dynamic(
  () => import("@/core/components/Icon/GitHub/ServerComponent"),
);
const GlobeAltIcon = dynamic(
  () => import("@heroicons/react/24/outline/GlobeAltIcon"),
);

export default function Projects() {
  const projects = {
    active: [
      {
        title: {
          org: "sujamess",
          repo: "sujamess.com",
        },
        description:
          "My new personal website built with Next.js and TailwindCSS.",
        sourceURL: "https://sujamess.com",
        githubURL: "https://github.com/sujamess/sujamess.com",
      },
      {
        title: {
          org: "SyntaxCrew",
          repo: "poker-web",
        },
        description: "An ad-free alternative for online poker planning.",
        sourceURL: "https://poker.syntaxcrew.com",
        githubURL: "https://github.com/syntaxcrew/poker-web",
      },
      {
        title: {
          org: "sujamess",
          repo: "numconword",
        },
        description:
          "Convert number to words (EN, TH) in Golang with support more range of numbers.",
        githubURL: "https://github.com/sujamess/numconword",
      },
    ],
    archived: [
      {
        title: {
          org: "sujamess",
          repo: "blog",
        },
        description:
          "An old blog that I used to write about my thoughts and experiences built with Astro.js and TailwindCSS.",
        githubURL: "https://github.com/sujamess/blog",
      },
      {
        title: {
          org: "SyntaxCrew",
          repo: "harmony",
        },
        description:
          "Efficient Golang framework for modern web apps. Seamless integration. Scalable, fast, and easy.",
        sourceURL: "https://harmony.syntaxcrew.com",
        githubURL: "https://github.com/SyntaxCrew/harmony",
      },
      {
        title: {
          org: "sujamess",
          repo: "number-to-words",
        },
        description: "Convert number to words (EN, TH) in Golang.",
        githubURL: "https://github.com/sujamess/number-to-words",
      },
    ],
  };
  return (
    <section className="w-full flex flex-col gap-y-8">
      <h1 className="text-2xl py-4">Projects</h1>

      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl">Active</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.active.map((activeProject) => (
            <div
              className="p-4 border-2 rounded-lg lg:max-w-80"
              key={activeProject.title.org + "/" + activeProject.title.repo}
            >
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <span className="align-text-top h-full">
                    {activeProject.title.org}
                  </span>
                  <span className="align-text-top h-full">/</span>
                  <span className="font-light break-normal h-full align-text-top">
                    {activeProject.title.repo}
                  </span>
                </div>
                <Separator className="my-4" />
                <p className="font-extralight">{activeProject.description}</p>
                <div className="justify-end mt-4">
                  <div className="flex gap-x-2">
                    {activeProject.sourceURL && (
                      <Link href={activeProject.sourceURL}>
                        <GlobeAltIcon className="w-4 h-4" />
                      </Link>
                    )}
                    <Link href={activeProject.githubURL}>
                      <GitHubIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl">Archived</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.archived.map((archivedProject) => (
            <div
              className="p-4 border-2 rounded-lg lg:max-w-80"
              key={archivedProject.title.org + "/" + archivedProject.title.repo}
            >
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <span className="align-text-top h-full">
                    {archivedProject.title.org}
                  </span>
                  <span className="align-text-top h-full">/</span>
                  <span className="font-light break-normal h-full align-text-top">
                    {archivedProject.title.repo}
                  </span>
                </div>
                <Separator className="my-4" />
                <p className="font-extralight">{archivedProject.description}</p>
                <div className="justify-end mt-4">
                  <div className="flex gap-x-2">
                    {archivedProject.sourceURL && (
                      <Link href={archivedProject.sourceURL}>
                        <GlobeAltIcon className="w-4 h-4" />
                      </Link>
                    )}
                    <Link href={archivedProject.githubURL}>
                      <GitHubIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
