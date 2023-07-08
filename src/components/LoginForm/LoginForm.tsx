import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalComponent } from "../UI/Modal/Modal";
import { Button } from "../UI/Buttons/Button/Button";
import { InputNumberMask } from "../UI/Inputs/InputMask/InputMask";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { SignUp } from "../../store/features/auth-slice";
import { TabsBasic } from "../UI/Tabs/TabsBasic/TabsBasic";
import { TabPanel } from "../UI/Tabs/TabPanel/TabPanel";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { InputPassword } from "../UI/Inputs/InputPassword/InputPassword";

interface LoginProps {
  active: boolean;
  setActive: any;
}

interface FormData {
  phoneNumber: string;
  password: string;
}

const TABS_LOGIN = [
  {
    id: 1,
    title: "Логин",
  },
  {
    id: 2,
    title: "Регистрация",
  },
];

export default function LoginForm({ active, setActive }: LoginProps) {
  const [tabValue, setTabValue] = useState(0);
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
      SignUp({
        userData: data,
      })
    );
    setActive(false);
  };

  const handleChange = (_: any, newValue: number) => {
    setTabValue(newValue);
  };

  const hideLoginModal = () => {
    setActive(false);
  };

  return (
    <ModalComponent active={active} handleClose={hideLoginModal}>
      <TabsBasic
        tabsValue={TABS_LOGIN}
        value={tabValue}
        onChange={handleChange}
      >
        <TabPanel index={0} value={tabValue}>
          <div className={styles.login}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.input_wrapper}>
                <InputNumberMask
                  label="Телефон:"
                  onChange={(value) => setValue("phoneNumber", value)}
                  value={watch("phoneNumber")}
                />
                {errors.phoneNumber && <span>This field is required</span>}
              </div>
              <div className={styles.input_wrapper}>
                <InputPassword
                  label="Пароль"
                  placeholder="Пароль"
                  htmlFor="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </TabPanel>
        <TabPanel index={1} value={tabValue}>
          <div className={styles.registration}>
            <RegistrationForm setActive={setActive} />
          </div>
        </TabPanel>
      </TabsBasic>
    </ModalComponent>
  );
}
