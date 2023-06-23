import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

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
    <StyledLonelySelect>
      <StyledLabel>{label}</StyledLabel>
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
    </StyledLonelySelect>
  )
}

const StyledLonelySelect = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const StyledLabel = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #87939e;
`
