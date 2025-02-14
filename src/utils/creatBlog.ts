import { backend } from "./backend";

interface BlogFormData {
  title: string;
  content: string;
  category: string;
  image: string;
}

export const createBlog = async (data: BlogFormData) => {
  try {
    const response = await fetch(`${backend}/admin/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
   

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, message: "Failed to create blog" };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "An error occurred" };
  }
};
