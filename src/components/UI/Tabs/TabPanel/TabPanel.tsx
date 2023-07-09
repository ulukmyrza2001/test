import React from "react";
import Box from "@mui/material/Box";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  routTab?: string;
}

export const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, routTab, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
