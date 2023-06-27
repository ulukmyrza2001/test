import React, { ReactNode } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styles from './Modal.module.css'

interface ModalProps {
  active: boolean
  handleClose: any
  children: ReactNode
  title?: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
  p: 2
}

export const ModalComponent = ({ active, handleClose, children, title }: ModalProps) => {
  return (
    <Modal
      open={active}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles.inner_Modal} onClick={(e: any) => e.stopPropagation()}>
          <div className={styles.flex_inner_modal}>
            <div className={styles.row_inner_modal}>
              <h3 className={styles.title}>{title ? title : ''}</h3>
              <CancelIcon onClick={() => handleClose()} className={styles.cancel_icons} />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
