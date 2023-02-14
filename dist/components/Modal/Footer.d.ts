import { FC, ReactNode } from 'react';
export interface ModalFooterProps {
    children: ReactNode;
    align?: 'left' | 'center' | 'right';
}
export declare const ModalFooter: FC<ModalFooterProps>;
