import { FC } from 'react';
export interface EditableLabelProps {
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
export declare const EditableLabel: FC<EditableLabelProps>;
