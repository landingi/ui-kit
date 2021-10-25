import PropTypes from 'prop-types'

/**
 * UsePermission - stateful presentational component
 * @param {object} props - props
 * @param {array} props.userPermissions - is an array of permissions set for current user
 * @param {array} props.requiredPermisions - is an array of required permissions
 * @return {object}
 */
export const usePermissions = (userPermissions, requiredPermisions) =>
  userPermissions.includes(requiredPermisions)

usePermissions.displayName = 'usePermissions'

usePermissions.propTypes = {
  /**
   * RequiredPermisions
   */
  requiredPermisions: PropTypes.string.isRequired,

  /**
   * UserPermissions
   */
  userPermissions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
