import style from "./InputMask.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IinputNumberMask {
  label?: string;
  onChange?: (value: string) => void | any;
  value?: string | undefined;
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

export function InputNumberMask(props: IinputNumberMask) {
  const { onChange, value, onKeyDown, disabled, label, ...restProps } = props;

  const inputStyle = {
    ...restProps,
    border: "0.5px solid silver",
    width: "300px",
    height: "50px",
    backgroundColor: "transparent", // Remove background color
  };

  const buttonStyle = {
    background: "transparent !important",
    border: "none",

    "&.selected-flag, &.open": {
      background: "red !important",
    },
    "&:hover, &:active": {
      background: "red !important",
    },
  };

  return (
    <div className={style.wrapper}>
      {label && (
        <label className={style.label} htmlFor={label}>
          {label}
        </label>
      )}
      <PhoneInput
        {...props}
        country={"kg"}
        onChange={onChange}
        onlyCountries={["kg", "kz", "uz"]}
        enableLongNumbers={false}
        countryCodeEditable={false}
        inputStyle={{
          width: "370px",
          height: "40px",
        }}
        buttonClass={style.btn}
        buttonStyle={{
          backgroundColor: "transparent",
          borderRadius: "16px",
          border: "none",
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
}
