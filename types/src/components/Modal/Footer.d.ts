export default ModalFooter;
/**
 * Modal Footer - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.align - alignment
 * @return {object} An object of children element
 */
declare function ModalFooter({ children, align }: {
    children: object;
    align: string;
}): object;
declare namespace ModalFooter {
    const displayName: string;
    namespace propTypes {
        const align: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    }
    namespace defaultProps {
        const align_1: string;
        export { align_1 as align };
    }
}
import PropTypes from "prop-types";
