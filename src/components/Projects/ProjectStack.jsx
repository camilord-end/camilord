import FullStack from '../../data/FullStack.json'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export const ProjectStack = ({ stack }) => {
  return (
    <Box sx={{ display: 'flex', mt: 3 }}>
      {stack.map((item) => (
        <Card key={item} sx={{ m: 1 }}>
          <CardMedia
            component='img'
            src={FullStack[item]}
            alt={`${item} icon`}
            sx={{ height: 40, width: 40, p: '5px' }}
          />
          <Divider />
          <Typography variant='caption'>{item}</Typography>
        </Card>
      ))}
    </Box>
  )
}
