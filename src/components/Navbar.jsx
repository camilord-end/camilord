import { Link } from 'react-router-dom'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa'
import '../styles/Navbar.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Navbar = ({ theme, handleTheme, lngs }) => {
  const [show, setShow] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleOpen = () => {
    setShow((show) => !show)
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' }
  }

  return (
    <div className='nav-container' id='nav'>
      <motion.nav
        initial={{ x: '-100%' }}
        animate={show ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className='inner-nav'>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleOpen}
            >
              <Link to='/'>{t('navbar.part1')} </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleOpen}
            >
              <Link to='/projects'>{t('navbar.part2')} </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleOpen}
            >
              <Link to='/about'>{t('navbar.part3')}</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleOpen}
            >
              <Link to='/contact'>{t('navbar.part4')} </Link>
            </motion.li>
            <li>
              <motion.div className='themeButton' onClick={handleTheme}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </motion.div>
            </li>
            <li>
              <div className='flag-container'>
                {Object.keys(lngs).map((lng) => (
                  <div
                    className='flag'
                    key={lng}
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    {lngs[lng].nativeName === 'English' ? '🇺🇸' : '🇪🇸'}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.div
        className='menu-button'
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.25 }}
        onClick={toggleOpen}
      >
        <FaBars />
      </motion.div>
    </div>
  )
}
