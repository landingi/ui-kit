import React from 'react'
import PerfectDropdown from '@components/PerfectDropdown'
import styles from './GroupTab.module.scss'
import { NavLink } from 'react-router-dom'
import { Row } from 'simple-flexbox'
import PropTypes from 'prop-types'

/**
 * GroupTab - component used in pages where there is possible filtering by groups
 * @param {string} groupLink - link to the group, it should contain group id
 * @param {string} groupName - group name to display as label
 * @param {object} dropdownContent - what to display in dropdown opened by clicking three dots
 * @return an object of children
 */
const GroupTab = ({ groupLink, groupName, dropdownContent }) => (
  <NavLink to={groupLink} activeClassName={styles['groups--selected']}>
    <Row
      justifyContent='space-between'
      alignItems='center'
      className={styles['group-btn']}
    >
      <div className={styles['group-btn__text']}>{groupName}</div>
      <PerfectDropdown
        size='small'
        arrowType='dots'
        className={styles['group-tab-dropdown']}
      >
        {dropdownContent}
      </PerfectDropdown>
    </Row>
  </NavLink>
)

GroupTab.propTypes = {
  groupLink: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  dropdownContent: PropTypes.node
}

export default GroupTab
