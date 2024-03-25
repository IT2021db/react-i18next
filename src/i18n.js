import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          learn: 'Learn React easily',
          description: 'Edit <1>src/App.js</1> and save to reload.'
        }
      },
      pl: {
        translation: {
          learn: 'Naucz się Reacta',
          description: 'Edytuj <1>src/App.js</1> i zapisz aby załadować ponownie.'
        }
      }
    }
  });


export { i18next };

