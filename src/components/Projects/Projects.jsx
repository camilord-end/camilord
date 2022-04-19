import ProjectData from "./ProjectData.json";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <motion.ul layout initial={{ borderRadius: 10 }}>
        {ProjectData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              description={project.description}
              link={project.link}
              name={project.name}
              preview={project.preview}
              stack={project.stack}
            />
          );
        })}
      </motion.ul>
    </div>
  );
};
