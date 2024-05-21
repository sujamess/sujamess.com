import dynamic from "next/dynamic";
import Link from "next/link";

const GitHubIcon = dynamic(() => import("@/core/components/Icon/GitHub"));
const GlobeAltIcon = dynamic(() => import('@heroicons/react/24/outline/GlobeAltIcon'));

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
        githubURL: "https://github.com/SyntaxCrew/poker-web",
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
      <h1 className="title font-semibold text-3xl tracking-tighter">
        Projects
      </h1>

      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-2xl tracking-tighter">Active</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.active.map((activeProject, i) => (
            <div
              className="card card-compact card-bordered max-w-80 bg-base-100"
              key={i}
            >
              <div className="card-body">
                <p className="card-title">
                  <span className="align-text-top h-full">
                    {activeProject.title.org}
                  </span>
                  <span className="align-text-top h-full">/</span>
                  <span className="font-light break-normal h-full align-text-top">
                    {activeProject.title.repo}
                  </span>
                </p>
                <p>{activeProject.description}</p>
                <div className="card-actions justify-end mt-4">
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
        <h2 className="font-semibold text-2xl tracking-tighter">Archived</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.archived.map((archivedProject, i) => (
            <div
              className="card card-compact card-bordered max-w-80 bg-base-100"
              key={i}
            >
              <div className="card-body">
                <p className="card-title">
                  <span className="align-text-top h-full">
                    {archivedProject.title.org}
                  </span>
                  <span className="align-text-top h-full">/</span>
                  <span className="font-light break-normal align-text-top h-full align-text-top">
                    {archivedProject.title.repo}
                  </span>
                </p>
                <p>{archivedProject.description}</p>
                <div className="card-actions justify-end">
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
