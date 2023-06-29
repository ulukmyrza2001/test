import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { styled } from 'styled-components'
import style from './InputMask.module.css'
import 'react-phone-input-2/lib/style.css'

interface IinputNumberMask {
  label?: string
  onChange: (value: string) => void | any
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
}

export function InputNumberMask(props: IinputNumberMask) {
  const { onChange, value, onKeyDown, disabled, label, ...restProps } = props

  const inputStyle = {
    ...restProps,
    border: '0.5px solid silver',
    width: '300px',
    height: '50px',
    backgroundColor: 'transparent' // Remove background color
  }

  const buttonStyle = {
    background: 'transparent !important',
    border: 'none',

    '&.selected-flag, &.open': {
      background: 'red !important'
    },
    '&:hover, &:active': {
      background: 'red !important'
    }
  }

  return (
    <div className={style.wrapper}>
      {label && (
        <label className={style.label} htmlFor={label}>
          {label}
        </label>
      )}
      <PhoneInput
        country={'kg'}
        onChange={onChange}
        onlyCountries={['kg', 'kz', 'uz']}
        enableLongNumbers={false}
        countryCodeEditable={false}
        inputStyle={style}
        buttonClass={style['country-selector-button']}
        dropdownStyle={{
          boxShadow: 'none',
          width: '16em',
          color: 'gray',
          border: 'none',
          borderRadius: '6px'
        }}
        value={value}
        masks={{ kg: '(...)...-...', kz: '(...)...-..-..', uz: '-..-...-....' }}
      />
    </div>
  )
}

const InputNumberPhone = styled(PhoneInput)`
  border: none;
  & .flag-dropdown {
    background: none;
  }
  & .flag-dropdown:hover {
    background: none;
  }
  & .flag-dropdown.open {
    & .selected-flag {
      background: none;
    }
  }

  & .selected-flag.open {
    background: none;
  }
  & .selected-flag:hover {
    background: none;
  }

  & .flag-dropdown.open {
    background: none;
  }
  & .flag {
    border-radius: 2px;
  }
`
