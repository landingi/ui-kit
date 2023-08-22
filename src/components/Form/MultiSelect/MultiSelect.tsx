import { Badge } from '@components/Badge'
import { BoxOutline } from '@components/BoxOutline'
import { Icon } from '@components/Icon'
import Image from '@components/Image'
import { Search } from '@components/Search'
import { Spacer } from '@components/Spacer'
import Spreader from '@components/Spreader'
import { debounce } from '@helpers/events'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, useState } from 'react'
import { Column, Row } from 'simple-flexbox'

import styles from './MultiSelect.module.scss'

type Value = string | number | null

interface Option {
  label: string
  value: Value
  icon?: string
  selected?: boolean
  matchesSearchPhrase?: boolean
}

export interface EmptySearchResultsComponentProps {
  addCustomOption: (option: Option) => void
  searchPhrase: string
  isButtonDisabled: boolean
}

interface MultiSelectProps {
  onChange: (formikKey: string, value: Value[]) => void
  id: string
  className?: string | string[]
  formikKey: string
  'data-testid'?: string
  initialOptions: Option[]
  values: Value[]
  searcher: { i18n: { placeholder: string } }
  emptySearchResultsComponent: FC<EmptySearchResultsComponentProps>
}

export const MultiSelect: FC<MultiSelectProps> = ({
  id,
  className,
  initialOptions,
  formikKey,
  onChange,
  values = [],
  searcher: {
    i18n: { placeholder = '' }
  },
  emptySearchResultsComponent: EmptySearchResultsComponent,
  'data-testid': dataTestId = 'multi-select'
}) => {
  const wrapperStyles = useStyles({}, className)
  const optionStyles = useStyles({ [styles.options]: true })
  const optionBoxStyles = useStyles({ [styles['option-box']]: true })
  const selectedOptionsStyles = useStyles({
    [styles['options__selected-options']]: true
  })

  /**
   * initializes options depending on values that were already selected earlier
   */
  const getInitialOptions = () =>
    initialOptions.map(option => ({
      ...option,
      selected: values.includes(option.value)
    }))

  const getCustomSelectedOptions = () => {
    const initialOptionsValues = initialOptions.map(option => option.value)

    const customValues = values.filter(
      value => !initialOptionsValues.includes(value)
    )
    const customSelectedOptions = customValues.map(customValue => ({
      value: customValue,
      // label is equal to value when user adds option by itself
      label: customValue as string,
      selected: true
    }))

    return customSelectedOptions
  }

  /**
   * creates selected options used to display badges by merging options that were selected
   * by user and options added by them
   */
  const getSelectedOptions = () => {
    const customSelectedOptions = getCustomSelectedOptions()

    return [
      ...getInitialOptions().filter(option => option.selected),
      ...customSelectedOptions
    ]
  }

  const [options, setOptions] = useState<Option[]>(getInitialOptions())
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options)
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    getSelectedOptions()
  )
  const [searchPhrase, setSearchPhrase] = useState('')

  const filterOptions = (value: string, options: Option[]) => {
    if (value.length < 3) {
      const filteredResults = options.map(option => ({
        ...option,
        matchesSearchPhrase: false
      }))

      setFilteredOptions(filteredResults)

      return
    }

    const lowerCaseSearch = value.toLowerCase()
    const searchResults = options
      .map(option => ({
        ...option,
        matchesSearchPhrase:
          option.label.toLowerCase().search(lowerCaseSearch) !== -1
      }))
      .filter(option => option.matchesSearchPhrase || option.selected)

    setFilteredOptions(searchResults)
  }

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = !event ? '' : event.target.value

      setSearchPhrase(value)
      filterOptions(value, options)
    },
    300
  )

  /**
   * updates formik values, should be called any time selectedOptions are changed
   */
  const updateFormik = (options: Option[]) =>
    onChange(
      formikKey,
      options.filter(({ selected }) => selected).map(({ value }) => value)
    )

  const addCustomOption = (option: Option) => {
    const selectedOption = { ...option, selected: true }

    updateFormik([...selectedOptions, selectedOption])
    setSelectedOptions([...selectedOptions, selectedOption])
  }

  const toggleOption = (option: Option, value: Value) => {
    if (option.value === value) {
      return { ...option, selected: !option.selected }
    }

    return option
  }

  const toggleOptions = (value: Value) => {
    const mappedOptions = options.map(option => toggleOption(option, value))

    filterOptions(searchPhrase, mappedOptions)
    setOptions(mappedOptions)
  }

  const toggleSelectedOptions = (value: Value) => {
    let tmpSelectedOptions: Option[] = [...selectedOptions]

    if (tmpSelectedOptions.find((option: Option) => option.value === value)) {
      tmpSelectedOptions = tmpSelectedOptions.filter(
        (option: Option) => option.value !== value
      )
    } else {
      const option = options.find(
        (option: Option) => option.value === value
      ) as Option

      tmpSelectedOptions.push({ ...option, selected: true })
    }

    setSelectedOptions(tmpSelectedOptions)
    updateFormik(tmpSelectedOptions)
  }

  const handleChange = (value: Value) => {
    toggleOptions(value)
    toggleSelectedOptions(value)
  }

  const removeValue = (value: Value) => {
    const tmpSelectedOptions = selectedOptions.filter(
      option => option.value !== value
    )

    setSelectedOptions(tmpSelectedOptions)
    updateFormik(tmpSelectedOptions)

    const mappedOptions = options.map(option => {
      if (option.value === value) {
        return { ...option, selected: false }
      }

      return option
    })

    setOptions(mappedOptions)
    filterOptions(searchPhrase, mappedOptions)
  }

  const shouldShowEmptySearchResultsComponent = () =>
    searchPhrase.length >= 3 &&
    !filteredOptions.some(option => option.matchesSearchPhrase)

  return (
    <div className={wrapperStyles} data-testid={dataTestId}>
      <Search i18n={{ placeholder }} onChange={handleSearch} tag='div' />

      <Spacer space='mini' />

      <Spacer space='tiny' />

      <label id={id} className={styles['multi-select-label']}>
        <div className={optionStyles}>
          {filteredOptions.map(({ label, icon, value, selected }) => (
            <BoxOutline
              padding='none'
              className={optionBoxStyles}
              key={value}
              onClickHandler={() => handleChange(value)}
              isSelected={selected}
              noCheckmark
            >
              {icon && (
                <Fragment>
                  <Image src={icon} size='17px' /> <Spreader spread='tiny' />
                </Fragment>
              )}

              {label}
            </BoxOutline>
          ))}
        </div>

        {shouldShowEmptySearchResultsComponent() && (
          <EmptySearchResultsComponent
            addCustomOption={addCustomOption}
            searchPhrase={searchPhrase}
            isButtonDisabled={
              getCustomSelectedOptions().filter(
                (option: Option) => option.value === searchPhrase
              ).length > 0
            }
          />
        )}
      </label>

      <Spacer space='mini' />

      <Spacer space='tiny' />

      <div className={selectedOptionsStyles}>
        {selectedOptions
          .filter(({ selected }) => selected)
          .map(({ label, value }) => (
            <Badge
              className={styles['icon-pack-badge']}
              type='accent-8'
              key={value}
            >
              <Row alignItems='center'>
                <span className={styles['icon-pack-badge__text']}>{label}</span>

                <span
                  className={styles['icon-pack-badge__close']}
                  onClick={() => removeValue(value)}
                >
                  <Icon icon='icon-remove' color='white' />
                </span>
              </Row>
            </Badge>
          ))}
      </div>
    </div>
  )
}
