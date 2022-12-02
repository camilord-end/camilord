import { Languages } from './Languages'
import { Themes } from './Themes'
import List from '@mui/material/List'

export const NavbarOptions = () => {
  return (
    <List sx={{ mt: 2, mb: 2 }}>
      <Themes />
      <Languages />
    </List>
  )
}
