import React from 'react'
import styles from './MultiSelect.module.css'
import Select from 'react-select'

interface MultiSelectProps {
  options: { label: string; value: string | number }[] | []
  label: string
  placeholder: string
  noOptionsMessage: (obj: { inputValue: string }) => React.ReactNode
  value: { label: string; value: string | number }[] | []
  onChange: (e: any) => void
  isClearable: boolean
  isLoading: boolean
  isDisabled: boolean
}

export const MultiSelect = ({
  options = [],
  label = '',
  placeholder = '',
  noOptionsMessage = () => null,
  value = [],
  onChange = () => {},
  isClearable = false,
  isLoading = false,
  isDisabled = false
}: MultiSelectProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <Select
        isMulti
        options={options}
        placeholder={placeholder}
        noOptionsMessage={noOptionsMessage}
        value={value}
        onChange={onChange}
        isClearable={isClearable}
        isLoading={isLoading}
        isDisabled={isLoading || isDisabled}
        isSearchable={true}
      />
    </div>
  )
}
