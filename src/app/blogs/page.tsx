import Blog from "@/components/Blog/Blog";
import { backend } from "@/utils/backend";
import React from "react";
 export interface BlogTypes {
  _id: string;
  title: string;
  description: string;
  content: string;
  category:string
  image: string;
}
const BlogPage = async () => {
  const res = await fetch(`${backend}/admin/blogs`, {
    cache: "no-store",
  });

  const { data: blogs }: { data: BlogTypes[] } = await res.json();
  return <div><Blog blogs={blogs}/></div>;
};

export default BlogPage;
