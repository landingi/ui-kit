import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Error.module.scss'

interface ErrorProps {
  error?: string
  className?: string | string[]
}

const Error: FC<ErrorProps> = ({ error, className }) => {
  const errorStyles = useStyles({ [styles.error]: true }, className)

  return error ? <span className={errorStyles}>{error}</span> : null
}

Error.displayName = 'Error'

export default Error
