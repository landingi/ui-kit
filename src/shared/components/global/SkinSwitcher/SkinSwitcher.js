import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import Image from '@components/ui/Image'
import Button from '@components/ui/Button'
import { switcherLogo } from 'shared/components/global/SideBarV2/helpers/sideBarHelpers'

/**
 * Skin switcher - stateful presentational component
 * @param {object} props - props
 * @param {function} props.handleChangeSkin - change skin callback
 * @param {bool} props.isWhitelabel - is Account whitelabel
 * @return {object} An object of children element
 */
const skinSwitcher = ({
  handleChangeSkin,
  isWhitelabel
}) => {
  const handleChangeCallback = useCallback(label =>
    handleChangeSkin(label)
  )

  return (
    <div className='skin-switcher'>
      <Button
        onClick={useCallback(() =>
          handleChangeCallback('default')
        )}
      >
        <Image src={switcherLogo(isWhitelabel)} />
      </Button>

      <Button
        onClick={useCallback(() =>
          handleChangeCallback('dark')
        )}
      >
        <Image src='https://images.assets-landingi.com/app-ui/dark.svg' />
      </Button>

      <Button
        onClick={useCallback(() =>
          handleChangeCallback('white')
        )}
      >
        <Image src='https://images.assets-landingi.com/app-ui/light.svg' />
      </Button>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
skinSwitcher.displayName = 'Sidebar skin switcher'

/**
 * The properties.
 * @type {Object}
 */
skinSwitcher.propTypes = {
  /**
   * Change skin callback
   */
  handleChangeSkin: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
skinSwitcher.defaultProps = {
  handleChangeSkin: () => null
}

export default memo(skinSwitcher)
