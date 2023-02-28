import { FC } from 'react';
export interface ModalHeaderProps {
    title: string;
    align?: 'left' | 'center' | 'right';
}
export declare const ModalHeader: FC<ModalHeaderProps>;
