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
          label="Имя:"
          placeholder="Имя:"
          type="text"
          htmlFor="firstName"
          {...register("firstName", { min: 3, required: true })}
        />
        {errors.firstName && (
          <span>Значение должно быть больше или равно 3 буквы</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <Input
          label="Фамилия:"
          placeholder="Фамилия:"
          type="text"
          htmlFor="lastName"
          {...register("lastName", { min: 3, required: true })}
        />
        {errors.lastName && (
          <span>Значение должно быть больше или равно 3 буквы</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <InputNumberMask
          label="Телефон:"
          onChange={(value) => setValue("authInfoRequest.phoneNumber", value)}
          value={watch("authInfoRequest.phoneNumber")}
        />
        {errors.authInfoRequest?.phoneNumber && (
          <span>This field is required</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <InputPassword
          label="Пароль:"
          placeholder="Пароль:"
          htmlFor="password"
          type="password"
          {...register(`authInfoRequest.password`, { min: 6, required: true })}
        />
        {errors.authInfoRequest?.password && (
          <span>Пароль должен содержать больше или равно 6 значение </span>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RegistrationForm;
