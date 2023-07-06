import { useState } from "react";
import { InputNumberMask } from "../../../components/UI/Inputs/InputMask/InputMask";
import styles from "./Announcement.module.css";

export const AffiliatePage = () => {
  const [value, setValue] = useState("+");
  console.log(value);
  return (
    <div>
      <InputNumberMask value={value} onChange={(e) => setValue(e)} />
    </div>
  );
};
