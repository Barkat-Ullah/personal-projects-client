import AllProjects from "@/components/Dashboard/AllProjects";
import { backend } from "@/utils/backend";
import React from "react";
export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  thumbnail: string;
}
const AllProjectsPage = async () => {
  const res = await fetch(`${backend}/admin/projects`, {
    cache: "no-store",
  });

  const { data: projects }: { data: Project[] } = await res.json();
  console.log(projects);
  return (
    <div>
      <AllProjects projects={projects}/>
    </div>
  );
};

export default AllProjectsPage;
