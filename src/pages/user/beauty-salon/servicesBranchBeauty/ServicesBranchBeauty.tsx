import React, { useState, useEffect } from "react";
import styles from "./ServicesBranchBeauty.module.css";
import { Container } from "../../../../styles/ContainerStyle/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AnyAction } from "@reduxjs/toolkit";
import { AccordionUi } from "../../../../components/UI/Accordion/AccordionUi";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../../store/features/service-slice";
import { useParams } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={styles.tab_content}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "0 2rem" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const ServicesBranchBeauty = () => {
  const { beautySalonID } = useParams();
  const { branchData } = useSelector((state: any) => state.branch);
  const { serviceData } = useSelector((state: any) => state.service);

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices(beautySalonID) as never as AnyAction);
  }, [beautySalonID, dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        minHeight: "400px",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          padding: "1rem 4rem",
          width: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#000",
            },
          }}
          sx={{
            borderRight: 1,
            borderColor: "gray",
          }}
        >
          <Tab
            className={styles.tabs_name}
            label="Популярные"
            {...a11yProps(1)}
          />
          <Tab className={styles.tabs_name} label="Услуги" {...a11yProps(0)} />
          <Tab className={styles.tabs_name} label="Акции" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AccordionUi
            data={serviceData}
            branchData={branchData}
            backgroundColor="#d9d9d9"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccordionUi
            data={serviceData}
            branchData={branchData}
            backgroundColor="#d9d9d9"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Two
        </TabPanel>
      </Box>
    </Container>
  );
};
