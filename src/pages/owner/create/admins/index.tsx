import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import Styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/UI/Buttons/Button/Button";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { getBranchesOwner } from "../../../../store/features/branch-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { InputPassword } from "../../../../components/UI/Inputs/InputPassword/InputPassword";
import { adminsRegistration } from "../../../../store/features/admin-slice";

export const CreateAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [validation, setValidation] = useState(false);
  const [data, setData] = useState<{
    phoneNumber: string;
    branchId: { label: string; value: string | number } | null;
    lastName: string;
    firstName: string;
    password: string;
  }>({
    phoneNumber: "",
    branchId: null,
    lastName: "",
    firstName: "",
    password: "",
  });

  const { branchData, isLoadingBranch } = useSelector(
    (state: any) => state.branch
  );

  useEffect(() => {
    dispatch(getBranchesOwner() as unknown as AnyAction);
  }, [dispatch]);

  useEffect(() => {
    const isValid =
      data.phoneNumber !== "" &&
      data.branchId !== null &&
      data.lastName !== "" &&
      data.firstName !== "" &&
      data.password !== "";

    setValidation(isValid);
  }, [data]);

  const Reset = () => {
    setData({
      phoneNumber: "+996",
      branchId: null,
      lastName: "",
      firstName: "",
      password: "",
    });
  };

  const handlePost = () => {
    dispatch(
      adminsRegistration({
        branchId: data.branchId?.value,
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
    Reset();
  };
  return (
    <div className={Styles.admc}>
      <div className={Styles.admc_wrapper}>
        <h1 className={Styles.caption}>Создание Админа</h1>
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
              fillRule="evenodd"
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
            options={branchData?.map((item: any) => {
              return {
                value: item.id,
                label: item.address,
              };
            })}
            isLoading={isLoadingBranch}
            placeholder="Выберите филиал"
            isClearable={false}
            isDisabled={false}
            noOptionsMessage={() => "sorry fuck you"}
          />
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
            placeholder="Введите фамилию"
            color="black"
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
            border="1px solid silver"
            placeholder="Введите имя"
            color="black"
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
          <InputPassword
            label="Пароль"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            border="1px solid silver"
            placeholder="Придумайте пароль"
            color="black"
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
          <Button onClick={handlePost}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};
