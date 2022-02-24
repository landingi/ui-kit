import React, { useCallback, useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
// import Error from '@components/ui/Form/Error'
import Message from '@components/ui/Message/Message'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import Dropdown from '@components/ui/Dropdown'
import Heading from '@components/ui/Heading'
import Button from '@components/ui/Button'
import Overflow from '@components/ui/Overflow'
import Divider from '@components/ui/Divider'
import Loader from '@components/ui/Loader'
import { emitCloseDropdown } from '@events/dropdown'
import { isEmpty } from '@helpers/data'
import Spacer from '@components/ui/Spacer'
import Searcher from '@components/global/Searcher'
import Paragraph from '@components/ui/Paragraph'
import Label from '@components/ui/Label'
import Icon from '@components/ui/Icon'
import scss from './Select.scss'

const cssClass = styles(scss)
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
  i18n,
  hasParentElementFixed
}) => {
  const [inModalPosition, setInModalPosition] = useState(false)
  const errorClass = errors[name] ? 'form--has-error' : ''
  const valueClass = value[name] ? 'form--has-value' : ''
  const filledClass = touched[name] ? 'form-field--touched' : ''

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
    <div
      className={`form-field form-field--dropdown ${
        errorClass || valueClass || filledClass
      }`}
    >
      {label && hasLabel && <Label id={name}>{label}</Label>}

      <Dropdown
        label={value[name]?.label || label}
        hasInput
        hasFullInputStyle
        asPlaceholder={!value[name]?.label}
        size='fixed'
        alignment='spaced'
        hasParentElementFixed={hasParentElementFixed}
        inModalName={inModalPosition}
      >
        {handleOnSearchChange && (
          <Fragment>
            <div className={cssClass('search-container')}>
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

      {/* <Error error={errors[name]} /> */}
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
  hasParentElementFixed: PropTypes.bool,
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
  hasParentElementFixed: false,
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
