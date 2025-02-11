import type React from "react";
import BlogBentoGrid from "./BlogBentoGrid";
import { BlogTypes } from "@/app/blogs/page";


interface BlogsProps {
  blogs?: BlogTypes[];
}

const Blog: React.FC<BlogsProps> = ({ blogs }) => {
  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Blog Posts</h1>
      <BlogBentoGrid blogs={blogs} />
    </div>
  );
};

export default Blog;
