import Button from '@components/Button'
import Divider from '@components/Divider'
import Dropdown from '@components/Dropdown'
import Error from '@components/Form/Error'
import { Heading } from '@components/Heading'
import { Icon } from '@components/Icon'
import { Label } from '@components/Label'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import Loader from '@components/Loader'
import { Message } from '@components/Message'
import { Overflow } from '@components/Overflow'
import { Paragraph } from '@components/Paragraph'
import { Searcher } from '@components/Searcher'
import { Spacer } from '@components/Spacer'
import { emitCloseDropdown } from '@events/dropdown'
import { isEmpty } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { Fragment, useCallback, useEffect, useState } from 'react'

import styles from './DropdownSelect.module.scss'

/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - field name
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {string} props.label - label
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.hasLabel - has label
 * @param {array} props.options - list of options
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {string} props.searchPlaceholder - search placeholder
 * @param {bool} props.inModal - position in modal
 * @param {bool} props.isLoading - list loading spinner
 * @param {bool} props.isEmptyList - display empty list
 * @param {bool} props.hasDescription - description
 * @param {object} props.overflowStyle - overflow style
 * @param {array} props.emphasisedOptions - emphasised options
 * @param {bool} props.liveChanges - search by entering characters
 * @param {bool} props.optionalContent
 * @param {bool} props.hasLoadMoreButton - has load more button
 * @param {function} props.loadMoreEvent - load more button event
 * @param {object} props.i18n - object of translations
 * @return {object} An object of children element
 */
const DropdownSelectForm = ({
  name,
  value,
  onChange,
  errors,
  touched,
  label,
  hasLabel,
  options,
  handleOnSearchChange,
  searchPlaceholder,
  inModal,
  isLoading,
  isEmptyList,
  hasDescription,
  overflowStyle,
  emphasisedOptions,
  liveChanges,
  optionalContent,
  hasLoadMoreButton,
  loadMoreEvent,
  i18n
}) => {
  const [inModalPosition, setInModalPosition] = useState(false)

  const labelStyles = useStyles({
    [styles['form-field__label']]: true,
    [styles['form-field__label--has-error']]: errors[name] || touched[name],
    [styles['form-field__label--has-value']]: value[name]
  })

  const dropdownStyles = useStyles({
    [styles['form-field__dropdown--has-error']]: errors[name] || touched[name]
  })

  const handleChange = useCallback((name, item) => {
    emitCloseDropdown()
    onChange(name, item)
  })

  useEffect(() => {
    setInModalPosition(inModal)
  }, [inModal])

  const renderOption = item =>
    hasDescription ? (
      <Fragment>
        <Button
          variant='dropdown-element'
          onClick={() => handleChange(name, item)}
        >
          <Heading level={5}>{item?.label}</Heading>

          <Paragraph color='accent-2' size={12}>
            {item?.description}
          </Paragraph>
        </Button>

        <Divider />
      </Fragment>
    ) : (
      <Button
        variant='dropdown-element'
        onClick={() => handleChange(name, item)}
      >
        {item?.label}
      </Button>
    )

  const renderOptions = () => (
    <Fragment>
      {emphasisedOptions.map((item, index) => (
        <ListItem className='list-item--dropdown' key={index}>
          {renderOption(item)}
        </ListItem>
      ))}

      {!isEmpty(emphasisedOptions) && <Divider />}

      {options.map((item, index) => (
        <ListItem className='list-item--dropdown' key={index}>
          {renderOption(item)}
        </ListItem>
      ))}
    </Fragment>
  )

  const renderLoadMoreButton = () => (
    <Button
      align='left'
      variant='dropdown'
      onClick={loadMoreEvent}
      hasIcon
      fitWidth
    >
      <Icon icon='icon-arrow-down' />

      {i18n.loadmore}
    </Button>
  )

  return (
    <div>
      {label && hasLabel && (
        <Label id={name} className={labelStyles}>
          {label}
        </Label>
      )}

      <Dropdown
        hasInput
        hasFullInputStyle
        asPlaceholder={!value[name]?.label}
        size='fixed'
        alignment={value ? 'spaced' : 'end'}
        inModal={inModalPosition}
        className={dropdownStyles}
      >
        {handleOnSearchChange && (
          <Fragment>
            <div className={styles['search-container']}>
              <Searcher
                setSearchPhrase={handleOnSearchChange}
                placeholder={searchPlaceholder}
                tag='div'
                protectedSubmit
                liveChanges={liveChanges}
              />
            </div>

            <Divider variant='dropdown' />
          </Fragment>
        )}

        <Overflow>
          <div style={overflowStyle}>
            <List>
              {!isLoading && isEmptyList && isEmpty(options) ? (
                <Message
                  title='message.empty.search.results'
                  message='message.empty.search.results.small'
                  url='https://images.assets-landingi.com/images/search_empty.svg'
                  height={41}
                  titleLevel={5}
                  messageLevel={6}
                />
              ) : (
                <Fragment>
                  {renderOptions()}

                  {!isLoading && hasLoadMoreButton && renderLoadMoreButton()}
                </Fragment>
              )}

              {isLoading && <Loader />}
            </List>

            <Spacer space='tiny' />
          </div>
        </Overflow>

        {optionalContent}
      </Dropdown>

      <Error error={errors[name]} />
    </div>
  )
}

DropdownSelectForm.displayName = 'DropdownSelectForm'

DropdownSelectForm.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.instanceOf(Object),
    PropTypes.number,
    PropTypes.bool
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.instanceOf(Object),
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  hasLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object)
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.object
      ])
    })
  ).isRequired,
  handleOnSearchChange: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  inModal: PropTypes.bool,
  hasDescription: PropTypes.bool,
  overflowStyle: PropTypes.instanceOf(Object),
  emphasisedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object)
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.object
      ])
    })
  ),
  liveChanges: PropTypes.bool,
  optionalContent: PropTypes.node,
  hasLoadMoreButton: PropTypes.bool,
  loadMoreEvent: PropTypes.func,
  isLoading: PropTypes.bool,
  isEmptyList: PropTypes.bool,
  i18n: PropTypes.shape({ loadmore: PropTypes.string })
}

DropdownSelectForm.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
  onChange: () => null,
  handleOnSearchChange: null,
  onBlur: () => null,
  errors: {},
  touched: {},
  hasLabel: true,
  value: null,
  searchPlaceholder: '',
  inModal: false,
  empty: '',
  img: '',
  isLoading: false,
  isEmptyList: false,
  hasDescription: false,
  overflowStyle: {},
  emphasisedOptions: [],
  liveChanges: false,
  optionalContent: null,
  hasLoadMoreButton: false,
  loadMoreEvent: () => null,
  i18n: {
    loadmore: ''
  }
}

export default DropdownSelectForm
