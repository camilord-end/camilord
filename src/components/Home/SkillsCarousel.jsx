import { SkillCard } from './SkillCard'

import Carousel from 'react-material-ui-carousel'
import ListItem from '@mui/material/ListItem'

export const SkillsCarousel = ({ data }) => {
  return (
    <Carousel interval={1500}>
      {data.map(({ name, url }) => (
        <ListItem key={name} component='div'>
          <SkillCard key={name} name={name} url={url} />
        </ListItem>
      ))}
    </Carousel>
  )
}
