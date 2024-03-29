import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Avatar from '@mui/material/Avatar'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import CelebrationIcon from '@mui/icons-material/Celebration'

export const Hobbies = () => {
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
            <CelebrationIcon color='error' />
          </ListItemIcon>
          <ListItemText primary='Hobbies' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          component='div'
          disablePadding
        >
          <ListItem>
            <ListItemText primary={t('home.part9')} />
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src='https://raw.githubusercontent.com/camilord-end/camilord/dev/src/assets/superoreo.jpeg'
              alt='Oreo Photo'
              variant='rounded'
              sx={{
                height: 200,
                width: 200,
                transition: 'all 0.5s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}
