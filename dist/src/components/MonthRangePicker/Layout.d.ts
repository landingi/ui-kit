export default Picker;
/**
 * Picker - stateful presentational component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @param {date} props.i18n - object of translations
 * @param {func} props.i18nHandler - callback function to translate keys
 * @return {object} An object of children element
 */
declare function Picker({ minDate, maxDate, onChange, i18n, i18nHandler }: {
    onChange: func;
    minDate: date;
    maxDate: date;
    i18n: date;
    i18nHandler: func;
}): object;
declare namespace Picker {
    const displayName: string;
    namespace propTypes {
        const minDate: PropTypes.Validator<Date>;
        const maxDate: PropTypes.Validator<Date>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            apply: PropTypes.Requireable<string>;
        }>>;
        const i18nHandler: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        const i18n_1: {};
        export { i18n_1 as i18n };
    }
}
import PropTypes from "prop-types";
