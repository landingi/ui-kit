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
        const align: any;
        const children: any;
    }
    namespace defaultProps {
        const align_1: string;
        export { align_1 as align };
    }
}
