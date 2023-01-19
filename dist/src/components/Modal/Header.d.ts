export default ModalHeader;
/**
 * Modal Header - stateless presentational component
 * @param {object} props
 * @param {object} props.title
 * @param {string} props.align - alignment
 * @return {object} An object of children element
 */
declare function ModalHeader({ title, align }: {
    title: object;
    align: string;
}): object;
declare namespace ModalHeader {
    const displayName: string;
    namespace propTypes {
        const title: PropTypes.Validator<string>;
        const align: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const align_1: string;
        export { align_1 as align };
    }
}
import PropTypes from "prop-types";
