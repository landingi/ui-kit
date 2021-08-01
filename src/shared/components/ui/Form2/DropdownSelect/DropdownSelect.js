/* eslint-disable react/jsx-no-bind */
import React, {
  useCallback,
  useEffect,
  useState,
  Fragment
} from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form2/Error'
import scss from './Select.scss'
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
import Searcher from 'shared/components/global/Searcher'

import Paragraph from '@components/ui/Paragraph'
import Label from '@components/ui/Label'
const cssClass = styles(scss)

/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string} props.className - classname
 * @param {string} props.name - field name
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {string} props.label - label
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.hasLabel - has label
 * @param {string} props.placeholder - placeholder
 * @param {array} props.options - list of options
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {string} props.searchPlaceholder - search placeholder
 * @param {bool} props.inModal - position in modal
 * @param {string} props.empty - empty list title
 * @param {string} props.img - image empty list
 * @param {bool} props.isLoading - list loading spinner
 * @param {bool} props.isEmptyList - display empty list
 * @param {bool} props.liveChanges - search by entering characters
 * @param {bool} props.optionalContent
 * @return {object} An object of children element
 */
const select = ({
  className,
  name,
  value,
  onChange,
  errors,
  touched,
  id,
  label,
  hasLabel,
  placeholder,
  options,
  handleOnSearchChange,
  searchPlaceholder,
  inModal,
  empty,
  img,
  isLoading,
  isEmptyList,
  hasDescription,
  overflowStyle,
  emphasisedOptions,
  liveChanges,
  optionalContent
}) => {
  const [inModalPosition, setInModalPosition] =
    useState(false)
  const errorClass = errors[name] ? 'form--has-error' : ''
  const valueClass = value[name] ? 'form--has-value' : ''
  const filledClass = touched[name]
    ? 'form-field--touched'
    : ''

  const handleChange = useCallback((name, item) => {
    emitCloseDropdown()
    onChange(name, item)
  })

  useEffect(() => {
    setInModalPosition(inModal)
  }, [inModal])

  const renderOption = item =>
    hasDescription ? (
      <>
        <Button
          onClick={() => handleChange(name, item)}
          variant="dropdown-element"
        >
          <Heading level={5}>{item?.label}</Heading>

          <Paragraph color="accent-2"
size={12}>
            {item?.description}
          </Paragraph>
        </Button>

        <Divider />
      </>
    ) : (
      <Button
        onClick={() => handleChange(name, item)}
        variant="dropdown-element"
      >
        {item?.label}
      </Button>
    )

  const renderOptions = () => (
    <>
      {emphasisedOptions.map((item, index) => (
        <ListItem
          className="list-item--dropdown"
          key={index}
        >
          {renderOption(item)}
        </ListItem>
      ))}

      {!isEmpty(emphasisedOptions) && <Divider />}

      {options.map((item, index) => (
        <ListItem
          className="list-item--dropdown"
          key={index}
        >
          {renderOption(item)}
        </ListItem>
      ))}
    </>
  )

  return (
    <div
      className={`form-field form-field--dropdown ${
        errorClass || valueClass || filledClass
      }`}
    >
      {label && hasLabel && (
        <Label id={name}>{label}</Label>
      )}

      <Dropdown
        alignment="spaced"
        asPlaceholder={!value[name]?.label}
        hasFullInputStyle
        hasInput
        inModal={inModalPosition}
        label={value[name]?.label || label}
        size="fixed"
      >
        {handleOnSearchChange && (
          <>
            <div className={cssClass('search-container')}>
              <Searcher
                liveChanges={liveChanges}
                placeholder={searchPlaceholder}
                protectedSubmit
                setSearchPhrase={handleOnSearchChange}
                tag="div"
              />
            </div>

            <Divider variant="dropdown" />
          </>
        )}

        <Overflow>
          <div style={overflowStyle}>
            <List>
              {!isLoading &&
              isEmptyList &&
              isEmpty(options) ? (
                <Message
                  height={41}
                  message="message.empty.search.results.small"
                  messageLevel={6}
                  title="message.empty.search.results"
                  titleLevel={5}
                  url="https://images.assets-landingi.com/images/search_empty.svg"
                />
              ) : (
                renderOptions()
              )}

              {isLoading && <Loader />}
            </List>

            <Spacer space="tiny" />
          </div>
        </Overflow>

        {optionalContent}
      </Dropdown>

      <Error error={errors[name]} />
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
select.displayName = 'Select in dropdown'

/**
 * The properties.
 * @type {Object}
 */
select.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
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
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
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
  optionalContent: PropTypes.node
}

/**
 * The default properties.
 * @type {Object}
 */
select.defaultProps = {
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
  optionalContent: null
}

export default select
