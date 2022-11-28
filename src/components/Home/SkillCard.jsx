import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const SkillCard = ({ name, url }) => {
  return (
    <Card variant='outlined' sx={{ alignItems: 'center' }}>
      <CardMedia
        component='img'
        image={url}
        alt={`${name} icon`}
        height={150}
      />
      <CardContent>
        <Typography
          variant='h6'
          color='text.secondary'
          sx={{ textAlign: 'center' }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
