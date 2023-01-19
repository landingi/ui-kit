export default shape;
declare const shape: PropTypes.Requireable<PropTypes.InferProps<{
    children: PropTypes.Requireable<(PropTypes.InferProps<{
        title: PropTypes.Validator<string>;
        url: PropTypes.Validator<string>;
    }> | null | undefined)[]>;
    icon: PropTypes.Requireable<string>;
    title: PropTypes.Validator<string>;
}>>;
import PropTypes from "prop-types";
