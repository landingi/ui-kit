const chrome = navigator.userAgent.includes('Chrome')
const firefox = navigator.userAgent.includes('Firefox')
const safari = navigator.userAgent.includes('Safari')

export const isChrome: boolean = chrome
export const isFirefox: boolean = firefox
export const isSafari: boolean = safari && !chrome
