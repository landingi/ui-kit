import PropTypes from 'prop-types'

/**
 * UsePermission - stateful presentational component
 * @param {object} props - props
 * @param {array} props.userPermissions - is an array of permissions set for current user
 * @param {array} props.requiredPermisions - is an array of required permissions
 * @return {object}
 */
export const usePermissions = (
  userPermissions,
  requiredPermisions
) => userPermissions.includes(requiredPermisions)

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
   * UserPermissions
   */
  userPermissions: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  /**
   * RequiredPermisions
   */
  requiredPermisions: PropTypes.string.isRequired
}
