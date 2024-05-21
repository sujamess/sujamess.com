export default async function Page() {
  return (
    <section className="w-full flex flex-col gap-y-8">
      <h1 className="title font-semibold text-3xl tracking-tighter">Gists</h1>
      {/* <div className="flex gap-x-4">
        <div className="flex flex-col font-light gap-y-4 text-base md:text-lg lg:text-xl">
          {blogs.map((blog, i) => (
            <p key={i}>{formatDate(blog.metadata.publishedAt)}</p>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 md:text-lg lg:text-xl">
          {blogs.map((blog, i) => (
            <a key={i} href={`/blogs/${blog.slug}`}>
              {blog.metadata.title} 
            </a>
          ))}
        </div>
      </div> */}
    </section>
  );
}
