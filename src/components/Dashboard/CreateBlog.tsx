"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createBlog } from "@/utils/creatBlog";

interface BlogFormData {
  title: string;
  content: string;
  category: string;
  image: string;
}

const CreateBlog: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormData>();

  const onSubmit = async (data: BlogFormData) => {
    try {
      setLoading(true);

      const response = await createBlog(data);
   
      if (response.success) {
        setSuccessMessage("Blog submitted successfully!");
        reset();
      } else {
        setSuccessMessage(response.message || "Failed to submit the blog.");
      }
      setLoading(false);
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to submit the blog.");
      setLoading(false);
      setTimeout(() => setSuccessMessage(null), 4000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-center text-2xl font-bold text-black mb-4">
        Create a Blog
      </h2>
      {successMessage && (
        <p
          className={`text-center text-sm p-2 mb-4 rounded ${
            successMessage.includes("successfully")
              ? "text-green-700 bg-green-200"
              : "text-red-700 bg-red-200"
          }`}
        >
          {successMessage}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-black">Title:</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded-md text-black"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-black">Content:</label>
          <textarea
            {...register("content", { required: "Content is required" })}
            className="w-full p-2 border rounded-md text-black"
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full p-2 border rounded-md text-black"
          >
            <option value="">Select a category</option>
            <option value="Programming">Programming</option>
            <option value="Education">Education</option>
            <option value="Science">Science</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-black">Image URL:</label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className="w-full p-2 border rounded-md text-black"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
