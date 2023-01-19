export default DateTimePicker;
/**
 * Date Time Picker - stateless presentational component
 * this component is a wrapper for react-date-range calendar
 * we modify ui and add handler to confirm date pick
 * @param {object} props - props
 * @param {function} props.setDate - date handler
 * @param {string} props.minDate - defines minimum date - disabled earlier dates
 * @param {object} props.i18n
 * @param {date} props.maxDate - defines maximum date - disabled later dates (Calendar)
 * @param {bool} props.oneDatePicker - should render picker for one date - disabled date ranges
 * @param {date} props.selectedDateCalendar - defines selected date for calendar
 * @param {bool} props.showMonthAndYearPickers - should render select list for month and year
 */
declare function DateTimePicker({ setDate, minDate, maxDate, oneDatePicker, selectedDateCalendar, showMonthAndYearPickers, i18n }: {
    setDate: Function;
    minDate: string;
    i18n: object;
    maxDate: date;
    oneDatePicker: bool;
    selectedDateCalendar: date;
    showMonthAndYearPickers: bool;
}): JSX.Element;
declare namespace DateTimePicker {
    const displayName: string;
    namespace propTypes {
        const setDate: PropTypes.Validator<(...args: any[]) => any>;
        const minDate: PropTypes.Requireable<string>;
        const maxDate: PropTypes.Requireable<Date>;
        const oneDatePicker: PropTypes.Requireable<boolean>;
        const selectedDateCalendar: PropTypes.Requireable<Date>;
        const showMonthAndYearPickers: PropTypes.Requireable<boolean>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            apply: PropTypes.Requireable<string>;
        }>>;
    }
    namespace defaultProps {
        const minDate_1: null;
        export { minDate_1 as minDate };
        const maxDate_1: undefined;
        export { maxDate_1 as maxDate };
        const oneDatePicker_1: boolean;
        export { oneDatePicker_1 as oneDatePicker };
        const showMonthAndYearPickers_1: boolean;
        export { showMonthAndYearPickers_1 as showMonthAndYearPickers };
        const i18n_1: {};
        export { i18n_1 as i18n };
    }
}
import PropTypes from "prop-types";
