import styles from "./LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalComponent } from "../UI/Modal/Modal";
import { Button } from "../UI/Buttons/Button/Button";
import { InputNumberMask } from "../UI/Inputs/InputMask/InputMask";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { SignUp } from "../../store/features/auth-slice";

interface LoginProps {
  active: boolean;
  setActive: any;
}

interface FormData {
  phoneNumber: string;
  password: string;
}

export default function LoginForm({ active, setActive }: LoginProps) {
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

  const hideLoginModal = () => {
    setActive(false);
  };

  return (
    <ModalComponent active={active} handleClose={hideLoginModal}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.input_wrapper}>
          <InputNumberMask
            label="Телефон:"
            onChange={(value) => setValue("phoneNumber", `+${value}`)}
            value={watch("phoneNumber")}
          />
          {errors.phoneNumber && <span>This field is required</span>}
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="password" className="label">
            Пароль:
          </label>
          <input
            className={styles.input}
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </ModalComponent>
  );
}
