import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { styled } from 'styled-components'

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
  return (
    <StyledContainer>
      {props.label && <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>}
      <InputNumberPhone
        country={props.country}
        onChange={props.onChange}
        onlyCountries={props.countries}
        enableLongNumbers={false}
        countryCodeEditable={false}
        inputStyle={{ ...props }}
        dropdownStyle={{
          boxShadow: 'none',
          width: '16em'
        }}
        value={props.value}
      />
    </StyledContainer>
  )
}

const InputNumberPhone = styled(PhoneInput)`
  & .form-control:active {
    border: 1px solid #533fe3;
  }

  & .form-control:focus {
    box-shadow: 0px 0px 1px 1px #533fe3;
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
