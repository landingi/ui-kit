export const useStyles = styles => {
  let classes = ''

  for (const [key, value] of Object.entries(styles)) {
    if (value) {
      classes += `${key} `
    }
  }

  return classes.trim()
}
