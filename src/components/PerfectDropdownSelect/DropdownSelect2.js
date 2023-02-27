import Button from '@components/Button'
import Divider from '@components/Divider'
import Error from '@components/Form/Error'
import { Heading } from '@components/Heading'
import { Icon } from '@components/Icon'
import { Label } from '@components/Label'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { Loader } from '@components/Loader'
import { Overflow } from '@components/Overflow'
import { Paragraph } from '@components/Paragraph'
import { PerfectDropdown } from '@components/PerfectDropdown'
import { Searcher } from '@components/Searcher'
import { Spacer } from '@components/Spacer'
import { emitCloseDropdown } from '@events/dropdown'
import { isEmpty } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import styles from './DropdownSelect.module.scss'

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
 * @param {object} props.i18n - object of translations
 * @param {bool} props.hasLoadMoreButton - conditional render load more button
 * @param {func} props.loadMoreEvent - handleClickCloadMore
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
  i18n,
  hasLoadMoreButton,
  loadMoreEvent,
  liveChanges,
  dropdownLabel,
  customValue,
  size = 'fixed',
  dropdownPlacement,
  'data-testid': dataTestId
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
    }
    if (customValue && !currentItem) {
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

  const handleSearchOptionsChange = value =>
    handleOnSearchChange() === null
      ? setSearchValue(value)
      : handleOnSearchChange(value)

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

  const renderOptions = () => (
    <Fragment>
      {emphasisedOptions.map((item, index) => (
        <ListItem variant='dropdown' key={index}>
          {renderOption(item)}
        </ListItem>
      ))}

      {!isEmpty(emphasisedOptions) && <Divider />}

      {filterOptions().map((item, index) => (
        <ListItem variant='dropdown' key={index}>
          {renderOption(item)}
        </ListItem>
      ))}
    </Fragment>
  )

  const renderEmptyMessage = () =>
    !filterOptions().length && !isLoading ? emptyMessage : null

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
    <div className={className} ref={containerRef} data-testid='dropdown-select'>
      {label && (
        <Label id={label} className={labelStyles}>
          {label}
        </Label>
      )}

      <PerfectDropdown
        label={
          dropdownLabel ? dropdownLabel(selectedItem) : selectedItem?.label
        }
        hasInput
        hasFullInputStyle
        asPlaceholder={!selectedItem?.label}
        size={size}
        alignment={hasLabel ? 'spaced' : 'end'}
        ref={dropdownRef}
        isOpenDisabled={isOpenDisabled}
        handleOnClose={clearSearchValue}
        className={dropdownStyles}
        dropdownPlacement={dropdownPlacement}
        data-testid={dataTestId}
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
                liveChanges={liveChanges}
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
              {!isLoading && hasLoadMoreButton && renderLoadMoreButton()}
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
    placeholder: PropTypes.string,
    loadmore: PropTypes.string
  }),
  hasLoadMoreButton: PropTypes.bool,
  loadMoreEvent: PropTypes.func,
  liveChanges: PropTypes.bool,
  dropdownLabel: PropTypes.func,
  customValue: PropTypes.bool,
  'data-testid': PropTypes.string,
  size: PropTypes.oneOf([
    'mini',
    'small',
    'medium',
    'big',
    'large',
    'huge',
    'extra-huge',
    'auto',
    'fixed'
  ]),
  dropdownPlacement: PropTypes.oneOf([
    'bottom-start',
    'bottom-end',
    'bottom-center',
    'top-start',
    'top-center',
    'top-end'
  ])
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
  dropdownLabel: null,
  customValue: false,
  i18n: {
    placeholder: '',
    loadmore: ''
  },
  hasLoadMoreButton: null,
  loadMoreEvent: null,
  liveChanges: false,
  size: 'fixed',
  dropdownPlacement: 'bottom-end',
  'data-testid': 'trigger-dropdown'
}

export default PerfectDropdownSelect
