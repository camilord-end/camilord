import ProjectData from '../data/ProjectData.json'
import { ProjectCard } from './ProjectCard'
import { AnimatePresence, motion } from 'framer-motion'

import '../styles/Projects.css'

export const Projects = () => {
  return (
    <motion.div
      className='projects-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        <motion.ul
          layout
          className='projects-wrap'
          initial={{ borderRadius: 10 }}
        >
          {ProjectData.map(
            ({ id, description, repository, name, preview, stack, image }) => {
              return (
                <ProjectCard
                  key={id}
                  description={description}
                  repository={repository}
                  name={name}
                  preview={preview}
                  stack={stack}
                  image={image}
                />
              )
            }
          )}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  )
}
