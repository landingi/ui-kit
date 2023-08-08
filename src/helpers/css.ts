import classnames, { Argument } from 'classnames'

export const styles = (
  css: Record<string, string>
): ((...args: Argument[]) => string) => classnames.bind(css)
