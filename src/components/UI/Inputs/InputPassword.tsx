import React, { ChangeEvent, useState } from 'react'
import { styled } from 'styled-components'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

interface InputPasswordProps {
  label?: string
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
  fontSize?: string
  onKeyDown?: (value: any) => void
}

export function InputPassword(props: InputPasswordProps) {
  const [show, setShow] = useState(false)
  return (
    <StyledContainer>
      {props.label && <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>}
      <StyledContainerInp>
        <StyleInp type={show ? 'text' : 'password'} {...props} />

        <StyledIcon onClick={() => setShow(!show)}>
          {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </StyledIcon>
      </StyledContainerInp>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const StyledContainerInp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`

const StyledLabel = styled.label`
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #87939e;
`

const StyledIcon = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 0;
  cursor: pointer;
  :nth-child(1) {
    color: gray;
    font-size: 20px;
  }
  :nth-child(2) {
    color: #d0d2d3;
    font-size: 20px;
  }
`
const StyleInp = styled.input`
  width: ${({ width }: any) => width || '100%'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }: any) => maxWidth};
  min-width: ${({ minWidth }: any) => minWidth};
  padding: ${({ padding }: any) => padding || '10px'};
  border-radius: ${({ borderRadius }: any) => borderRadius || '5px'};
  letter-spacing: 0.6px;
  color: ${({ color }) => color || 'gray'};
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  background-color: ${({ background }: any) => background || '#ffffff'};
  border: ${({ border }: any) => border || '1px solid #ced4da'};
  padding-right: 50px;

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
