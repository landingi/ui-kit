import { FC } from 'react';
export interface FeedbackProps {
    className?: string | string[];
    customIcon?: string;
    i18n: {
        name: string;
        content: string;
        button: string;
    };
    handleFeedback: () => void;
    buttonVariant: 'primary' | 'secondary';
}
export declare const Feedback: FC<FeedbackProps>;
