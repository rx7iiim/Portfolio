import { Meta } from "@once-ui-system/core";
import { baseURL, blog } from "@/resources";
import { BlogClient } from "./BlogClient";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return <BlogClient />;
}
