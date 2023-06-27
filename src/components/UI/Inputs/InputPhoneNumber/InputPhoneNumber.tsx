import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { styled } from 'styled-components'
import style from './InputPhoneNumber.module.css'

interface IinputPhoneNumber {
  label?: string
  type?: string
  onChange: (
    value: string,
    data: {},
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void
  value: string | undefined
  disabled?: boolean
  width?: string
  height?: string
  maxWidth?: string
  minWidth?: string
  padding?: string
  borderRadius?: string
  background?: string
  border?: string
  color?: string
  onKeyDown?: (value: any) => void
  country?: string
  countries: string[]
}

export function InputPhoneNumber(props: IinputPhoneNumber) {
  const { label, type, onChange, value, disabled, onKeyDown, countries, country, ...preProps } =
    props
  return (
    <div className={style.wrapper}>
      {label && (
        <label className={style.label} htmlFor={label}>
          {label}
        </label>
      )}
      <PhoneInput
        country={country}
        onChange={onChange}
        onlyCountries={countries}
        enableLongNumbers={false}
        countryCodeEditable={false}
        inputStyle={{ ...preProps }}
        dropdownStyle={{
          boxShadow: 'none',
          width: '16em'
        }}
        value={value}
      />
    </div>
  )
}
