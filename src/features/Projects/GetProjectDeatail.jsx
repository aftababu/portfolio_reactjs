import { useSearchParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import ProjectContainer from "./ProjectContainer";
import ProjectFolder from "./ProjectFolder";
import { projects } from "../../constance";

const GetProjectDetail = ({ setActiveLabel }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const id = searchParams.get("id");
  
  const Filter = () => {
    const project = projects.filter((project) => project.value === category);
    if (category && id) {
      const projectDetail =
        project && project[0].projects.filter((p) => p._id === id);
      setActiveLabel(projectDetail[0].title);
      return <ProjectDetail projectDetail={projectDetail[0]} />;
    } else if (category) {
      setActiveLabel(project[0].label);
      return <ProjectContainer projects={project[0]} category={category} />;
    } else if (!category) {
      setActiveLabel("");
      return <ProjectFolder projects={projects} />;
    }
  };
  return <Filter />;
};
export default GetProjectDetail;
