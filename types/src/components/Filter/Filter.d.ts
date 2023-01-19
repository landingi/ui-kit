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
        initialValue: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        localStorageKey: PropTypes.Requireable<string>;
        setValue: PropTypes.Requireable<(...args: any[]) => any>;
        values: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Requireable<Object>;
            value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        }> | null | undefined)[]>;
        customLabel: PropTypes.Requireable<(...args: any[]) => any>;
        'data-testid': PropTypes.Requireable<string>;
        dropdownPlacement: PropTypes.Requireable<string>;
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
import PropTypes from "prop-types";
