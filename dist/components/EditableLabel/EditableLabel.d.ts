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
declare const EditableLabel: FC<EditableLabelProps>;
export default EditableLabel;
