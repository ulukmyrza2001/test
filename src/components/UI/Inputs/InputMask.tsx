import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { styled } from 'styled-components'

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
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={label}>{label}</StyledLabel>}
      <InputNumberPhone
        country={'kg'}
        onChange={onChange}
        onlyCountries={['kg', 'kz', 'uz']}
        enableLongNumbers={false}
        countryCodeEditable={false}
        inputStyle={{ ...restProps, border: '0.5px solid silver' }}
        buttonStyle={{
          border: 'none',
          backgroundColor: 'none'
        }}
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
    </StyledContainer>
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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledLabel = styled.label`
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #87939e;
`
