import ProjectData from './ProjectData.json';
import { ProjectCard } from './ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';

import './Projects.css';

export const Projects = () => {
  return (
    <div className='projects-container'>
      <AnimatePresence>
        <motion.ul
          layout
          className='projects-wrap'
          initial={{ borderRadius: 10 }}
        >
          {ProjectData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                description={project.description}
                repository={project.repository}
                name={project.name}
                preview={project.preview}
                stack={project.stack}
                image={project.image}
              />
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
