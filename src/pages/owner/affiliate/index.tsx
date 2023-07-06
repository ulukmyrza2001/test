import { useState } from "react";
import { InputNumberMask } from "../../../components/UI/Inputs/InputMask/InputMask";
import styles from "./Announcement.module.css";
import { ModalComponent } from "../../../components/UI/Modal/Modal";

export const AffiliatePage = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div>
      <InputNumberMask value={value} onChange={(e) => setValue(e)} />
      <ModalComponent
        active={true}
        handleClose={() => console.log("l;")}
        title="Редактировать котокбаш"
      >
        <div style={{ width: "100px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem
            incidunt error maiores voluptatibus voluptatem, veritatis accusamus
            deserunt aperiam reiciendis?
          </p>
        </div>
      </ModalComponent>
    </div>
  );
};
