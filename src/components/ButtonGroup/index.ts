import { FC, ForwardRefExoticComponent } from 'react'

import { Button, ButtonProps } from './Button'
import {
  ButtonGroup as ButtonGroupComponent,
  ButtonGroupProps as ButtonGrouComponentProps
} from './ButtonGroup'

interface ButtonGroupProps
  extends ForwardRefExoticComponent<ButtonGrouComponentProps> {
  Button: FC<ButtonProps>
}

export const ButtonGroup = {
  ...ButtonGroupComponent,
  Button
} as ButtonGroupProps
