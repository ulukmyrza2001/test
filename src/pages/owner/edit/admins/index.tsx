import { useState } from "react";
import { ModalComponent } from "../../../../components/UI/Modal/Modal";
import Styles from "./style.module.css";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { Button } from "../../../../components/UI/Buttons/Button/Button";

export const EditAdmins = () => {
  const [isOpen, setIsOpen] = useState(true);
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

  return (
    <ModalComponent
      active={isOpen}
      handleClose={() => setIsOpen(false)}
      title="Изменение Филиала"
    >
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
            onClick={() => setIsOpen(false)}
          >
            Закрыть
          </Button>
          <Button>Сохранить</Button>
        </div>
      </div>
    </ModalComponent>
  );
};
