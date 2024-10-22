import { BASE_URL } from "@/app/sitemap";
import { Badge } from "@/core/components/ui/Badge";
import { getBlogs } from "@/core/functions";
import { formatDate } from "@/core/functions/dateFormatter";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const MDX = dynamic(() => import("@/core/components/MDX"));

export async function generateStaticParams() {
  return getBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = getBlogs().find((blog) => blog.slug === slug);
  if (!blog) {
    return;
  }

  const { title, publishedAt, description } = blog.metadata;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${BASE_URL}/blogs/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Blog({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = getBlogs().find((blog) => blog.slug === slug);
  if (!blog) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.metadata.title,
            datePublished: blog.metadata.publishedAt,
            dateModified: blog.metadata.publishedAt,
            description: blog.metadata.description,
            url: `${BASE_URL}/blogs/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "SURARERK BOONJIT",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-3xl tracking-tighter">
        {blog.metadata.title}
      </h1>
      <div className="flex flex-col gap-y-2 justify-between mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(blog.metadata.publishedAt)}
        </p>
        <div className="flex gap-x-1">
          {blog.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <article className="prose prose-base md:prose-lg prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl dark:prose-p:text-red-400 max-w-none">
        <MDX source={blog.content} />
      </article>
    </section>
  );
}
