import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface IinputProps {
  label?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  color?: string;
  onKeyDown?: (value: any) => void;
}

export const Input = (props: IinputProps) => {
  const {
    label,
    type,
    onChange,
    value,
    placeholder,
    disabled,
    onKeyDown,
    ...perProps
  } = props;
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        name={props.label}
        style={perProps}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
