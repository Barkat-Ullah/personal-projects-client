"use client";
import { useEffect, useState } from "react";
import { backend } from "@/utils/backend";
import { Project } from "@/app/dashboard/all-projects/page";

interface UpdateModalProps {
  project: Project;
  setModalOpen: (open: boolean) => void;
  setProjectList: React.Dispatch<React.SetStateAction<Project[]>>;
}

const UpdateProject: React.FC<UpdateModalProps> = ({
  project,
  setModalOpen,
  setProjectList,
}) => {


  // Fix: Add missing states for content and category
  const [title, setTitle] = useState<string>(project.title);

  const [image, setImage] = useState<string>(project.image);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTitle(project.title);

    setImage(project.image);
  }, [project]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/admin/projects/${project._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
       
        },
        body: JSON.stringify({
         
          title,

          image,
        }),
      });

      const updatedProject = await res.json();
      if (updatedProject.success) {
        setProjectList((prev) =>
          prev.map((b) => (b._id === project._id ? updatedProject.data : b))
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
        <h2 className="text-xl font-semibold mb-4 text-black">
          Update Project
        </h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-3 text-black"
          placeholder="Title"
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

export default UpdateProject;
