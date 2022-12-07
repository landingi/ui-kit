export const hasNumber = (str: string): boolean =>
  Boolean(str && /\d/.test(str))
