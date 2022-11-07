const chrome = navigator.userAgent.includes('Chrome')
const firefox = navigator.userAgent.includes('Firefox')
const safari = navigator.userAgent.includes('Safari')

export const isChrome = chrome
export const isFirefox = firefox
export const isSafari = safari && !chrome
