import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          home: {
            part1: 'Hi, i’m',
            part2: 'I build things for the web',
            part3:
              'I’m a Front-end Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.',
            part4:
              'Hello! My name is Julian and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to study systems engineering, turns out that i really focused on the presentation of the product and this directed me towards  Frontend Development',
            part5:
              'First I started learning c++,python and java in the university. Worked hard to learn data structures with c++, and learned about algorithms mainly with python. Also learned java to fully understand the SOLID principles and apply them.',
            part6:
              'When i found out that my passion was on front-end development i started learning all about semantic html, css and tools to make it better and easier, and also javascript to give it more functionality then i started learning AngularJS but wast really into this framework so i started learning about React library, and this was the tool that i was most comfortable.',
            part7: 'I am proficient with these:',
            desc1: 'About Me',
            desc2: 'Skills',
            desc3: 'Hobbies'
          },
          contact: {
            desc1: 'Sobre mi',
            desc2: 'Habilidades',
            desc3: 'Hobbies',
            part1: 'Contact Me:',
            part2: 'Email',
            part3: 'Phone'
          },
          navbar: {
            Home: 'Home',
            Projects: 'Projects',
            Contact: 'Contact',
            LightMode: 'Light Mode',
            DarkMode: 'Dark Mode',
            Language: 'Language'
          }
        }
      },
      es: {
        translation: {
          home: {
            desc1: 'Sobre mi',
            desc2: 'Habilidades',
            desc3: 'Hobbies',
            part1: 'Hola, soy',
            part2: 'Construyo cosas para la web',
            part3:
              'Soy un desarrollador Frond-end especializandome en construir (y ocasionalmente diseñar) experiencias digitales exepcionales. Actualmente estoy enfocado en contruir productos accesibles y enfocados en el usuario.'
          },
          contact: {
            part1: 'Contactame:',
            part2: 'Correo',
            part3: 'Telefono'
          },
          navbar: {
            Home: 'Inicio',
            Projects: 'Proyectos',
            Contact: 'Contacto',
            LightMode: 'Modo Claro',
            DarkMode: 'Modo Oscuro',
            Language: 'Lenguaje'
          }
        }
      }
    }
  })

export default i18n
