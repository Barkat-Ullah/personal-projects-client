import Projects from "@/components/Projects/Projects";
import { backend } from "@/utils/backend";
import React from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  thumbnail: string;
}

const ProjectPage = async () => {
  const res = await fetch(`${backend}/admin/projects`, {
    cache: "no-store",
  });

  const { data: projects }: { data: Project[] } = await res.json();

  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectPage;
