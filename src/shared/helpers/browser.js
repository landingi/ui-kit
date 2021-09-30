const chrome = navigator.userAgent.includes('Chrome'),
  firefox = navigator.userAgent.includes('Firefox'),
  safari = navigator.userAgent.includes('Safari')

export const isChrome = chrome
export const isFirefox = firefox
export const isSafari = safari && !chrome
