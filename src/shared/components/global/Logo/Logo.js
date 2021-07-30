import React from 'react'
import { styles } from 'shared/helpers/css'
import scss from './Logo.scss'
import { isSafari } from 'shared/helpers/browser'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Logo - stateless presentational component
 * @param {object} props - props
 */
const LongLogo = () => (
  <div className={cssClass('logo Logo__logo__animated')}>
    <svg
      enableBackground="new 0 0 145 23.5"
      version="1.1"
      height="20px"
      viewBox="0 0 145 23.5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cssClass('logotype')}
        fill="#2550AA"
        d="m129.8 5.3c1.4 0 2.6 0.5 3.6 1.5v-1.2h3.1v10.9c0 1.9-0.6 3.5-1.9 4.6s-2.9 1.7-4.8 1.7c-2.1 0-4-0.6-5.6-1.8l1.3-2.5c1.4 0.9 2.8 1.4 4.2 1.4 2.3 0 3.6-1.3 3.6-3.1v-0.5c-0.9 0.9-2.1 1.4-3.6 1.4-1.8 0-3.2-0.6-4.3-1.7-1.1-1.2-1.7-2.6-1.7-4.4s0.6-3.3 1.8-4.5c1-1.3 2.5-1.8 4.3-1.8zm-71.3 0c1.5 0 2.7 0.5 3.7 1.6v-1.3h3.3v12h-3.3v-1.2c-1 1-2.3 1.5-3.7 1.5-1.7 0-3.1-0.6-4.3-1.8-1.1-1.2-1.7-2.7-1.7-4.6 0-1.8 0.6-3.3 1.7-4.5 1.1-1.1 2.6-1.7 4.3-1.7zm38.7-3.9v16.2h-3.3v-1.3c-0.9 1.1-2.1 1.6-3.6 1.6-1.7 0-3.1-0.6-4.2-1.8s-1.7-2.7-1.7-4.5 0.6-3.3 1.7-4.5 2.5-1.8 4.2-1.8c1.4 0 2.5 0.5 3.5 1.5v-5.4h3.4zm-55 0v12.8h8.1v3.5h-11.7v-16.3h3.6zm34.3 3.8c1.3 0 2.4 0.4 3.3 1.3s1.4 2.1 1.4 3.7v7.4h-3.4v-6.5c0-1.8-0.9-2.7-2.3-2.7-1.6 0-2.6 1.1-2.6 2.8v6.4h-3.4v-12h3.4v1.7c0.5-1.2 1.9-2.1 3.6-2.1zm28.2 0.4v12h-3.4v-12h3.4zm11.1-0.4c1.3 0 2.4 0.4 3.3 1.3s1.4 2.1 1.4 3.7v7.4h-3.5v-6.5c0-1.8-0.9-2.7-2.3-2.7-1.6 0-2.6 1.1-2.6 2.8v6.4h-3.4v-12h3.4v1.7c0.5-1.2 1.9-2.1 3.7-2.1zm28.1 0.4v12h-3.4v-12h3.4zm-84.9 2.8c-0.9 0-1.6 0.3-2.2 0.9-0.5 0.7-0.8 1.4-0.8 2.3s0.3 1.6 0.9 2.3c0.6 0.6 1.3 0.9 2.2 0.9s1.6-0.3 2.2-0.9 0.9-1.4 0.9-2.3-0.3-1.6-0.9-2.2c-0.6-0.7-1.3-1-2.3-1zm31.9 0c-0.9 0-1.6 0.3-2.2 0.9s-0.9 1.4-0.9 2.2c0 0.9 0.3 1.7 0.9 2.3s1.3 0.9 2.2 0.9 1.6-0.3 2.2-0.9 0.9-1.4 0.9-2.3-0.3-1.6-0.9-2.2-1.3-0.9-2.2-0.9zm39.3 0c-0.9 0-1.6 0.3-2.2 0.9s-0.9 1.3-0.9 2.2 0.3 1.6 0.9 2.2 1.3 0.9 2.2 0.9 1.6-0.3 2.2-0.9 0.9-1.4 0.9-2.3c-0.1-1.7-1.4-3-3.1-3zm-27.2-8.1c1.1 0 2 0.9 2 2 0 1.2-0.9 2-2 2-1.2 0-2.1-0.9-2.1-2 0.1-1.2 1-2 2.1-2zm39.2 0c1.1 0 2 0.9 2 2 0 1.2-0.9 2-2 2-1.2 0-2.1-0.9-2.1-2 0.1-1.2 1-2 2.1-2z"
      />

      <rect
        className={cssClass('white')}
        fill="#FFFFFF"
        width="33.3"
        height="23.5"
      />

      <rect
        className={cssClass(
          isSafari ? 'rectangle_safari' : 'rectangle'
        )}
        fill="#2550AA"
        transform="matrix(.7071 -.7071 .7071 .7071 -5.3426 11.257)"
        x="5.8"
        y="2"
        width="10.2"
        height="20.1"
      />

      <polygon
        className={cssClass('triangle')}
        fill="#2550AA"
        points="21.6 1.4 28.7 8.5 21.6 15.5"
      />
    </svg>
  </div>
)

const ShortLogo = () => (
  <div className={cssClass('logo Logo__logo__animated')}>
    <svg
      enableBackground="new 0 0 50 23.5"
      version="1.1"
      height="20px"
      viewBox="0 0 50 23.5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={cssClass(
          isSafari ? 'rectangle_safari' : 'rectangle'
        )}
        fill="#2550AA"
        transform="matrix(.7071 -.7071 .7071 .7071 -5.3426 11.257)"
        x="5.8"
        y="2"
        width="10.2"
        height="20.1"
      />

      <polygon
        className={cssClass('triangle')}
        fill="#2550AA"
        points="21.6 1.4 28.7 8.5 21.6 15.5"
      />
    </svg>
  </div>
)

/**
 * Display name
 * @type {string}
 */
LongLogo.displayName = 'Logo long'
ShortLogo.displayName = 'Logo short'

/**
 * The default properties.
 * @type {Object}
 */
LongLogo.defaultProps = {
  className: 'logo Logo__logo__animated'
}

ShortLogo.defaultProps = {
  className: 'logo Logo__logo__animated'
}

export { LongLogo, ShortLogo }
