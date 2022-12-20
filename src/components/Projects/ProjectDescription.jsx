import { ProjectStack } from './ProjectStack'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const ProjectDescription = ({ id, name, image, stack }) => {
  const { t } = useTranslation()
  const boxStyles = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column', md: 'row' }
  }

  const cardContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const cardMediaStyles = {
    maxWidth: { sm: '100%', md: 400 },
    minWidth: { sm: '200', md: 400 }
  }

  const descString = `projects.desc${id}`

  const textStyles = { pt: 2, textAlign: 'justify' }

  return (
    <Box sx={boxStyles}>
      <CardMedia
        component='img'
        src={image}
        alt='project image'
        height={500}
        sx={cardMediaStyles}
      />
      <CardContent sx={cardContentStyles}>
        <Typography component='div' variant='h4'>
          {name}
        </Typography>
        <Typography
          sx={textStyles}
          variant='subtitle1'
          color='text.secondary'
          component='div'
        >
          {t(descString)}
        </Typography>
        <ProjectStack stack={stack} />
      </CardContent>
    </Box>
  )
}
