import ProjectData from "./ProjectData.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div>
      {ProjectData.map((project) => {
        return (
          <div className="project-card" key={project.id}>
            <ProjectCard
              description={project.description}
              link={project.link}
              name={project.name}
              preview={project.preview}
              stack={project.stack}
            />
          </div>
        );
      })}
    </div>
  );
};
