import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiSolidCircle } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";
import styles from "./Accordion.module.css";
import { Link } from "react-router-dom";

interface Accordion {
  id: number;
  name: string;
  icon: string;
  subCategoryServices:
    | {
        id: number;
        name: string;
        serviceResponses: {
          id: number;
          name: string;
          price: number;
          duration: {
            seconds: number;
            nano: number;
            negative: boolean;
            zero: boolean;
            units:
              | {
                  dateBased: boolean;
                  timeBased: boolean;
                  durationEstimated: boolean;
                }[]
              | [];
          };
        };
      }[]
    | [];
}

export const AccordionUi = (props: any) => {
  return (
    <>
      {props.date?.map(
        (el: {
          id: number;
          name: string;
          icon: string;
          subCategoryServices: [];
        }) => {
          return (
            <div key={el.id}>
              <Accordion className={styles["MuiPaper-root"]}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className={styles.service}>
                    {React.createElement(el?.icon, {
                      size: "25",
                      color: "#7e7e7e",
                    })}
                    {el?.name}
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  {el?.subCategoryServices.map(
                    (item: {
                      id: number;
                      name: string;
                      serviceResponses: [];
                    }) => {
                      return (
                        <Accordion
                          className={styles["MuiPaper-root"]}
                          key={item.id}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{item?.name}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {item?.serviceResponses?.map(
                              (elem: {
                                id: number;
                                name: string;
                                price: number;
                                duration: { seconds: number; nano: number };
                              }) => {
                                return (
                                  <div
                                    className={styles.blockItem}
                                    key={Math.random()}
                                  >
                                    <div className={styles.title}>
                                      <p>{elem?.name}</p>
                                      <p className={styles.timePrice}>
                                        {elem?.price} сом{" "}
                                        <BiSolidCircle size={8} />{" "}
                                        {elem?.duration.seconds}
                                        {elem?.duration.nano}
                                      </p>
                                    </div>
                                    <Link to={"#"} className={styles.iconLink}>
                                      <AiOutlineRightCircle />
                                    </Link>
                                  </div>
                                );
                              }
                            )}
                          </AccordionDetails>
                        </Accordion>
                      );
                    }
                  )}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        }
      )}
    </>
  );
};
