import { getBlogs } from "@/core/functions";
import { formatDate } from "@/core/functions/formatDate";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Blogs() {
  const blogs = getBlogs();
  if (!blogs) {
    notFound();
  }

  return (
    <section className="w-full flex flex-col gap-y-8">
      <h1 className="title font-semibold text-3xl tracking-tighter">Blogs</h1>
      <div className="flex gap-x-4">
        <div className="flex flex-col font-light gap-y-4 text-base md:text-lg lg:text-xl">
          {blogs.map((blog, i) => (
            <p key={i}>{formatDate(blog.metadata.publishedAt)}</p>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 md:text-lg lg:text-xl">
          {blogs.map((blog, i) => (
            <Link key={i} href={`/blogs/${blog.slug}`}>
              {blog.metadata.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
