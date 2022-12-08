import { FC, ReactNode } from 'react';
interface InstructionProps {
    className?: string | string[];
    data: {
        content: ReactNode;
    }[];
}
export declare const Instruction: FC<InstructionProps>;
export {};
