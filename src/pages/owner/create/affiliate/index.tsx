import { useNavigate } from "react-router-dom";
import Styles from "./style.module.css";
import { Input } from "../../../../components/UI/Inputs/Input/Input";
import { InputNumberMask } from "../../../../components/UI/Inputs/InputMask/InputMask";
import { useEffect, useState } from "react";
import { LonelySelect } from "../../../../components/UI/Selects/LonelySelect/LonelySelect";
import { Button } from "../../../../components/UI/Buttons/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { postBranch } from "../../../../store/features/branch-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { getCountriesSelect } from "../../../../store/features/countries-slice";
import { getRegionSelect } from "../../../../store/features/region-slice";
import { getCitySelect } from "../../../../store/features/city-slice";

export const CreateAffiliate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [valiation, setValidation] = useState(false);
  const [data, setData] = useState<{
    phoneNumber: string;
    countryId: { label: string; value: number } | null;
    regionId: { label: string; value: number } | null;
    cityId: { label: string; value: number } | null;
    street: string;
    latitude: null | number;
    longitude: null | number;
  }>({
    phoneNumber: "",
    countryId: null,
    regionId: null,
    cityId: null,
    street: "",
    latitude: null,
    longitude: null,
  });

  const { countriesData, isLoadingCountries } = useSelector(
    (state: any) => state.countries
  );

  const { regionData, isLoadingRegion } = useSelector(
    (state: any) => state.region
  );

  const { cityData, isLoadingCity } = useSelector((state: any) => state.city);

  useEffect(() => {
    if (data.countryId === null) {
      dispatch(getCountriesSelect() as never as AnyAction);
    }
    if (data.countryId !== null) {
      dispatch(
        getRegionSelect({
          countryId: data.countryId?.value,
        }) as never as AnyAction
      );
    }
  }, [data.countryId, dispatch]);

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

  const Reset = () => {
    setData({
      phoneNumber: "+996",
      countryId: null,
      regionId: null,
      cityId: null,
      street: "",
      latitude: null,
      longitude: null,
    });
  };

  const hundlePost = () => {
    dispatch(
      postBranch({
        branchData: {
          phoneNumber: data.phoneNumber,
          regionId: data.regionId?.value,
          cityId: data.cityId?.value,
          addressRequest: {
            name: data.street,
            latitude: data.latitude,
            longitude: data.longitude,
          },
        },
      }) as unknown as AnyAction
    );
    Reset();
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
              fillRule="evenodd"
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
          <Button onClick={hundlePost} disabled={!valiation}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
