export const getLanguage = ((typeof document !== `undefined` &&
  document.documentElement.lang) ||
  'en') as 'pl' | 'en' | 'pt'
