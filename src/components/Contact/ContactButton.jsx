import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export const ContactButton = ({ name, url, icon }) => {
  return (
    <ListItem button component='a' href={url} target='_blank'>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
}
