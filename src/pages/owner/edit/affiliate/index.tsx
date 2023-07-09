import { useEffect, useState } from "react";
import { ModalComponent } from "../../../../components/UI/Modal/Modal";
import Styles from "./style.module.css";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { Button } from "../../../../components/UI/Buttons/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { getCountriesSelect } from "../../../../store/features/countries-slice";
import { getRegionSelect } from "../../../../store/features/region-slice";
import { getCitySelect } from "../../../../store/features/city-slice";
import { putBranch } from "../../../../store/features/branch-slice";

export const EditAffilate = ({
  isOpen,
  setIsOpen,
  data,
  setData,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  data: {
    phoneNumber: string;
    countryId: { label: string; value: number } | null;
    branchId: any;
    regionId: { label: string; value: number } | null;
    cityId: { label: string; value: number } | null;
    street: string;
    latitude: null | number;
    longitude: null | number;
  };
  setData: any;
}) => {
  const dispatch = useDispatch();

  const [validation, setValidation] = useState(false);

  const { countriesData, isLoadingCountries } = useSelector(
    (state: any) => state.countries
  );

  const { regionData, isLoadingRegion } = useSelector(
    (state: any) => state.region
  );

  const { cityData, isLoadingCity } = useSelector((state: any) => state.city);

  useEffect(() => {
    if (countriesData === null) {
      dispatch(getCountriesSelect() as never as AnyAction);
    }
    if (data.countryId !== null) {
      dispatch(
        getRegionSelect({
          countryId: data.countryId?.value,
        }) as never as AnyAction
      );
    }
  }, [data.countryId, countriesData, dispatch]);

  useEffect(() => {
    if (data.regionId !== null) {
      dispatch(
        getCitySelect({
          regionId: data.regionId?.value,
        }) as never as AnyAction
      );
    }
  }, [data.regionId, dispatch]);

  useEffect(() => {
    const isValid =
      data.phoneNumber !== "" &&
      data.countryId !== null &&
      data.regionId !== null &&
      data.cityId !== null &&
      data.street !== "";

    setValidation(isValid);
  }, [data]);

  const handlePost = () => {
    dispatch(
      putBranch({
        branchId: data?.branchId,
        branchData: {
          regionId: data.regionId?.value,
          cityId: data.regionId?.value,
          phoneNumber: data.phoneNumber,
          addressRequest: {
            name: data.street,
            latitude: data.latitude,
            longitude: data.longitude,
          },
        },
      }) as unknown as AnyAction
    );
    setIsOpen(false);
  };

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
            options={countriesData.map((item: any) => {
              return {
                label: item.name,
                value: item.addressId,
              };
            })}
            isLoading={isLoadingCountries}
            placeholder="Выберите страну"
            isClearable={false}
            isDisabled={false}
            noOptionsMessage={() => "Пусто"}
          />
          <LonelySelect
            options={regionData?.map((item: any) => {
              return {
                label: item.name,
                value: item.addressId,
              };
            })}
            label="Регион"
            placeholder="Выберите регион"
            noOptionsMessage={() => "С начало выберите страну"}
            value={data.regionId}
            onChange={(e) =>
              setData({
                ...data,
                regionId: e,
              })
            }
            isClearable={false}
            isLoading={isLoadingRegion}
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
            options={cityData?.map((item: any) => {
              return {
                label: item.name,
                value: item.addressId,
              };
            })}
            isLoading={isLoadingCity}
            placeholder="Выберите город"
            isClearable={false}
            isDisabled={false}
            noOptionsMessage={() => "С начало выберите регион"}
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
            color="var(--ui-disabled-color)"
            border="1px solid silver"
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
            color="var(--ui-disabled-color)"
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
          <Button onClick={handlePost} disabled={!validation}>
            Сохранить
          </Button>
        </div>
      </div>
    </ModalComponent>
  );
};
