import { FC } from 'react'

import { Button, ButtonProps } from './Button'
import {
  ButtonGroup as ButtonGroupComponent,
  ButtonGroupProps as ButtonGroupComponentProps
} from './ButtonGroup'

interface IButtonGroupComposition {
  Button: FC<ButtonProps>
}

type ButtonGroupProps = FC<ButtonGroupComponentProps> & IButtonGroupComposition

const ButtonGroup: ButtonGroupProps = ButtonGroupComponent as ButtonGroupProps

ButtonGroup.Button = Button

export { ButtonGroup }
