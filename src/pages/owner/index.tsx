import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TableData } from "../../components/Tables/TableData/TableData";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { getBranches } from "../../store/features/branch";

export const OwnerPage = () => {
  const dispatch = useDispatch();
  const { branchData, isLoadingBranch } = useSelector(
    (state: any) => state.branch
  );
  console.log(branchData);

  useEffect(() => {
    dispatch(getBranches() as unknown as AnyAction);
  }, []);

  const HeaderSize = [
    {
      headerName: "№",
      field: "id",
      flex: 1,
      searchtable: false,
    },
    {
      headerName: "Адрес ",
      field: "address",
      flex: 10,
    },
    {
      headerName: "Номер ",
      field: "phoneNumber",
      flex: 10,
    },
    {
      headerName: "Дата ",
      field: "localData",
      flex: 10,
    },

    {
      headerName: "Действие",
      field: "action",
      width: 150,
      stickyEnd: true,
      renderCell: (item: any) => {
        return (
          <div>
            <IconButton
              onClick={() => console.log(4)}
              children={<AiOutlineDelete cursor="pointer" size={22} />}
            />
            <IconButton
              onClick={() => console.log(6)}
              children={<AiOutlineEdit cursor="pointer" size={22} />}
            />
          </div>
        );
      },
    },
  ];

  const Data = [
    {
      name: "black",
      id: 1,
    },
    {
      name: "white",
      id: 2,
    },
    {
      name: "silver",
      id: 3,
    },
  ];

  return (
    <div>
      <TableData
        columns={HeaderSize}
        data={Data}
        loading={false}
        pagination={false}
        index={false}
      />
    </div>
  );
};
