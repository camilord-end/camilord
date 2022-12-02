import { AboutMe } from '../components/Home/AboutMe'
import { Description } from '../components/Home/Description'
import { Hobbies } from '../components/Home/Hobbies'
import { Skills } from '../components/Home/Skills'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

export const Home = () => {
  return (
    <Container maxWidth='md' align='center'>
      <Card>
        <Description />
        <Divider />
        <CardActions sx={{ flexDirection: 'column' }}>
          <AboutMe />
          <Skills />
          <Hobbies />
        </CardActions>
      </Card>
    </Container>
  )
}
