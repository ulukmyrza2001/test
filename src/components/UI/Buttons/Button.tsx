import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  onClick: (value: any) => void
  width?: string
  height?: string
  minwidth?: string
  backgroundcolor?: string
  borderRadius?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  padding?: string
  border?: string
  margin?: string
  backgroundcoloractive?: string
  disabled?: boolean
  disabledColor?: string
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width || '400px'};
  height: ${({ height }) => height || '40px'};
  min-width: ${({ minwidth }) => minwidth || '100px'};
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'var(--ui-background-color)'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  color: ${({ color }) => color || 'var(--ui-color)'};
  font-size: ${({ fontSize }) => fontSize || ''};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  padding: ${({ padding }) => padding || '12px 18px'};
  border: ${({ border }) => border || ''};
  margin: ${({ margin }) => margin || ''};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-family: 'PT Sans', sans-serif;
  outline: none;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: var(--ui-hover-background);
  }

  &:active {
    color: var(--ui-color);
    background-color: ${({ backgroundcoloractive }) =>
      backgroundcoloractive || 'var(--ui-active-background)'};
  }

  &:disabled {
    cursor: not-allowed;
    color: 'var(--ui-disabled-color)';
    border: 'var(--ui-disabled-color)';
    background-color: ${({ disabledColor }) => disabledColor || 'var(--ui-disabled--background)'};
  }
`
