import React, {
  useCallback,
  Fragment,
  useRef,
  useState,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import Error from '@components/Form/Error'
import Message from '@components/Message/Message'
import List from '@components/List'
import ListItem from '@components/List/Item'
import Dropdown from '@components/Dropdown'
import Heading from '@components/Heading'
import Button from '@components/Button'
import Overflow from '@components/Overflow'
import Divider from '@components/Divider'
import Loader from '@components/Loader'
import { emitCloseDropdown } from '@events/dropdown'
import { isEmpty } from '@helpers/data'
import Spacer from '@components/Spacer'
import Searcher from '@components/Searcher'
import Search from '@components/Search'
import Paragraph from '@components/Paragraph'
import Label from '@components/Label'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './DropdownSelect.module.scss'

// TODO DropdownSelect css, mdx, tests, jsdoc props
/**
 * DropdownSelect - stateless presentational component
 * @param {object} props - props
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {string} props.label - label
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label
 * @param {array} props.options - list of options
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {string} props.searchPlaceholder - search placeholder
 * @param {bool} props.inModal - position in modal
 * @param {bool} props.isLoading - list loading spinner
 * @param {bool} props.isEmptyList - display empty list
 * @param {bool} props.liveChanges - search by entering characters
 * @param {bool} props.optionalContent
 * @param {func} props.dropdownLabel
 * @param {func} props.className - wrapper custom styles
 * @param {func} props.customValue - allow use custom value which is not in options
 * @param {func} props.formikKey - name on formik 'nasted' keys
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {bool} props.isOpenDisabled - when its true dropdown can't be open, default: false
 * @param {string} props.alwaysShowLabel - always show label on top
 * @param {string} props.searchInOptions - alow user to search item in options list
 * @param {string} props.i18n - object of translations
 * @return {object} An object of children element
 */
const DropdownSelect = ({
  value,
  onChange,
  errors,
  touched,
  label,
  options,
  handleOnSearchChange,
  inModalName,
  isLoading,
  isEmptyList,
  hasDescription,
  overflowStyle,
  emphasisedOptions,
  liveChanges,
  optionalContent,
  dropdownLabel,
  className,
  customValue,
  formikKey,
  alwaysShowLabel,
  isOpenDisabled,
  searchInOptions,
  i18n
}) => {
  const hasLabel = value || alwaysShowLabel

  const labelStyles = useStyles({
    [styles['form-field__label']]: true,
    [styles['form-field__label--has-error']]:
      errors[formikKey] || touched[formikKey],
    [styles['form-field__label--has-label']]: hasLabel,
    [styles['form-field__label--disabled']]: isOpenDisabled
  })

  const dropdownStyles = useStyles({
    [styles['form-field__dropdown--has-error']]:
      errors[formikKey] || touched[formikKey]
  })

  const getSelectedItem = () => {
    const currentItem = options.find(
      ({ value: itemValue }) => itemValue === value
    )

    if (currentItem) {
      return currentItem
    } if (customValue && !currentItem) {
      return { value, label: value }
    } 
      return null
    
  }

  const selectedItem = getSelectedItem()

  /**
   * checks if user want to use formik or not
   */
  const handleChange = useCallback(value => {
    if (formikKey) {
      onChange(formikKey, value)
    } else {
      onChange(value)
    }
    emitCloseDropdown()
  })

  const dropdownRef = useRef(null)
  const containerRef = useRef(null)
  /**
   * autosize width for dropdown
   */
  const [dropdownWidth, setDropdownWidth] = useState(null)

  useEffect(() => {
    const labelWidth = containerRef.current?.clientWidth

    if (labelWidth) setDropdownWidth(labelWidth)
  }, [containerRef.current])

  const renderOption = item =>
    hasDescription ? (
      <Fragment>
        <Button
          variant='dropdown-element'
          onClick={() => handleChange(item.value)}
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
        onClick={() => handleChange(item.value)}
      >
        {item?.label}
      </Button>
    )

  const [searchValue, setSearchValue] = useState(null)

  const handleSearchOptionsChange = event => {
    setSearchValue(event?.target.value)
  }

  /**
   * Clear value in search / searcher
   */
  const clearSearchValue = useCallback(() => setSearchValue(''), [])

  const renderOptions = () => (
    <Fragment>
      {emphasisedOptions.map((item, index) => (
        <ListItem className='list-item--dropdown' key={index}>
          {renderOption(item)}
        </ListItem>
      ))}

      {!isEmpty(emphasisedOptions) && <Divider />}

      {options
        .filter(({ label }) => {
          if (!searchValue) {
            return true
          }
          const items = label
            .toLowerCase()
            .match(new RegExp(searchValue.toLowerCase()))

          return items
        })
        .map((item, index) => (
          <ListItem className='list-item--dropdown' key={index}>
            {renderOption(item)}
          </ListItem>
        ))}
    </Fragment>
  )

  return (
    <div className={className} ref={containerRef}>
      {label && (
        <Label id={label} className={labelStyles}>
          {label}
        </Label>
      )}

      <Dropdown
        label={
          dropdownLabel ? dropdownLabel(selectedItem) : selectedItem?.label
        }
        hasInput
        hasFullInputStyle
        asPlaceholder={!selectedItem?.label}
        size='fixed'
        alignment={hasLabel ? 'spaced' : 'end'}
        inModalName={inModalName}
        ref={dropdownRef}
        isOpenDisabled={isOpenDisabled}
        handleOnClose={clearSearchValue}
        className={dropdownStyles}
      >
        {handleOnSearchChange && (
          <Fragment>
            <div className={styles['search-container']}>
              <Searcher
                setSearchPhrase={handleOnSearchChange}
                i18n={{ placeholder: i18n.placeholder }}
                tag='div'
                protectedSubmit
                liveChanges={liveChanges}
              />
            </div>
            <Divider variant='dropdown' />
          </Fragment>
        )}
        {searchInOptions && (
          <Fragment>
            <div className={styles['search-container']}>
              <Search
                onChange={handleSearchOptionsChange}
                i18n={{ placeholder: i18n.placeholder }}
                tag='div'
                autoFocus
              />
            </div>
            <Divider variant='dropdown' />
          </Fragment>
        )}

        <Overflow>
          <div
            style={{
              minWidth: dropdownWidth,
              ...overflowStyle
            }}
          >
            <List>
              {!isLoading && isEmptyList && isEmpty(options) ? (
                <Message
                  title={i18n.emptySearchMessageTitle}
                  message={i18n.emptySearchMessage}
                  url='https://images.assets-landingi.com/images/search_empty.svg'
                  height={41}
                  titleLevel={5}
                  messageLevel={6}
                />
              ) : (
                renderOptions()
              )}

              {isLoading && <Loader />}
            </List>

            <Spacer space='tiny' />
          </div>
        </Overflow>

        {optionalContent}
      </Dropdown>

      <Error error={errors[formikKey]} />
    </div>
  )
}

DropdownSelect.displayName = 'DropdownSelect'

DropdownSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.instanceOf(Object),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired,
  handleOnSearchChange: PropTypes.func,
  inModalName: PropTypes.string,
  isLoading: PropTypes.bool,
  isEmptyList: PropTypes.bool,
  hasDescription: PropTypes.bool,
  overflowStyle: PropTypes.instanceOf(Object),
  emphasisedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  liveChanges: PropTypes.bool,
  optionalContent: PropTypes.node,
  dropdownLabel: PropTypes.func,
  className: PropTypes.string,
  customValue: PropTypes.bool,
  formikKey: PropTypes.string,
  alwaysShowLabel: PropTypes.bool,
  isOpenDisabled: PropTypes.bool,
  searchInOptions: PropTypes.bool,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
    emptySearchMessageTitle: PropTypes.string,
    emptySearchMessage: PropTypes.string
  })
}

DropdownSelect.defaultProps = {
  label: '',
  searchPlaceholder: '',
  inModalName: '',
  errors: {},
  touched: {},
  overflowStyle: {},
  emphasisedOptions: [],
  handleOnSearchChange: null,
  value: null,
  liveChanges: false,
  optionalContent: null,
  dropdownLabel: null,
  className: '',
  customValue: false,
  alwaysShowLabel: false,
  isOpenDisabled: false,
  searchInOptions: false,
  isLoading: false,
  isEmptyList: false,
  hasDescription: false,
  onBlur: () => null,
  onChange: () => null
}

export default DropdownSelect
