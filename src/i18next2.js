import i18next from 'i18next';

i18next.init({
  debug: true,

  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
       dessert_cake_one:'I like to eat a cake',
       dessert_cake_other: 'I like to eat {{count}} cakes',
       dessert_muffin_one: 'I really like a muffin',
       dessert_muffin_other: 'I have {{count}} muffins!!!',
       dessert_one: 'Ilike just one dessert',
       dessert_other: 'I like all deserts'
      }
    }
  }
})



const ret= i18next.t('dessert', {context: 'whatever', count: 10});
ret
