import { FC } from 'react';

interface EditableLabelProps {
    initialName: string;
    placeholder?: string;
    size?: 'small' | 'big';
    onChange?: (name: string) => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isClickable?: boolean;
    tooltip?: {
        focused: 'string';
        notFocused: 'string';
    };
}
/**
 * EditableLabel - statefull input component
 * @param {object} props - props
 * @param {string} props.initialName - init name
 * @param {string} props.placeholder - input placeholder
 * @param {string} props.size - label size
 * @param {function} props.onChange - callback function
 * @param {bool} props.isLoading - is loading
 * @param {bool} props.isDisabled - is disabled
 * @param {bool} props.isClickable - is clickable
 * @return {object} An object of children element
 */
declare const EditableLabel: FC<EditableLabelProps>;
export default EditableLabel;
