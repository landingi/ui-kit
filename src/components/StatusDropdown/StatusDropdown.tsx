import { Icon } from '@components/Icon'
import { PerfectDropdown } from '@components/PerfectDropdown'
import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './StatusDropdown.module.scss'

export interface StatusDropdownProps {
  children: ReactNode
  label: string
  dropdownPlacement:
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-center'
    | 'top-start'
    | 'top-center'
    | 'top-end'
  className?: string | string[]
  status?: 'alert' | 'warning' | 'success' | 'info'
}

const customTrigger =
  ({
    triggerClasses,
    labelClasses,
    label
  }: {
    triggerClasses: string
    labelClasses: string
    label: string
  }) =>
  ({ isOpen }: { isOpen: boolean }) => {
    const renderArrow = () =>
      isOpen ? <Icon icon='icon-caret-up' /> : <Icon icon='icon-caret-down' />

    return (
      <span className={triggerClasses}>
        <span className={labelClasses}>{label}</span>

        <Spreader spread='mini' />

        {renderArrow()}
      </span>
    )
  }

/**
 * StatusDropdown - dropdown component that uses custom trigger whose color depends on status prop given
 * @param {object} children - object of children
 * @param {string} label - label text
 * @param {string} dropdownPlacement - dropdown placement
 * @param {string} className - class name
 * @param {string} status - changes color of dropdown
 * @return an object of children
 */
export const StatusDropdown: FC<StatusDropdownProps> = ({
  children,
  label,
  dropdownPlacement = 'bottom-end',
  className,
  status = 'success'
}) => {
  const labelClasses = useStyles({
    [styles.trigger__label]: true
  })

  const triggerClasses = useStyles(
    {
      [styles.trigger]: true,
      [styles[`trigger--${status}`]]: true
    },
    className
  )

  return (
    <PerfectDropdown
      dropdownPlacement={dropdownPlacement}
      hasArrow={false}
      size='small'
      customTrigger={customTrigger({ label, labelClasses, triggerClasses })}
    >
      {children}
    </PerfectDropdown>
  )
}

StatusDropdown.displayName = 'StatusDropdown'
