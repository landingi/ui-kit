import { Badge } from '@components/Badge'
import { BoxOutline } from '@components/BoxOutline'
import { Icon } from '@components/Icon'
import Image from '@components/Image'
import { Search } from '@components/Search'
import { Spacer } from '@components/Spacer'
import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, useState } from 'react'
import { Row } from 'simple-flexbox'

import styles from './MultiSelect.module.scss'

type Value = string | number | null

interface Option {
  label: string
  value: Value
  icon: string
  selected?: boolean
}

interface MultiSelectProps {
  onChange: (formikKey: string, value: Value[]) => void
  id: string
  className?: string | string[]
  formikKey: string
  'data-testid'?: string
  initialOptions: Option[]
}

export const MultiSelect: FC<MultiSelectProps> = ({
  id,
  className,
  initialOptions,
  formikKey,
  onChange,
  'data-testid': dataTestId
}) => {
  const wrapperStyles = useStyles({}, className)
  const optionStyles = useStyles({ [styles.options]: true })
  const optionBoxStyles = useStyles({ [styles['option-box']]: true })

  const [options, setOptions] = useState<Option[]>(
    initialOptions.map(option => ({ ...option, selected: false }))
  )
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const updateOptions = (options: Option[]) => {
    setOptions(options)

    onChange(
      formikKey,
      options.filter(({ selected }) => selected).map(({ value }) => value)
    )
  }

  const toggleOption = (option: Option, value: Value) => {
    if (option.value === value) {
      return { ...option, selected: !option.selected }
    }

    return option
  }

  const toggleOptions = (value: Value) => {
    const mappedOptions = options.map(option => toggleOption(option, value))

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
  }

  const handleChange = (value: Value) => {
    toggleOptions(value)
    toggleSelectedOptions(value)
  }

  const removeValue = (value: Value) => {
    setSelectedOptions(
      selectedOptions.filter((option: Option) => option.value !== value)
    )
    setOptions(
      options.map(option => {
        if (option.value === value) {
          return { ...option, selected: false }
        }

        return option
      })
    )
  }

  return (
    <div data-testid={dataTestId} className={wrapperStyles}>
      <Search />

      <Spacer space='mini' />

      <Spacer space='tiny' />

      <label id={id}>
        <div className={optionStyles}>
          {options.map(({ label, icon, value, selected }) => (
            <BoxOutline
              padding='none'
              className={optionBoxStyles}
              key={value}
              onClickHandler={() => handleChange(value)}
              isSelected={selected}
              noCheckmark
            >
              <Image src={icon} size={17} />
              <Spreader spread='tiny' />
              {label}
            </BoxOutline>
          ))}
        </div>
      </label>

      <Spacer space='mini' />

      <Spacer space='tiny' />

      <div>
        {selectedOptions
          .filter(({ selected }) => selected)
          .map(({ label, value }) => (
            <Badge className={styles['icon-pack-badge']} type='accent-8'>
              <Row alignItems='center'>
                <span className={styles['icon-pack-badge__text']}>{label}</span>

                <Spreader spread='tiny' />

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
