import { SkillCard } from './SkillCard'

import Carousel from 'react-material-ui-carousel'
import ListItem from '@mui/material/ListItem'

export const SkillsCarousel = ({ data }) => {
  return (
    <Carousel
      animation='fade'
      fullHeightHover={false}
      navButtonsProps={{ style: { padding: '10px', margin: '0px' } }}
      navButtonsWrapperProps=''
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        padding: '20px'
      }}
      interval={1500}
    >
      {data.map(({ name, url }) => (
        <ListItem key={name} component='div'>
          <SkillCard key={name} name={name} url={url} />
        </ListItem>
      ))}
    </Carousel>
  )
}
