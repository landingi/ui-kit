import { Button } from '@components/Button'
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
import { Tooltip } from '@components/Tooltip'
import { emitCloseDropdown } from '@events/dropdown'
import { generateFakeUuid, isEmpty } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import styles from './PerfectDropdownSelect.module.scss'

type Value = string | number | null

type ItemBase = {
  value: Value
  label: string | ReactNode
  description?: string
  disabled?: boolean
  tooltip?: string
}

export interface PerfectDropdownSelectProps<Item extends ItemBase> {
  className?: string
  value?: Value
  onChange?: (key: Value, value?: Value) => void
  errors?: Record<string, string>
  touched?: Record<string, boolean>
  label?: string
  options: Item[]
  emphasisedOptions?: Item[]
  hasDescription?: boolean
  hasSearcher?: boolean
  handleOnSearchChange?: (value?: string) => void
  isLoading?: boolean
  emptyMessage?: ReactNode
  isOpenDisabled?: boolean
  optionalContent?: ReactNode
  alwaysShowLabel?: boolean
  overflowStyle?: object
  formikKey?: string
  i18n?: {
    placeholder?: string
    loadmore?: string
  }
  hasLoadMoreButton?: boolean
  loadMoreEvent?: () => void
  liveChanges?: boolean
  dropdownLabel?: (item: Item) => ReactNode
  customValue?: boolean
  size?:
    | 'mini'
    | 'small'
    | 'medium'
    | 'big'
    | 'large'
    | 'huge'
    | 'extra-huge'
    | 'auto'
    | 'fixed'
  dropdownPlacement?:
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-center'
    | 'top-start'
    | 'top-center'
    | 'top-end'
  'data-testid'?: string
}

export const PerfectDropdownSelect = <Item extends ItemBase>({
  className,
  value = null,
  onChange = () => {},
  errors = {},
  touched = {},
  label,
  options,
  emphasisedOptions = [],
  hasDescription = false,
  hasSearcher = false,
  handleOnSearchChange = () => null,
  isLoading = false,
  emptyMessage = null,
  isOpenDisabled = false,
  optionalContent = null,
  alwaysShowLabel = false,
  overflowStyle = {},
  formikKey = '',
  i18n = {
    placeholder: '',
    loadmore: ''
  },
  hasLoadMoreButton = false,
  loadMoreEvent = () => {},
  liveChanges = false,
  dropdownLabel,
  customValue = false,
  size = 'fixed',
  dropdownPlacement,
  'data-testid': dataTestId,
  ...rest
}: PerfectDropdownSelectProps<Item>) => {
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

  const [searchValue, setSearchValue] = useState<string | null | undefined>(
    null
  )

  const clearSearchValue = useCallback(() => setSearchValue(''), [])

  /**
   * checks if user want to use formik or not
   */
  const handleChange = (value: Value) => {
    if (formikKey) {
      onChange(formikKey, value)
    } else {
      onChange(value)
    }

    clearSearchValue()

    emitCloseDropdown()
  }

  const dropdownRef = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)

  /**
   * autosize width for dropdown
   */
  const [dropdownWidth, setDropdownWidth] = useState<number | null>(null)

  useEffect(() => {
    const labelWidth = containerRef.current?.clientWidth

    if (labelWidth) setDropdownWidth(labelWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current])

  const renderOption = (item: Item) => (
    <Tooltip
      content={item.tooltip}
      align='center'
      placement='top'
      disabled={!item.tooltip}
    >
      <Button
        variant='dropdown-element'
        onClick={() => handleChange(item.value)}
        isDisabled={item.disabled}
      >
        {hasDescription ? (
          <Fragment>
            <Heading level={5}>{item?.label}</Heading>

            <Paragraph color='accent-2' size={12}>
              {item?.description}
            </Paragraph>

            <Divider />
          </Fragment>
        ) : (
          item?.label
        )}
      </Button>
    </Tooltip>
  )

  const handleSearchOptionsChange = (value: string | undefined) => {
    if (handleOnSearchChange() === null) {
      setSearchValue(value)
    } else {
      handleOnSearchChange(value)
    }
  }

  const filterOptions = () =>
    options.filter(({ label }) => {
      if (!searchValue || typeof label !== 'string') {
        return true
      }

      const items = label
        .toLowerCase()
        .match(new RegExp(searchValue.toLowerCase()))

      return items
    })

  const renderOptions = () => (
    <Fragment>
      {emphasisedOptions.map(item => (
        <ListItem variant='dropdown' key={generateFakeUuid()}>
          {renderOption(item)}
        </ListItem>
      ))}

      {!isEmpty(emphasisedOptions) && <Divider />}

      {filterOptions().map(item => (
        <ListItem variant='dropdown' key={generateFakeUuid()}>
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
        <Label id={label} className={labelStyles} padding='top'>
          {label}
        </Label>
      )}

      <PerfectDropdown
        label={
          dropdownLabel
            ? dropdownLabel(selectedItem as Item)
            : selectedItem?.label
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
        {...rest}
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
              minWidth: dropdownWidth as number,
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
