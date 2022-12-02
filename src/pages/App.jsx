import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'

import Box from '@mui/material/Box'

export const App = () => {
  const drawerWidth = 240
  const boxStyles = {
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - ${drawerWidth}px)` }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component='main' sx={boxStyles}>
        <Outlet />
      </Box>
    </Box>
  )
}
