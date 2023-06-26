import React, { ReactNode } from 'react'
import styled from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton } from '@mui/material'

interface ModalProps {
  active: boolean
  handleClose: any
  children: ReactNode
  title?: string
}

export const Modal = ({ active, handleClose, children, title }: ModalProps) => {
  return (
    <ModalWrapper className={active ? 'active' : ''}>
      <ModalContent className={active ? 'active' : ''} onClick={(e: any) => e.stopPropagation()}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <h2 className="title">{title ? title : 'Название'}</h2>
            <h2 className="icon">
              <IconButton onClick={() => handleClose()}>
                <CancelIcon />
              </IconButton>
            </h2>
          </div>
          <div>{children}</div>
        </div>
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
