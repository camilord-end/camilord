import { ProjectButton } from './ProjectButton'

import CardActions from '@mui/material/CardActions'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

export const ProjectActions = ({ repository, demo }) => {
  return (
    <CardActions
      sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}
    >
      <ProjectButton
        icon={<GitHubIcon fontSize='large' color='secondary' />}
        link={repository}
      />
      <ProjectButton
        icon={<LinkIcon fontSize='large' color='secondary' />}
        link={demo}
      />
    </CardActions>
  )
}
