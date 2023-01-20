export default MonthRangePicker;
/**
 * MonthRangePicker - stateful component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @param {func} props.i18nHandler - callback function to translate keys
 * @return {object} An object of children element
 */
declare function MonthRangePicker({ onChange, minDate, maxDate, i18nHandler }: {
    onChange: func;
    minDate: date;
    maxDate: date;
    i18nHandler: func;
}): object;
declare namespace MonthRangePicker {
    namespace propTypes {
        const onChange: any;
        const minDate: any;
        const maxDate: any;
        const i18nHandler: any;
    }
}
