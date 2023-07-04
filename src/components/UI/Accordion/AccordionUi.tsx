import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiSolidCircle } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { AiOutlineRightCircle } from "react-icons/ai";
import styles from "./Accordion.module.css";

export const AccordionUi = (props: any) => {
  const [questionText, setQuestionText] = useState("");
  const [questionActive, setQuestionActive] = useState(false);

  const handleQuestionClick = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    setQuestionActive(!questionActive);
    setQuestionText(text);
  };

  return (
    <>
      {props.date?.map((el: any) => {
        return (
          <div key={el.id}>
            <Accordion className={styles["MuiPaper-root"]}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className={styles.service}>
                  {React.createElement(el?.icons, {
                    size: "25",
                    color: "#7e7e7e",
                  })}
                  {el?.salon} ({el?.quantity})
                </p>
              </AccordionSummary>
              <AccordionDetails>
                {el?.services ? (
                  el.services.map((item: any) => {
                    return (
                      <Accordion
                        className={styles["MuiPaper-root"]}
                        key={Math.random()}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            {item?.serviceType} ({item?.quantity})
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {item?.servicesData?.map((elem: any) => {
                            return (
                              <div
                                className={styles.blockItem}
                                key={Math.random()}
                              >
                                <div className={styles.title}>
                                  <span>
                                    {elem?.population && (
                                      <SiFireship color="red" />
                                    )}
                                  </span>
                                  <p>{elem?.title}</p>
                                  <span>
                                    {elem?.question && (
                                      <BsFillQuestionCircleFill
                                        style={{ cursor: "pointer" }}
                                        onClick={(e: React.MouseEvent) =>
                                          handleQuestionClick(e, elem.question)
                                        }
                                        color="gray"
                                      />
                                    )}
                                  </span>
                                  <p className={styles.timePrice}>
                                    {elem?.price} сом <BiSolidCircle size={8} />{" "}
                                    {elem?.time}
                                  </p>
                                  <hr />
                                  {questionActive && (
                                    <p className={styles.questionText}>
                                      {elem?.question === questionText
                                        ? questionText
                                        : ""}
                                    </p>
                                  )}
                                </div>
                                <span className={styles.iconLink}>
                                  <AiOutlineRightCircle />
                                </span>
                              </div>
                            );
                          })}
                        </AccordionDetails>
                      </Accordion>
                    );
                  })
                ) : (
                  <>
                    {el?.servicesData?.map((elem: any) => {
                      return (
                        <div className={styles.blockItem} key={Math.random()}>
                          <div className={styles.title}>
                            <span>
                              {elem?.population && <SiFireship color="red" />}
                            </span>
                            <span>{elem?.title}</span>
                            <span>
                              {elem?.question && (
                                <BsFillQuestionCircleFill
                                  style={{ cursor: "pointer" }}
                                  onClick={(e: React.MouseEvent) =>
                                    handleQuestionClick(e, elem.question)
                                  }
                                  color="gray"
                                />
                              )}
                            </span>
                            <span className={styles.timePrice}>
                              {elem?.price} сом <BiSolidCircle size={8} />{" "}
                              {elem?.time}
                            </span>
                            <hr />
                            {questionActive && (
                              <p className={styles.questionText}>
                                {elem?.question === questionText
                                  ? questionText
                                  : ""}
                              </p>
                            )}
                          </div>
                          <span className={styles.iconLink}>
                            <AiOutlineRightCircle />
                          </span>
                        </div>
                      );
                    })}
                  </>
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </>
  );
};
