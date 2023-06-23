import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface IinputProps {
  label: string
  type?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number | readonly string[] | undefined
  placeholder?: string
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

export const Input = (props: IinputProps) => {
  return (
    <StyledContainer>
      {props.label && <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>}
      <InputStyled name={props.label} {...props} />
    </StyledContainer>
  )
}

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

const InputStyled = styled.input<IinputProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ padding }) => padding || '10px'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  letter-spacing: 0.6px;
  color: ${({ color }) => color || 'gray'};
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  background-color: ${({ background }) => background || '#ffffff'};
  border: ${({ border }) => border || '1px solid #ced4da'};

  &::placeholder {
    color: #d0d2d3;
  }

  &:active {
    border: 1px solid #533fe3;
  }

  &:focus {
    box-shadow: 0px 0px 1px 1px #533fe3;
  }

  &:disabled,
  &:disabled:hover {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
