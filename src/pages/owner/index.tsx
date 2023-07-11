import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { getBranchesOwner } from "../../store/features/branch-slice";
import { Table } from "../../components/Tables/Table/Table";
import Styles from "./Style.module.css";

export const OwnerPage = () => {
  const dispatch = useDispatch();
  const { branchData, isLoadingBranch } = useSelector(
    (state: any) => state.branch
  );

  useEffect(() => {
    dispatch(getBranchesOwner() as unknown as AnyAction);
  }, []);

  const HeaderSize = [
    {
      headerName: "№",
      field: "index",
      flex: 3,
      searchtable: false,
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
  ];

  return (
    <div className={Styles.dashboard}>
      <div className={Styles.dashboard_wrapper}>
        <h1 className={Styles.caption}>Dashboard</h1>
      </div>
      <div className={Styles.content}>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Table
            columns={HeaderSize}
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
