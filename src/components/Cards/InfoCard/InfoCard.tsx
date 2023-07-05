import React, { useState } from "react";
import styles from "./InfoCard.module.css";
import Popover from "@mui/material/Popover";
import { FaHeart, FaDollarSign, FaUserPlus } from "react-icons/fa";
import { BiSolidCircle, BiTime, BiLogoInstagramAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export const InfoCard = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={styles.blockCard}>
      <div className={styles.headerCard}>
        <div className={styles.header_card_title}>
          <p>Svoi</p>
          <h4>Барбершоп</h4>
        </div>
        <FaHeart size={20} color="#c2c2c2" />
      </div>
      <div className={styles.recordGrades}>
        <div className={styles.grades}>
          <div>
            <span>9.7</span>
            <FaHeart color="yellow" />
          </div>
          <p>446 оценок</p>
        </div>
        <div className={styles.record}>
          <span>
            15 <FaUserPlus color="#000" /> <BiSolidCircle size={8} />
          </span>
          <FaDollarSign />
          <FaDollarSign />
          <FaDollarSign color="#c2c2c2" />
        </div>
      </div>
      <div className={styles.about_us}>
        <h5>О нас</h5>
        <div className={styles.about_address}>
          <div
            aria-describedby={id}
            onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}
            className={styles.time_picker}
          >
            <BiTime size={19} />
            <p>
              09:00 - 00:00 <IoMdArrowDropdown size={20} />
              <span>Открытo</span>
            </p>
          </div>
          <div>
            <BsFillTelephoneFill style={{ marginLeft: "2px" }} size={16} />{" "}
            <p>+7 777 672 8102</p>
          </div>
          <div>
            <BiLogoInstagramAlt size={20} /> <p>Instagram</p>
          </div>
          <div>
            <MdLocationOn size={22} />
            <p>пр.Достык 105 оф.614 Б.Ц. Premier Alatau.</p>
          </div>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aec02df790a0fa3b5498c8e49adfca3bd5f51a9df8d1694e1a4393e1e91c65a21&amp;source=constructor"
        width="100%"
        height="300"
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={styles.schedules}>
          <p>Часы работы</p>
          <div className={styles.time_week}>
            <p>Понедельник</p>
            <p>10:00 - 18:00</p>
            <p>Вторник</p>
            <p>10:00 - 18:00</p>
            <p>Среда</p>
            <p>10:00 - 18:00</p>
            <p>Четверг</p>
            <p>10:00 - 18:00</p>
            <p>Пятница</p>
            <p>10:00 - 18:00</p>
            <p>Суббота</p>
            <p>10:00 - 18:00</p>
            <p>Воскресенье</p>
            <p>10:00 - 18:00</p>
          </div>
        </div>
      </Popover>
    </div>
  );
};
