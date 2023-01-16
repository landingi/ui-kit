import { ChangeEventHandler, FC, FocusEventHandler } from 'react';
interface FormikCheckboxProps {
    className?: string | string[];
    field: {
        name: string;
        value: boolean;
        onChange: ChangeEventHandler<HTMLInputElement>;
        onBlur: FocusEventHandler<HTMLInputElement>;
    };
    form: {
        errors: {
            [key: string]: string;
        };
        touched: {
            [key: string]: boolean;
        };
    };
    id: string;
    label: string;
    type?: 'text' | 'number' | 'password';
}
/**
 * Formik toggle - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {string} props.type
 * @param {object} props.field
 * @param {object} props.form
 * @param {string} props.id
 * @param {string} props.label
 * @return {object} An object of children element
 */
declare const FormikToggle: FC<FormikCheckboxProps>;
export default FormikToggle;
