/**
 * useStyles - hook to extract classes from CSS modules object or provide custom one's
 * @param {object} styles - object with CSS modules styles
 * @param {string | array} classNames - custom classes from outside of component
 * @returns {string} An string with extracted class names
 */
export const useStyles = (styles, classNames = '') => {
  let classes = ''

  for (const [key, value] of Object.entries(styles)) {
    if (value) {
      classes += `${key} `
    }
  }

  if (Array.isArray(classNames)) {
    classNames.forEach(className => {
      classes += `${className} `
    })
  } else {
    classes += `${classNames} `
  }

  return classes.trim()
}
