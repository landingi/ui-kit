import messages_en from 'shared/i18n/en/en.json'
import messages_pl from 'shared/i18n/pl/pl.json'

export const getLanguage = document.documentElement.lang

const messages = {
  en: messages_en,
  pl: messages_pl
}

export const getMessages = messages
