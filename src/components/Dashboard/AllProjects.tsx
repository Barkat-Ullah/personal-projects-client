"use client";

import { Project } from "@/app/dashboard/all-projects/page";
import { backend } from "@/utils/backend";
import Image from "next/image";
import { useState } from "react";
import UpdateProject from "./UpdateProject";

interface AllProjectsPageProps {
  projects: Project[];
}
const AllProjects: React.FC<AllProjectsPageProps> = ({ projects }) => {
  console.log(projects);
   const [projectList, setProjectList] = useState<Project[]>(projects);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const handleDelete = async (id: string) => {
      setLoading(id);
      try {
        await fetch(`${backend}/admin/projects/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
  
        setProjectList((prev) => prev.filter((pro) => pro._id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
      setLoading(null);
    };
  const handleOpenModal = (project:Project) => {
    setSelectedProject(project)
    setModalOpen(true);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-black mb-4">All Projects</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((project) => (
              <tr key={project._id} className="border-b border-gray-300">
                <td className="p-3 text-black">{project.title}</td>
                <td className="p-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={46}
                    width={46}
                    className="rounded-md"
                  />
                </td>
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    disabled={loading === project._id}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    {loading === project._id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && selectedProject && (
        <UpdateProject
          project={selectedProject}
          setModalOpen={setModalOpen}
          setProjectList={setProjectList}
        />
      )}
    </div>
  );
};

export default AllProjects;
