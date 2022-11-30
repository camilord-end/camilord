import { NavbarLinks } from './NavbarLinks'
import { NavbarOptions } from './NavbarOptions'

import { useState } from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 240

export const Navbar = (props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const container =
    window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const drawer = (
    <List
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          component='div'
          id='nav-list-subheader'
          sx={{ fontSize: 20 }}
        >
          camilord-end
        </ListSubheader>
      }
    >
      <Divider />
      <NavbarLinks />
      <Divider />
      <NavbarOptions />
    </List>
  )

  return (
    <>
      <Fab
        size='medium'
        color='secondary'
        aria-label='mobile menu'
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          display: { sm: 'none' }
        }}
      >
        <MenuIcon fontSize='large' />
      </Fab>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='navigation buttons'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}
