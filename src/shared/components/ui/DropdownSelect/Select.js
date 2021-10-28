import React, {
  useCallback,
  Fragment,
  useRef,
  useEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form/Error'
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
import Search from '@components/ui/Search'
import Paragraph from '@components/ui/Paragraph'
import Label from '@components/ui/Label'
import scss from './DropdownSelect.scss'

const cssClass = styles(scss)

/**
 * Select - stateless presentational component
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
 * @param {func} props.formikKey - name on formik 'nested' keys
 * @param {string} props.translate - translate key when items in dropdown use react-intl
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {bool} props.isOpenDisabled - when its true dropdown can't be open, default: false
 * @param {string} props.alwaysShowLabel - always show label on top
 * @param {string} props.searchInOptions - alow user to search item in options list
 * @return {object} An object of children element
 */
const Select = ({
  value,
  onChange,
  errors,
  touched,
  label,
  options,
  handleOnSearchChange,
  searchPlaceholder,
  inModalName,
  inModal,
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
  searchInOptions
}) => {
  const errorClass = errors[formikKey] ? 'form--has-error' : ''
  // eslint-disable-next-line prettier/prettier
  const valueClass = value || alwaysShowLabel ? 'form--has-value' : ''
  const filledClass = touched[formikKey] ? 'form-field--touched' : ''
  const disabledClass = isOpenDisabled ? 'form-field--disabled' : ''

  const getSelectedItem = () => {
    const currentItem = options.find(
      ({ value: itemValue }) => itemValue === value
    )

    if (currentItem) {
      return currentItem
    } else if (customValue && !currentItem) {
      return { value, label: value }
    } else {
      return null
    }
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
  /**
   * autosize width for dropdown
   */
  const [dropdownWidth, setDropdownWidth] = useState(null)

  useEffect(() => {
    const labelWidth = dropdownRef.current?.containerRef.current.clientWidth
    if (labelWidth) setDropdownWidth(labelWidth)
  }, [dropdownRef.current])

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
    <div
      className={cssClass([
        `form-field form-field--dropdown ${
          errorClass || valueClass || filledClass
        }`,
        disabledClass,
        className
      ])}
    >
      {label && <Label id={label}>{label}</Label>}

      <Dropdown
        label={
          dropdownLabel ? dropdownLabel(selectedItem) : selectedItem?.label
        }
        hasInput
        hasFullInputStyle
        asPlaceholder={!selectedItem?.label}
        size='fixed'
        alignment={valueClass ? 'spaced' : 'end'}
        inModalName={inModalName}
        inModal={inModal}
        ref={dropdownRef}
        isOpenDisabled={isOpenDisabled}
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
        {searchInOptions && (
          <Fragment>
            <div className={cssClass('search-container')}>
              <Search
                onChange={handleSearchOptionsChange}
                placeholder='word.search'
                tag='div'
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
                  title='message.empty.search.results'
                  message='message.empty.search.results.small'
                  image='https://images.assets-landingi.com/images/search_empty.svg'
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

Select.displayName = 'Select dropdown'

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.instanceOf(Object),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired,
  handleOnSearchChange: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  inModalName: PropTypes.string,
  inModal: PropTypes.bool,
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
  searchInOptions: PropTypes.bool
}

Select.defaultProps = {
  label: '',
  searchPlaceholder: '',
  inModalName: '',
  inModal: false,
  className: '',
  errors: {},
  touched: {},
  overflowStyle: {},
  emphasisedOptions: [],
  handleOnSearchChange: null,
  value: null,
  liveChanges: false,
  optionalContent: null,
  dropdownLabel: null,
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

export default Select
