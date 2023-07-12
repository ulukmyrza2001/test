import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./InputMask.module.css";

interface IinputNumberMask {
  label?: string;
  onChange: (value: string) => void | any;
  value: string | undefined;
  disabled?: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  boxShadow?: string;
  fontSize?:string
  color?: string;

  onKeyDown?: (value: any) => void;
}

export const InputNumberMask = (props: IinputNumberMask) => {
  const {
    onChange,
    value,
    onKeyDown,
    disabled,
    label,
    border,
    boxShadow,
    height,
    width,
    minWidth,
    fontSize,
    ...restProps
  } = props;

  const handleChange = (value: string) => {
    onChange("+" + value);
  };

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <PhoneInput
        {...restProps}
        disabled={disabled}
        country={"kg"}
        onChange={handleChange}
        onlyCountries={["kg", "kz", "uz"]}
        enableLongNumbers={false}
        countryCodeEditable={false}
        inputStyle={{
          fontSize: fontSize,
          width: `${width ? width : "100%"}`,
          height: `${height ? height : "40px"}`,
          border: `${border ? border : "1px solid #e0d5d5"}`,
          boxShadow: boxShadow,
          minWidth: minWidth,
          // color: "#7e7e7e",
        }}
        buttonStyle={{
          background: "white",
          border: `${border ? border : "0.3px solid var(--ui-disabled-color)"}`,
        }}
        value={value}
        masks={{
          kg: "(...)...-...",
          kz: "(...)...-..-..",
          uz: "-..-...-....",
        }}
      />
    </div>
  );
};
