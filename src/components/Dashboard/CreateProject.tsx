"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { backend } from "@/utils/backend";

// Define Project Form Data Type
interface ProjectFormData {
  title: string;
  description: string;
  thumbnail:string;
  image: string;
  link: string;
}

const CreateProject: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/admin/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result)
      if (result.status) {
        showMessage("✅ Project Created Successfully!", "success");
        reset();
      } else {
        showMessage("❌ Failed to create project.", "error");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      showMessage("⚠️ Something went wrong!", "error");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 relative">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Create a New Project
        </h2>

        {/* Success/Error Message Box */}
        {message && (
          <div
            className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white rounded-md ${
              message.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium">
              Project Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter project title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter project description"
              rows={3}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium">
              Thumbnail URL
            </label>
            <input
              type="text"
              {...register("thumbnail", {
                required: "thumbnail URL is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter image URL"
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Image URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter image URL"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Project Link */}
          <div>
            <label className="block text-gray-700 font-medium">
              Project Link
            </label>
            <input
              type="text"
              {...register("link", { required: "Project link is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter project link"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || isSubmitting}
            className={`w-full p-2 text-white rounded-md ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
