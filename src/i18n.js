import i18next from 'i18next';
import sprintf from 'i18next-sprintf-postprocessor';

i18next.init({
  debug: true,
  lng: 'en',
  fallbacksNS: 'common',
  resources: {
    en: {
      translation: {
        key: 'To jest {{what}} i jest {{ -how}}',
        look: {
          deeper: 'some deep key'
        }
      },
      common: {
        save: 'Save',
        cancel: 'Cancel'
      }
    },
    pl: {
      translation: {
        key: 'Hejka!'
      },
      common: {
        save: 'Zapisz',
        cancel: 'Wyjdź'
      }
    }
  }
})

const ret = i18next.t('key', { what: 'i18next', how: '<i>awesome</i>' });
//const bun = i18next.t('common:save', { lng: 'pl' });
//const bip = i18next.t('common:save', { lng: 'en' })
//console.log(i18next.t('key'));
console.log(ret);
//console.log(bun);
//console.log(bip);