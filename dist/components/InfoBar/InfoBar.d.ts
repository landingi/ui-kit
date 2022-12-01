import { FC, ReactNode } from 'react';
export interface InfoBarProps {
    children: ReactNode;
    className?: string | string[];
    type?: 'warning' | 'info' | 'alert' | 'success';
}
declare const InfoBar: FC<InfoBarProps>;
export default InfoBar;
