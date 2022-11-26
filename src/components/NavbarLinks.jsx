import { linkItems } from '../utils/linkItems'
//
import { Link } from 'react-router-dom'
import { useState } from 'react'
//Style Components
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export const NavbarLinks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <List sx={{ mt: 2, mb: 2 }}>
      {linkItems.map(({ name, icon, href }, index) => (
        <ListItem
          key={name}
          button
          component={Link}
          to={href}
          sx={{ p: 1 }}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  )
}
