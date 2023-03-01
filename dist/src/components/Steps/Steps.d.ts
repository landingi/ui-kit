import { FC } from 'react';
export interface StepsProps {
    data: {
        variant: 'completed' | 'current' | 'next';
        description: string;
    }[];
}
declare const Steps: FC<StepsProps>;
export default Steps;
