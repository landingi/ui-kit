import messages_en from 'shared/i18n/en/en.json'
import messages_pl from 'shared/i18n/pl/pl.json'

export const getLanguage = document.documentElement.lang

// Polyfill, React Intl v3  no longer comes with CLDR data and rely on native Intl API instead.
if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill')
  require('@formatjs/intl-pluralrules/locale-data/en')
  require('@formatjs/intl-pluralrules/locale-data/pl')
}

const messages = {
  en: messages_en,
  pl: messages_pl
}

export const getMessages = messages
