import React from 'react'
import Select from 'react-select'
import style from './LonelySelect.module.css'

interface LonelySelectProps {
  options: { label: string; value: string | number }[] | []
  label: string
  placeholder: string
  noOptionsMessage: (obj: { inputValue: string }) => React.ReactNode
  value: { label: string; value: string | number } | null
  onChange: (e: any) => void
  isClearable: boolean
  isLoading: boolean
  isDisabled: boolean
}

export const LonelySelect = ({
  options = [],
  label = '',
  placeholder = '',
  noOptionsMessage = () => null,
  value = null,
  onChange = () => {},
  isClearable = false,
  isLoading = false,
  isDisabled = false
}: LonelySelectProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.label}>{label}</div>
      <Select
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
