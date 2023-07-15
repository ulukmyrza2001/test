import React, { ChangeEvent, useState, forwardRef, Ref } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./InputPassword.module.css";

interface InputPasswordProps {
  label?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  htmlFor?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  color?: string;
  fontSize?: string;
  className?: string;
  containerMinWidth?: string;
  onKeyDown?: (value: any) => void;
}

export const InputPassword = forwardRef(
  (props: InputPasswordProps, ref: Ref<HTMLInputElement>) => {
    const {
      label,
      type,
      onChange,
      htmlFor,
      value,
      placeholder,
      disabled,
      className,
      containerMinWidth,
      onKeyDown,
      ...preProps
    } = props;
    const [show, setShow] = useState(false);

    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={htmlFor}>
            {label}
          </label>
        )}
        <div
          style={{ minWidth: containerMinWidth }}
          className={styles.inpcontainer}
        >
          <input
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            placeholder={placeholder}
            className={className ? className : styles.input}
            type={show ? "text" : "password"}
            {...preProps}
          />
          <span className={styles.icon} onClick={() => setShow(!show)}>
            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>
      </div>
    );
  }
);
