import PropTypes from 'prop-types'

/**
 * usePermission - stateful presentational component
 * @param {object} props - props
 * @param {array} props.userPermissions - is an array of permissions set for current user
 * @param {array} props.requiredPermisions - is an array of required permissions
 * @return {object}
 */
export const usePermissions = (userPermissions, requiredPermisions) =>
  userPermissions.includes(requiredPermisions)

/**
 * Display name
 * @type {string}
 */
usePermissions.displayName = 'usePermissions'

/**
 * The properties.
 * @type {Object}
 */
usePermissions.propTypes = {
  /**
   * userPermissions
   */
  userPermissions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  /**
   * requiredPermisions
   */
  requiredPermisions: PropTypes.string.isRequired
}
