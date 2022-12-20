import { useTheme } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import Box from '@mui/material/Box'

export const App = () => {
  const theme = useTheme()
  const drawerWidth = 240
  const boxStyles = {
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - ${drawerWidth}px)` }
  }
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])
  const particleOptions = {
    fpsLimit: 60,
    particles: {
      color: {
        value: theme.palette.text.primary
      },
      move: {
        direction: 'bottom',
        enable: true,
        outModes: {
          default: 'out'
        },
        random: false,
        speed: 3
      },
      number: {
        value: 20
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: ['image'],
        image: [
          {
            src: 'https://raw.githubusercontent.com/camilord-end/camilord/dev/src/assets/skills/JavaScript.png',
            height: '15',
            width: '15'
          }
        ]
      },
      size: {
        value: { min: 10, max: 20 }
      }
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <Navbar />
      <Box component='main' sx={boxStyles}>
        <Outlet />
      </Box>
    </Box>
  )
}
