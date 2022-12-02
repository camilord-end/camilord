import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const Description = () => {
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
    maxWidth: { sm: '100%', md: 250 }
  }

  return (
    <Box sx={boxStyles}>
      <CardMedia
        component='img'
        image='https://raw.githubusercontent.com/camilord-end/camilord/master/src/assets/minga.png'
        sx={cardMediaStyles}
        alt='julian photo'
      />
      <CardContent sx={cardContentStyles}>
        <Typography component='div' variant='h4'>
          {t('home.part1')} Julian Orozco
        </Typography>
        <Typography variant='h5' color='text.secondary' component='div'>
          {t('home.part2')}
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='subtitle1'
          color='text.primary'
          component='div'
        >
          {t('home.part3')}
        </Typography>
      </CardContent>
    </Box>
  )
}
