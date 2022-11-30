import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const ProjectDescription = ({ name, image, stack }) => {
  // const { t } = useTranslation()
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
    maxWidth: { sm: '100%', md: 400 }
  }
  return (
    <Box sx={boxStyles}>
      <CardMedia
        component='img'
        src={image}
        alt='pokemon data image'
        height={500}
        sx={cardMediaStyles}
      />
      <CardContent sx={cardContentStyles}>
        <Typography component='div' variant='h4'>
          {name}
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='subtitle1'
          color='text.secondary'
          component='div'
        >
          project desc project descproject descproject descproject descproject
          descproject descproject descproject descproject descproject
          descproject descproject desc
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='subtitle1'
          color='text.secondary'
          component='div'
        >
          {stack}
        </Typography>
      </CardContent>
    </Box>
  )
}
