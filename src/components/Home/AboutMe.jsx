import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import InfoIcon from '@mui/icons-material/Info'

export const AboutMe = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <List component='div' sx={{ width: '100%', p: 1 }}>
        <ListItem button onClick={handleClick} sx={{ p: 1 }}>
          <ListItemIcon>
            <InfoIcon color='info' />
          </ListItemIcon>
          <ListItemText primary={t('home.desc1')} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <ListItemText primary={t('home.part4')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('home.part5')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('home.part6')} />
          </ListItem>
        </List>
        <Divider />
      </Collapse>
    </>
  )
}
