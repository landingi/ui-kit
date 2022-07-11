import React, {
  useCallback,
  Fragment,
  useRef,
  useState,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import Error from '@components/Form/Error'
import List from '@components/List'
import ListItem from '@components/List/Item'
import PerfectDropdown from '@components/PerfectDropdown'
import Heading from '@components/Heading'
import Button from '@components/Button'
import Overflow from '@components/Overflow'
import Divider from '@components/Divider'
import Loader from '@components/Loader'
import { emitCloseDropdown } from '@events/dropdown'
import { isEmpty } from '@helpers/data'
import Spacer from '@components/Spacer'
import Searcher from '@components/Searcher'
import Paragraph from '@components/Paragraph'
import Label from '@components/Label'
import styles from './DropdownSelect.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * DropdownSelect - stateless presentational component
 * @param {object} props - props
 * @param {func} props.className - wrapper custom styles
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label
 * @param {array} props.options - list of options
 * @param {array} props.emphasisedOptions - list of emphasised options, displayed on top
 * @param {array} props.hasDescription - render description in options
 * @param {string} props.hasSearcher - show Searcher
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {bool} props.isLoading - list loading spinner
 * @param {object} props.emptyMessage - empty message component
 * @param {bool} props.isOpenDisabled - when its true dropdown can't be open, default: false
 * @param {bool} props.optionalContent - optional content to render on bottom
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {object} props.overflowStyle - overflow styles
 * @param {func} props.formikKey - name on formik 'nasted' keys
 * @param {string} props.i18n - object of translations
 * @return {object} An object of children element
 */
const PerfectDropdownSelect = ({
  className,
  value,
  onChange,
  errors,
  touched,
  label,
  options,
  emphasisedOptions,
  hasDescription,
  hasSearcher,
  handleOnSearchChange,
  isLoading,
  emptyMessage,
  isOpenDisabled,
  optionalContent,
  alwaysShowLabel,
  overflowStyle,
  formikKey,
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
    const allOptions = [...options, ...emphasisedOptions]

    const currentItem = allOptions.find(
      ({ value: itemValue }) => itemValue === value
    )

    if (currentItem) {
      return currentItem
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

    clearSearchValue()
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

  const handleSearchOptionsChange = value => {
    setSearchValue(value)
    handleOnSearchChange(value)
  }

  /**
   * Clear value in search / searcher
   */
  const clearSearchValue = useCallback(() => setSearchValue(''), [])

  const filterOptions = () =>
    options.filter(({ label }) => {
      if (!searchValue) {
        return true
      }
      const items = label
        .toLowerCase()
        .match(new RegExp(searchValue.toLowerCase()))

      return items
    })

  const renderOptions = () => {
    return (
      <Fragment>
        {emphasisedOptions.map((item, index) => (
          <ListItem className='list-item--dropdown' key={index}>
            {renderOption(item)}
          </ListItem>
        ))}

        {!isEmpty(emphasisedOptions) && <Divider />}

        {filterOptions().map((item, index) => (
          <ListItem className='list-item--dropdown' key={index}>
            {renderOption(item)}
          </ListItem>
        ))}
      </Fragment>
    )
  }

  const renderEmptyMessage = () =>
    !filterOptions().length && !isLoading ? emptyMessage : null

  return (
    <div className={className} ref={containerRef} data-testid='dropdown-select'>
      {label && (
        <Label id={label} className={labelStyles}>
          {label}
        </Label>
      )}

      <PerfectDropdown
        label={selectedItem?.label}
        hasInput
        hasFullInputStyle
        asPlaceholder={!selectedItem?.label}
        size='fixed'
        alignment={hasLabel ? 'spaced' : 'end'}
        ref={dropdownRef}
        isOpenDisabled={isOpenDisabled}
        handleOnClose={clearSearchValue}
        className={dropdownStyles}
      >
        {hasSearcher && (
          <Fragment>
            <div className={styles['search-container']}>
              <Searcher
                setSearchPhrase={handleSearchOptionsChange}
                i18n={{ placeholder: i18n.placeholder }}
                tag='div'
                autoFocus
                protectedSubmit
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
              {renderOptions()}
              {isLoading && <Loader />}
              {renderEmptyMessage()}
            </List>

            <Spacer space='tiny' />
          </div>
        </Overflow>

        {optionalContent}
      </PerfectDropdown>

      <Error error={errors[formikKey]} />
    </div>
  )
}

PerfectDropdownSelect.displayName = 'PerfectDropdownSelect'

PerfectDropdownSelect.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
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
  emphasisedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  hasDescription: PropTypes.bool,
  hasSearcher: PropTypes.bool,
  handleOnSearchChange: PropTypes.func,
  isLoading: PropTypes.bool,
  emptyMessage: PropTypes.node,
  isOpenDisabled: PropTypes.bool,
  optionalContent: PropTypes.node,
  alwaysShowLabel: PropTypes.bool,
  overflowStyle: PropTypes.instanceOf(Object),
  formikKey: PropTypes.string,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string
  })
}

PerfectDropdownSelect.defaultProps = {
  className: '',
  value: null,
  onChange: () => null,
  errors: {},
  touched: {},
  label: '',
  emphasisedOptions: [],
  hasDescription: false,
  hasSearcher: false,
  handleOnSearchChange: () => null,
  isLoading: false,
  emptyMessage: null,
  isOpenDisabled: false,
  optionalContent: null,
  alwaysShowLabel: false,
  overflowStyle: {},
  formikKey: '',
  searchPlaceholder: '',
  i18n: {
    placeholder: ''
  }
}

export default PerfectDropdownSelect
