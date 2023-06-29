import React from 'react'
import style from './Button.module.css'

interface ButtonProps {
  onClick?: (value: any) => void
  width?: string
  height?: string
  minWidth?: string
  backgroundColor?: string
  borderRadius?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  padding?: string
  border?: string
  margin?: string
  disabled?: boolean
  children: React.ReactNode
  type?: string
}

export const Button = (props: ButtonProps) => {
  const { onClick, disabled, children, ...preProps } = props
  return (
    <button className={style.button} onClick={onClick} style={preProps} disabled={disabled}>
      {children}
    </button>
  )
}
