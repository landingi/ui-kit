import messages_en from '@i18n/en/en.json'
import messages_pl from '@i18n/pl/pl.json'

const messages = {
  en: messages_en,
  pl: messages_pl
}

export const getMessages = messages

export const getLanguage =
  typeof document !== `undefined` && document.documentElement.lang
