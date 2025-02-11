"use client";
import { useEffect, useState } from "react";
import { backend } from "@/utils/backend";
import { getUserFromToken } from "@/utils/getUser";

interface BlogTypes {
  _id: string;
  title: string;
  content: string;
  category: string;
  image: string;
}
// interface User {
//   id: string;
//   role: string;
// }

interface UpdateModalProps {
  blog: BlogTypes;
  setModalOpen: (open: boolean) => void;
  setBlogList: React.Dispatch<React.SetStateAction<BlogTypes[]>>;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  blog,
  setModalOpen,
  setBlogList,
}) => {
  const user = getUserFromToken();
  const [title, setTitle] = useState<string>(blog.title);
  const [content, setContent] = useState<string>(blog.content);
  const [category, setCategory] = useState<string>(blog.category);
  const [image, setImage] = useState<string>(blog.image);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    setTitle(blog.title);
    setContent(blog.content);
    setCategory(blog.category);
    setImage(blog.image);
  }, [blog]); 

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/admin/blogs/${blog._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: user?.id,
          role: user?.role,
          title,
          content,
          category,
          image,
        }),
      });

      const updatedBlog = await res.json();
      if (updatedBlog.success) {
        setBlogList((prev) =>
          prev.map((b) => (b._id === blog._id ? updatedBlog.data : b))
        );
      }

      setModalOpen(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-black">Update Blog</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3 text-black"
          placeholder="Title"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3 text-black"
          placeholder="Content"
          rows={3}
        ></textarea>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3 text-black"
          placeholder="Category"
        />

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3 text-black"
          placeholder="Image URL"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setModalOpen(false)}
            className="px-3 py-1 border rounded-md text-black"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
