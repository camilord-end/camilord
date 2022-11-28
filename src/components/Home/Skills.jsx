import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'

export const Skills = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <List component='div' disablePadding sx={{ width: '100%', p: 1 }}>
        <ListItem button disablePadding onClick={handleClick} sx={{ p: 1 }}>
          <ListItemIcon>
            <HistoryEduIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary={t('home.desc2')} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <ListItemText primary={t('home.part7')} />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}
