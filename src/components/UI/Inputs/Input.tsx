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
  color: var(--ui-disabled-color);
`

const InputStyled = styled.input<IinputProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ padding }) => padding || '10px'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  letter-spacing: 0.6px;
  color: ${({ color }) => color || 'var(--ui-disabled--background)'};
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  background-color: ${({ background }) => background || 'var(--ui-color)'};
  border: ${({ border }) => border || '1px solid var(--ui-color)'};

  &::placeholder {
    color: var(--ui-disabled-color);
  }

  &:active {
    border: 1px solid var(--ui-background-color);
  }

  &:focus {
    box-shadow: 0px 0px 1px 1px var(--ui-background-color);
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
