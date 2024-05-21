import { getBlogs } from "@/core/functions";

export const BASE_URL = "https://sujamess.com";

export default async function sitemap() {
    let blogs = getBlogs().map((blog) => ({
      url: `${BASE_URL}/blogs/${blog.slug}`,
      lastModified: blog.metadata.publishedAt,
    }))
  
    let routes = ['', '/blogs'].map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  
    return [...routes, ...blogs]
  }