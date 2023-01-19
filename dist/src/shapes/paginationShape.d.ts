export default shape;
declare const shape: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
    after_values: PropTypes.Requireable<PropTypes.InferProps<{
        next: PropTypes.Requireable<number>;
    }>>;
    before_values: PropTypes.Requireable<PropTypes.InferProps<{
        first: PropTypes.Requireable<number>;
        prev: PropTypes.Requireable<number>;
    }>>;
    values: PropTypes.Requireable<PropTypes.InferProps<{
        after: PropTypes.Requireable<(number | null | undefined)[]>;
        before: PropTypes.Requireable<(number | null | undefined)[]>;
        current: PropTypes.Requireable<(number | null | undefined)[]>;
    }>>;
}>>>;
import PropTypes from "prop-types";
