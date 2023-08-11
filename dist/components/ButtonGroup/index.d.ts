import { FC } from 'react';
import { ButtonProps } from './Button';
import { ButtonGroupProps as ButtonGroupComponentProps } from './ButtonGroup';
interface IButtonGroupComposition {
    Button: FC<ButtonProps>;
}
type ButtonGroupProps = FC<ButtonGroupComponentProps> & IButtonGroupComposition;
declare const ButtonGroup: ButtonGroupProps;
export { ButtonGroup };
