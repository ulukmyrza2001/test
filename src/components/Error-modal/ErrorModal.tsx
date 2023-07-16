import styles from "./ErrorModal.module.css";
import { Modal, Box } from "@mui/material";
import { Button } from "../UI/Buttons/Button/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  textAlign: "center",
};

export const ErrorModal = (props: any) => {
  return (
    <Modal
      open={props.showModal}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <span className="title">{props.title}</span>
        <div className={styles.wrapper_button}>
          <Button onClick={() => props.setShowDeleteModal(false)}>
            Отмена
          </Button>
          <Button type="cancel" onClick={() => props.deleteHandler()}>
            {props.button}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
