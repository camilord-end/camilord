import { useState } from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
//icons
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'

export const Languages = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <ListItem button onClick={handleClick} sx={{ p: 1 }}>
        <ListItemIcon>
          <LanguageOutlinedIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Language' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>{'🇺🇸'}</ListItemIcon>
            <ListItemText primary='English' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>{'🇪🇸'}</ListItemIcon>
            <ListItemText primary='Español' />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  )
}
