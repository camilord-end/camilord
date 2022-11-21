import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { useEffect, useState } from 'react'

const lngs = {
  en: {
    nativeName: 'English',
    flag: ':us:'
  },
  es: {
    nativeName: 'Español',
    flag: ':es'
  }
}

import './styles/App.css'

export const App = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='container' data-theme={theme}>
      <Navbar handleTheme={handleDarkMode} theme={theme} lngs={lngs} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
