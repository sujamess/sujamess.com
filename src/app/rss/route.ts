import { BASE_URL } from "@/app/sitemap";
import { getBlogs } from "@/core/functions";

export function GET() {
  let blogs = getBlogs();

  const itemsXml = blogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (blog) =>
        `<item>
          <title>${blog.metadata.title}</title>
          <link>${BASE_URL}/blog/${blog.slug}</link>
          <description>${blog.metadata.description || ""}</description>
          <pubDate>${new Date(
            blog.metadata.publishedAt,
          ).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>sujamess's space</title>
        <link>${BASE_URL}</link>
        <description>This is sujamess.com RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
