import ProjectDetailsCard from "@/components/Projects/ProjectDetailsCard";
import { backend } from "@/utils/backend";

const ProjectDetails = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const res = await fetch(`${backend}/admin/projects/${params.projectId}`, {
    cache: "no-store",
  });
  const { data: project } = await res.json();

  return (
    <div className="container mx-auto px-6">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetails;
