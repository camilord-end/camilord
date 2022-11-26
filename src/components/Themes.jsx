import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'
import { ColorModeContext } from '../hooks/ColorModeContext'
//
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
//icons
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined'

export const Themes = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <>
      <ListItem
        button
        onClick={colorMode.toggleColorMode}
        sx={{ p: 1 }}
        disablePadding
      >
        <ListItemIcon>
          {theme.palette.mode === 'dark' ? (
            <Brightness5OutlinedIcon color='warning' />
          ) : (
            <DarkModeOutlinedIcon color='secondary' />
          )}
        </ListItemIcon>
        <ListItemText
          primary={theme.palette.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        />
      </ListItem>
    </>
  )
}
