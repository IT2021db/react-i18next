import i18next from 'i18next';

i18next.init({
  debug: true,

  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        key: 'To jest {{what}} i jest {{-how}}',
        cake_one: 'a cake',
        cake_two: 'two cakes',
        cake_many: 'many cakes',
        cake_other: '{{count, number}} cakes',
        cake_zero: 'no cakes {{where, uppercase}}'
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

i18next.services.formatter.add('uppercase', (value, lng, options)=>{
  return value.toUpperCase()
})

const ret = i18next.t('key', { what: 'i18next', how: '<i>awesome</i>' });
const result = i18next.t('cake', { count: 1000.1234 })
const result1 = i18next.t('cake', { count: 1000.1234, lng:'de' })
const result2=i18next.t('cake', {count: 0, where:'here'})
const res1 = i18next.t('key', { lng: 'pl' })
const res2 = i18next.t('common:save', { lng: 'en' })
const res3 = i18next.t('common:cancel', { lng: 'pl' })

console.log(result);

result
result1
result2

ret
res1
res2
res3