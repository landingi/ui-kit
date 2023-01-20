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
        data: any;
        name: any;
        onChange: any;
        value: any;
        'data-testid': any;
    };
    const defaultProps: {
        onChange: () => null;
        'data-testid': string;
        value: undefined;
    };
}
