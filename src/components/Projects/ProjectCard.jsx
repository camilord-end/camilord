import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'

import { ProjectDescription } from './ProjectDescription'
import { ProjectActions } from './ProjectActions'

export const ProjectCard = ({ id, name, image, repository, demo, stack }) => {
  return (
    <Card variant='outlined' sx={{ mb: 4 }}>
      <ProjectDescription id={id} name={name} image={image} stack={stack} />
      <Divider />
      <CardActions>
        <ProjectActions repository={repository} demo={demo} />
      </CardActions>
    </Card>
  )
}
