import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'
import { ColorModeContext } from '../../hooks/ColorModeContext'
//
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
//icons
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined'
import { useTranslation } from 'react-i18next'

export const Themes = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const { t } = useTranslation()
  return (
    <>
      <ListItem
        button
        onClick={colorMode.toggleColorMode}
        sx={{ p: 1, pl: 2 }}
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
          primary={
            theme.palette.mode === 'light'
              ? t('navbar.DarkMode')
              : t('navbar.LightMode')
          }
        />
      </ListItem>
    </>
  )
}
