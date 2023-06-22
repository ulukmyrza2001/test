'use client'
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
  background-color: ${({ backgroundcolor }) => backgroundcolor || '#1e00ff'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  color: ${({ color }) => color || '#ffffff'};
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
    opacity: 75%;
  }

  &:active {
    color: white;
    background-color: ${({ backgroundcoloractive }) => backgroundcoloractive || '#000750'};
  }

  &:disabled {
    cursor: not-allowed;
    color: #7e7e7e;
    border: #7e7e7e;
    background-color: ${({ disabledColor }) => disabledColor || '#1c1b1f1f'};
  }
`
