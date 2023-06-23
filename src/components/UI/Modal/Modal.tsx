import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ModalProps {
  active: boolean
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  return (
    <ModalWrapper className={props.active ? 'active' : ''}>
      <ModalContent
        className={props.active ? 'active' : ''}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div>{props.children}</div>
      </ModalContent>
    </ModalWrapper>
  )
}
const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  padding: 0 30px;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  transform: scale(0.4);
  transition: 0.4s all;
  &.active {
    transform: scale(1);
  }
`
