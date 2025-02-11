import BlogCard from "@/components/Blog/BlogCard";
import { backend } from "@/utils/backend";

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  // Ensure params is awaited
  const blogId = await params.blogId;

  try {
    const res = await fetch(`${backend}/admin/blogs/${blogId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status}`);
    }

    const { data: blog } = await res.json();

    return (
      <div className="max-w-7xl mx-auto p-4">
        <BlogCard blog={blog} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <div>Error loading blog. Please try again later.</div>;
  }
};

export default BlogDetailsPage;
