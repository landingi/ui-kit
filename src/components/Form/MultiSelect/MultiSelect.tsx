import { Badge } from '@components/Badge'
import { BoxOutline } from '@components/BoxOutline'
import { Icon } from '@components/Icon'
import Image from '@components/Image'
import { Search } from '@components/Search'
import { Spacer } from '@components/Spacer'
import Spreader from '@components/Spreader'
import { isEmpty } from '@helpers/data'
import { debounce } from '@helpers/events'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, useState } from 'react'
import { Row } from 'simple-flexbox'

import styles from './MultiSelect.module.scss'

type Value = string | number | null

interface Option {
  label: string
  value: Value
  icon?: string
  selected?: boolean
}

interface EmptySearchResultsComponentProps {
  addCustomOption: (option: Option) => void
  searchPhrase: string
}

interface MultiSelectProps {
  onChange: (formikKey: string, value: Value[]) => void
  id: string
  className?: string | string[]
  formikKey: string
  'data-testid'?: string
  initialOptions: Option[]
  values: Value[]
  placeholder: string
  emptySearchResultsComponent: FC<EmptySearchResultsComponentProps>
}

export const MultiSelect: FC<MultiSelectProps> = ({
  id,
  className,
  initialOptions,
  formikKey,
  onChange,
  values = [],
  placeholder,
  emptySearchResultsComponent: EmptySearchResultsComponent,
  'data-testid': dataTestId = 'multi-select'
}) => {
  const wrapperStyles = useStyles({}, className)
  const optionStyles = useStyles({ [styles.options]: true })
  const optionBoxStyles = useStyles({ [styles['option-box']]: true })
  const selectedOptionsStyles = useStyles({
    [styles['options__selected-options']]: true
  })

  const initializeOptions = () =>
    initialOptions.map(option => ({
      ...option,
      selected: values.includes(option.value)
    }))

  const initializeSelectedOptions = () => {
    const initialOptionsValues = initialOptions.map(option => option.value)
    const customValues = values.filter(
      value => !initialOptionsValues.includes(value)
    )
    const customSelectedOptions = customValues.map(customValue => ({
      value: customValue,
      label: customValue as string,
      selected: true
    }))

    return [
      ...initializeOptions().filter(option => option.selected),
      ...customSelectedOptions
    ]
  }

  const [options, setOptions] = useState<Option[]>(initializeOptions())
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options)
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    initializeSelectedOptions()
  )
  const [searchPhrase, setSearchPhrase] = useState('')

  const filterOptions = (value: string, options: Option[]) => {
    if (value.length < 3) {
      setFilteredOptions(options)

      return
    }

    const lowerCaseSearch = value.toLowerCase()
    const filteredResults = options.filter(
      item =>
        item.label.toLowerCase().search(lowerCaseSearch) !== -1 || item.selected
    )

    setFilteredOptions(filteredResults)
  }

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = !event ? '' : event.target.value

      setSearchPhrase(value)
      filterOptions(value, options)
    },
    300
  )

  const updateFormik = (options: Option[]) =>
    onChange(
      formikKey,
      options.filter(({ selected }) => selected).map(({ value }) => value)
    )

  const updateOptions = (options: Option[]) => {
    setOptions(options)
  }

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
    updateOptions(mappedOptions)
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

    updateOptions(mappedOptions)
    filterOptions(searchPhrase, mappedOptions)
  }

  return (
    <div className={wrapperStyles} data-testid={dataTestId}>
      <Search i18n={{ placeholder }} onChange={handleSearch} tag='div' />

      <Spacer space='mini' />

      <Spacer space='tiny' />

      <label id={id}>
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
                  <Image src={icon} size={17} /> <Spreader spread='tiny' />
                </Fragment>
              )}

              {label}
            </BoxOutline>
          ))}
        </div>
        {isEmpty(filteredOptions) && (
          <EmptySearchResultsComponent
            addCustomOption={addCustomOption}
            searchPhrase={searchPhrase}
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
