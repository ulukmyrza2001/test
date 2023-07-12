import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../UI/Buttons/Button/Button";
import { InputNumberMask } from "../UI/Inputs/InputMask/InputMask";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { RegistrationUser } from "../../store/features/auth-slice";
import { Input } from "../UI/Inputs/Input/Input";
import { InputPassword } from "../UI/Inputs/InputPassword/InputPassword";

interface LoginProps {
  active?: boolean;
  setActive: any;
}

interface FormData {
  firstName: string;
  lastName: string;
  authInfoRequest: { phoneNumber: string; password: string };
}

const RegistrationForm = ({ setActive }: LoginProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    dispatch(
      RegistrationUser({
        userData: data,
      })
    ).then(() => {
      window.location.reload();
    });
    setActive(false);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.input_wrapper}>
        <Input
          htmlFor="firstName"
          label="Имя:"
          type="text"
          {...register("firstName", {
            required: "errors",
            minLength: {
              value: 3,
              message: "Minimum 3  symbol",
            },
          })}
        />
        {errors.firstName && (
          <span>{errors?.firstName.message || "min 3"}</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <Input
          label="Фамилия:"
          htmlFor="lastName"
          type="text"
          {...register("lastName", {
            required: "errors",
            minLength: {
              value: 3,
              message: "Minimum 3  symbol",
            },
          })}
        />
        {errors.lastName && <span>{errors?.lastName.message || "min 3"}</span>}
      </div>
      <div className={styles.input_wrapper}>
        <InputNumberMask
          label="Телефон:"
          onChange={(value) => setValue("authInfoRequest.phoneNumber", value)}
          value={watch("authInfoRequest.phoneNumber")}
        />
        {errors?.authInfoRequest?.phoneNumber && (
          <span>This field is required</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <InputPassword
          htmlFor="password"
          label="Пароль:"
          type="password"
          {...register(`authInfoRequest.password`, {
            required: "error",
            minLength: {
              value: 3,
              message: "Minimum 3  symbol",
            },
          })}
        />
        {errors?.authInfoRequest?.password && (
          <span>{errors?.authInfoRequest?.password.message || "min 6"}</span>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RegistrationForm;
