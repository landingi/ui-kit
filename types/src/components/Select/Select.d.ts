export default Select;
/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string|number} props.value - value
 * @param {array} props.data - data
 * @param {name} props.name - name
 * @param {function} props.onChange - on change handler
 * @return {object} An object of children element
 */
declare function Select({ value, data, name, onChange, "data-testid": dataTestId }: {
    value: string | number;
    data: array;
    name: void;
    onChange: Function;
}): object;
declare namespace Select {
    const displayName: string;
    const propTypes: {
        data: PropTypes.Validator<(PropTypes.InferProps<{}> | null | undefined)[]>;
        name: PropTypes.Validator<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        'data-testid': PropTypes.Requireable<string>;
    };
    const defaultProps: {
        onChange: () => null;
        'data-testid': string;
        value: undefined;
    };
}
import PropTypes from "prop-types";
