import { IconButton } from "@mui/material";
import { EditAffilate } from "../edit/affiliate";
import Styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  deleteBranch,
  getBranchesOwner,
} from "../../../store/features/branch-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { Table } from "../../../components/Tables/Table/Table";

export const AffiliatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { branchData, isLoadingBranch } = useSelector(
    (state: any) => state.branch
  );

  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<{
    phoneNumber: string;
    branchId: { label: string; value: number } | null;
    regionId: { label: string; value: number } | null;
    cityId: { label: string; value: number } | null;
    street: string;
    latitude: null | number;
    longitude: null | number;
  }>({
    phoneNumber: "",
    branchId: null,
    regionId: null,
    cityId: null,
    street: "",
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    dispatch(getBranchesOwner() as unknown as AnyAction);
  }, []);

  const handleDelete = (itemId: any, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(
      deleteBranch({
        branchId: itemId,
      }) as never as AnyAction
    );
  };

  const handleEdit = (item: any, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(item);
    setData({
      ...data,
      branchId: item.id,
      phoneNumber: item.phoneNumber,
    });
    setIsOpen(true);
  };

  const HEADER_DATA_OWNER = [
    {
      headerName: "№",
      field: "index",
      flex: 3,
    },
    {
      headerName: "Адрес",
      field: "address",
      flex: 10,
    },
    {
      headerName: "Номер",
      field: "phoneNumber",
      flex: 10,
    },

    {
      headerName: "Действие",
      field: "action",
      flex: 5,
      renderCell: (item: any) => {
        return (
          <div>
            <IconButton
              onClick={(event) => handleDelete(item.id, event)}
              children={<AiOutlineDelete cursor="pointer" size={22} />}
            />
            <IconButton
              onClick={(event) => handleEdit(item.row, event)}
              children={<AiOutlineEdit cursor="pointer" size={22} />}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className={Styles.afl}>
      <EditAffilate
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={data}
        setData={setData}
      />
      <div className={Styles.afl_wrapper}>
        <h1 className={Styles.caption}>Филиалы</h1>
        <button
          className={Styles.Btn}
          onClick={() => navigate("/affiliate/create")}
        >
          Создать филиал
          <svg className={Styles.svg} viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
          </svg>
        </button>
      </div>
      <div className={Styles.content}>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Table
            columns={HEADER_DATA_OWNER}
            data={branchData}
            loading={isLoadingBranch}
            pagination={true}
            index={true}
          />
        </div>
      </div>
    </div>
  );
};
