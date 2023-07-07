import { useNavigate } from "react-router-dom";
import Styles from "./style.module.css";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { useState } from "react";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import { Button } from "../../../../components/UI/Buttons/Button/Button";

export const CreateAffiliate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    phoneNumber: string;
    countryId: { label: string; value: string | number } | null;
    regionId: { label: string; value: string | number } | null;
    cityId: { label: string; value: string | number } | null;
    street: string;
  }>({
    phoneNumber: "",
    countryId: null,
    regionId: null,
    cityId: null,
    street: "",
  });

  const Reset = () => {
    setData({
      phoneNumber: "",
      countryId: null,
      regionId: null,
      cityId: null,
      street: "",
    });
  };
  return (
    <div className={Styles.aflc}>
      <div className={Styles.aflc_wrapper}>
        <h1 className={Styles.caption}>Создание Филиала</h1>
        <button className={Styles.Btn} onClick={() => navigate("/affiliate")}>
          К филиалам
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
            label="Страна"
            value={data.countryId}
            onChange={(e) =>
              setData({
                ...data,
                countryId: e,
              })
            }
            options={[]}
            isLoading={false}
            placeholder="Выберите страну"
            isClearable={false}
            isDisabled={false}
            noOptionsMessage={() => "sorry fuck you"}
          />
          <LonelySelect
            options={[]}
            label="Регион"
            placeholder="Выберите регион"
            noOptionsMessage={() => "sorry fuck you"}
            value={data.regionId}
            onChange={(e) =>
              setData({
                ...data,
                regionId: e,
              })
            }
            isClearable={false}
            isLoading={false}
            isDisabled={false}
          />
          <LonelySelect
            label="Город"
            value={data.cityId}
            onChange={(e) =>
              setData({
                ...data,
                cityId: e,
              })
            }
            options={[]}
            isLoading={false}
            placeholder="Выберите город"
            isClearable={false}
            isDisabled={false}
            noOptionsMessage={() => "sorry fuck you"}
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
            value={data.street}
            onChange={(e) =>
              setData({
                ...data,
                street: e.target.value,
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
