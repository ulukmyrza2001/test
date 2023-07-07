import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./TabsBasic.module.css";

interface IUiTabs {
  children?: React.ReactNode;
  index?: number;
  matches?: string;
  value?: number | boolean;
  onChange?: any;
  tabsValue?:
    | {
        rout?: string;
        id: number;
        onClickHandler?: any;
        title: string | number;
      }[]
    | [];
  handleChange?: Function;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabsBasic = (props: IUiTabs) => {
  const { matches, value, onChange, tabsValue, children } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <div
        className={styles.Box}
        style={{ overflowX: `${matches !== "false" ? "initial" : "scroll"}` }}
      >
        <Tabs
          value={value}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          allowScrollButtonsMobile={true}
          sx={!matches ? { width: "100%" } : { width: "800px" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#5460e6",
            },
          }}
        >
          {tabsValue?.map((item) => {
            return (
              <Tab
                style={{
                  color: "#5460e6",
                }}
                // onClick={() => item?.onClickHandler()}
                label={item.title}
                key={item.id}
                {...a11yProps(item.id)}
              />
            );
          })}
        </Tabs>
      </div>
      {children}
    </Box>
  );
};
