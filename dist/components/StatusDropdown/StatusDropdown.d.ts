export default StatusDropdown;
/**
 * StatusDropdown - dropdown component that uses custom trigger whose color depends on status prop given
 * @param {object} children - object of children
 * @param {string} label - label text
 * @param {string} dropdownPlacement - dropdown placement
 * @param {string} className - class name
 * @param {string} status - changes color of dropdown
 * @return an object of children
 */
declare function StatusDropdown({ children, label, dropdownPlacement, className, status }: object): JSX.Element;
declare namespace StatusDropdown {
    namespace propTypes {
        const dropdownPlacement: any;
        const children: any;
        const label: any;
        const className: any;
        const status: any;
    }
    namespace defaultProps {
        const dropdownPlacement_1: string;
        export { dropdownPlacement_1 as dropdownPlacement };
        const label_1: null;
        export { label_1 as label };
        const className_1: string;
        export { className_1 as className };
    }
    const displayName: string;
}
