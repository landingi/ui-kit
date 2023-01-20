export default Filter;
/**
 * Filter - stateful presentational component
 * @param {object} props - props
 * @param {array} props.values - values to choose
 * @param {function} props.setValue - parent component filter setter
 * @param {string | object} props.initialValue - initial value
 * @param {string} props.localStorageKey - local storage key, if filter value should be remebered between sessions
 * @param {string} props.customLabel - customLabel custom label component
 * @return {object} An object of children element
 */
declare function Filter({ values, setValue, initialValue, localStorageKey, customLabel, "data-testid": dataTestId, dropdownPlacement }: {
    values: array;
    setValue: Function;
    initialValue: string | object;
    localStorageKey: string;
    customLabel: string;
}): object;
declare namespace Filter {
    const displayName: string;
    const propTypes: {
        initialValue: any;
        localStorageKey: any;
        setValue: any;
        values: any;
        customLabel: any;
        'data-testid': any;
        dropdownPlacement: any;
    };
    const defaultProps: {
        initialValue: null;
        localStorageKey: null;
        setValue: () => null;
        customLabel: null;
        'data-testid': string;
        dropdownPlacement: string;
    };
}
