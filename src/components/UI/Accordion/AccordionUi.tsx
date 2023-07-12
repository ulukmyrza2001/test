import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiSolidCircle } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";
import styles from "./Accordion.module.css";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import LoginForm from "../../LoginForm/LoginForm";

interface Accordion {
  backgroundColor?: string;
  data:
    | {
        id: number;
        name: string;
        icon?: string;
        subCategoryServices:
          | {
              id: number;
              name: string;
              serviceResponses: {
                id: number;
                name: string;
                price: number;
                duration: number;
              }[];
            }[]
          | [];
      }[];
  branchData: {
    companyId: number;
    companyName: string;
    branchId: number;
    address: string;
    phoneNumber: string;
    instagram: string;
    categoryType: string;
    images: string[];
  };
}

export const AccordionUi = (props: Accordion) => {
  const { data, branchData, backgroundColor } = props;
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const auth = Cookies.get("isAuthenticated");
  console.log(auth);

  const [showLoginModal, setShowLoginmdal] = useState(false);

  const showLoginModalHandler = () => {
    setShowLoginmdal(true);
  };

  return (
    <>
      {data?.map((el) => {
        return (
          <div key={el.id}>
            <Accordion
              className={styles["MuiPaper-root"]}
              sx={{
                boxShadow: "none",
                margin: "5px",
                backgroundColor: `${backgroundColor ? backgroundColor : ""}`,
              }}
            >
              <AccordionSummary
                className={styles["MuiAccordionSummary-content"]}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <img className={styles.icon} src={el?.icon} alt={el?.icon} />
                <p>{el?.name}</p>
              </AccordionSummary>
              <AccordionDetails>
                {el?.subCategoryServices.map((item) => {
                  return (
                    <Accordion
                      className={styles["MuiPaper-root"]}
                      sx={{ boxShadow: "none" }}
                      key={item.id}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{item?.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails className={styles.details}>
                        {item?.serviceResponses?.map((elem) => {
                          return (
                            <div className={styles.blockItem} key={elem?.id}>
                              <div className={styles.title}>
                                <p>{elem?.name}</p>
                                <p className={styles.timePrice}>
                                  {elem?.price} сом <BiSolidCircle size={8} />
                                  {elem?.duration} минут
                                </p>
                              </div>
                              {auth === "true" ? (
                                <Link
                                  to={`/${branchData?.companyName}/barbershop/usluga/${elem.id}`}
                                  className={
                                    path === "barbershop"
                                      ? styles.barber_icon
                                      : styles.iconLink
                                  }
                                >
                                  <AiOutlineRightCircle />
                                </Link>
                              ) : (
                                <div
                                  onClick={showLoginModalHandler}
                                  className={
                                    path === "barbershop"
                                      ? styles.barber_icon
                                      : styles.iconLink
                                  }
                                >
                                  <AiOutlineRightCircle />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
      <LoginForm active={showLoginModal} setActive={setShowLoginmdal} />
    </>
  );
};
