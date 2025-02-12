"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Technology {
  name: string;
  icon: string;
}

interface ProjectDetailsProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: Technology[];
  };
}

const ProjectDetailsCard: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Left: Image with Hover Animation */}
      <div className="w-full md:w-1/2 overflow-hidden relative">
        <div
          className={`min-h-screen w-full relative transition-transform duration-[5s] ease-linear ${
            isHovered ? "-translate-y-full" : "translate-y-0"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={project.image}
            width={800}
            height={500}
            alt={project.title}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Right: Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow"
            >
              <Image
                className="object-cover"
                src={tech.icon}
                width={24}
                height={24}
                alt={tech.name}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-white ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* 🔹 Project Link Button */}
        <div className="mt-6 flex gap-4">
          <Link href={project.link} target="_blank">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              🔗 Visit Project
            </button>
          </Link>

          {/* 🔹 Back to Projects Button */}
          <Link href="/projects">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
