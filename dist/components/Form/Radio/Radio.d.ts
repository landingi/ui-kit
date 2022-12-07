import React, { FC } from 'react';
interface RadioProps {
    field: {
        name: string;
        value: string;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
        onBlur: React.FocusEventHandler<HTMLInputElement>;
    };
    id: string;
    label?: string;
    className?: string | string[];
    type?: string;
    disabled?: boolean;
}
export declare const Radio: FC<RadioProps>;
export {};
