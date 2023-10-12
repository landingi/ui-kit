import { FC, MouseEventHandler } from 'react';
export interface NotificationProps {
    children: React.ReactNode;
    className?: string | string[];
    hasTime?: boolean;
    type?: 'info' | 'success' | 'warning' | 'alert';
    isClosable?: boolean;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
export declare const Notification: FC<NotificationProps>;
