import { useState } from "react";
import { ModalComponent } from "../../../../components/UI/Modal/Modal";
import Styles from "./style.module.css";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { Button } from "../../../../components/UI/Buttons/Button/Button";

export const EditAffilate = () => {
  const [isOpen, setIsOpen] = useState(true);
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

  return (
    <ModalComponent
      active={isOpen}
      handleClose={() => setIsOpen(false)}
      title="Изменение Филиала"
    >
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
            onClick={() => setIsOpen(false)}
          >
            Сбросить
          </Button>
          <Button>Сохранить</Button>
        </div>
      </div>
    </ModalComponent>
  );
};
