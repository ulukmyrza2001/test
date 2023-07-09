import { useState } from "react";
import { ModalComponent } from "../../../../components/UI/Modal/Modal";
import Styles from "./style.module.css";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { Button } from "../../../../components/UI/Buttons/Button/Button";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { adminsIdPut } from "../../../../store/features/admin-slice";

export const EditAdmins = ({ isOpen, setIsOpen, data, setData }: any) => {
  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(
      adminsIdPut({
        adminId: data.adminId,
        AdminsData: {
          firstName: data.firstName,
          lastName: data.lastName,
          authInfoRequest: {
            phoneNumber: data.phoneNumber,
            password: data.password,
          },
        },
      }) as unknown as AnyAction
    );
    setIsOpen(false);
  };

  const Reset = () => {
    setData({
      ...data,
      password: "",
    });
    setIsOpen(false);
  };

  return (
    <ModalComponent
      active={isOpen}
      handleClose={() => Reset()}
      title="Изменение Филиала"
    >
      <div className={Styles.content}>
        <div className={Styles.inp_place}>
          <Input
            label="Фамилия"
            value={data.lastName}
            onChange={(e) =>
              setData({
                ...data,
                lastName: e.target.value,
              })
            }
            border="1px solid silver"
            color="var(--ui-disabled-color)"
            placeholder="Введите фамилию"
          />
          <Input
            label="Имя"
            value={data.firstName}
            onChange={(e) =>
              setData({
                ...data,
                firstName: e.target.value,
              })
            }
            color="var(--ui-disabled-color)"
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
            label="Новый пароль"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            border="1px solid silver"
            color="var(--ui-disabled-color)"
            placeholder="Введите новый пароль"
          />
        </div>
        <div className={Styles.control}>
          <Button
            backgroundColor="transparent"
            color="var(--ui-background-color)"
            border="1px solid var(--ui-background-color)"
            onClick={Reset}
          >
            Закрыть
          </Button>
          <Button onClick={handlePost}>Сохранить</Button>
        </div>
      </div>
    </ModalComponent>
  );
};
