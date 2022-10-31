import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: {
            part1:'Frontend Developer',
            part2: 'I will transform all your ideas into code.'
          }
        }
      },
      es: {
        translation: {
          home: {
            part1:'Desarrollador Frontend',
            part2: 'Transformare todas tus ideas en codigo.'
          }
        }
      }
    }
  });

export default i18n;