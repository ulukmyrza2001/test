import React, { ReactNode } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.css";

interface ModalProps {
  active: boolean;
  handleClose: any;
  children: ReactNode;
  title?: string;
}

export const ModalComponent = ({
  active,
  handleClose,
  children,
  title,
}: ModalProps) => {
  return (
    <Modal
      open={active}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          boxShadow: 24,
          borderRadius: "8px",
          bgcolor: "background.paper",
          p: 2,
        }}
      >
        <div
          className={styles.inner_Modal}
          onClick={(e: any) => e.stopPropagation()}
        >
          <div className={styles.flex_inner_modal}>
            <div className={styles.row_inner_modal}>
              <h1 className={styles.titlestile}>{title ? title : ""}</h1>
              <CancelIcon
                onClick={() => handleClose()}
                className={styles.cancel_icons}
              />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
