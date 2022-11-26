import { App } from '../pages/App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ColorModeContext } from '../hooks/ColorModeContext'
import { useState, useMemo } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Provider = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  )
}
