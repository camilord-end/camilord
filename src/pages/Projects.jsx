import ProjectData from '../data/ProjectData.json'
import { ProjectCard } from '../components/Projects/ProjectCard'

import Container from '@mui/material/Container'

export const Projects = () => {
  return (
    <Container maxWidth='md' align='center'>
      {ProjectData.map(({ id, name, stack, repository, preview, image }) => (
        <ProjectCard
          key={id}
          id={id}
          name={name}
          image={image}
          demo={preview}
          repository={repository}
          stack={stack}
        />
      ))}
    </Container>
  )
}
