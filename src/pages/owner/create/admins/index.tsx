import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import Styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../../components/UI/Buttons/Button/Button";
import { Input } from "../../../../components/UI/Inputs/Input/Input";

export const CreateAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    phoneNumber: string;
    branchId: { label: string; value: string | number } | null;
    lasstName: string;
    firstName: string;
    password: string;
  }>({
    phoneNumber: "",
    branchId: null,
    lasstName: "",
    firstName: "",
    password: "",
  });

  const Reset = () => {
    setData({
      phoneNumber: "",
      branchId: null,
      lasstName: "",
      firstName: "",
      password: "",
    });
  };
  return (
    <div className={Styles.admc}>
      <div className={Styles.admc_wrapper}>
        <h1 className={Styles.caption}>Создание Админам</h1>
        <button className={Styles.Btn} onClick={() => navigate("/admins")}>
          К админам
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={Styles.svg}
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />{" "}
          </svg>
        </button>
      </div>
      <div className={Styles.content}>
        <div className={Styles.inp_place}>
          <LonelySelect
            label="Филиал"
            value={data.branchId}
            onChange={(e) =>
              setData({
                ...data,
                branchId: e,
              })
            }
            options={[]}
            isLoading={false}
            placeholder="Выберите филиал"
            isClearable={false}
            isDisabled={false}
            noOptionsMessage={() => "sorry fuck you"}
          />
          <Input
            label="Фамилия"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            border="1px solid silver"
            placeholder="Введите фамилию"
          />
          <Input
            label="Имя"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            border="1px solid silver"
            placeholder="Введите имя"
          />
          <InputNumberMask
            label="Номер телефона"
            value={data.phoneNumber}
            onChange={(e) =>
              setData({
                ...data,
                phoneNumber: e,
              })
            }
          />
          <Input
            label="Улица"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            border="1px solid silver"
            placeholder="Введите местоположение"
          />
        </div>
        <div className={Styles.control}>
          <Button
            backgroundColor="transparent"
            color="var(--ui-background-color)"
            border="1px solid var(--ui-background-color)"
            onClick={Reset}
          >
            Сбросить
          </Button>
          <Button>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};
