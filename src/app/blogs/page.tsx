import { getBlogs } from "@/core/functions";
import { getDay, getMonthAndYear } from "@/core/functions/dateFormatter";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Blogs() {
  const blogs = getBlogs();
  if (!blogs) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-2xl py-4">Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="grid grid-cols-3 lg:grid-cols-5 p-4 gap-8 lg:gap-x-16 w-full hover:bg-slate-50 hover:rounded-lg hover:cursor-pointer hover:text-black"
          >
            <div className="flex flex-col items-center">
              <p className="text-xl">{getDay(blog.metadata.publishedAt)}</p>
              <p className="font-light whitespace-nowrap">
                {getMonthAndYear(blog.metadata.publishedAt)}
              </p>
            </div>
            <p className="text-xl col-span-2 lg:col-span-4">
              {blog.metadata.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
