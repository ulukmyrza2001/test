import React, { ChangeEvent, forwardRef, Ref } from "react";
import styles from "./Input.module.css";

interface IinputProps {
  label?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
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
  htmlFor?: string;
  className?: string;
  onKeyDown?: (value: any) => void;
}

export const Input = forwardRef(
  (props: IinputProps, ref: Ref<HTMLInputElement>) => {
    const {
      label,
      type,
      className,
      onChange,
      value,
      placeholder,
      disabled,
      htmlFor,
      onKeyDown,
      ...perProps
    } = props;
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={htmlFor}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={className ? className : styles.input}
          name={props.label}
          {...perProps}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={onKeyDown}
          
        />
      </div>
    );
  }
);
