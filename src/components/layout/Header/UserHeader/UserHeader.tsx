import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styles from "./UserHeader.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginForm from "../../../LoginForm/LoginForm";
import { ModalComponent } from "../../../UI/Modal/Modal";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const UserHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const role = Cookies.get("role");

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  // MAP
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          toast.error("Error located!");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.!");
    }
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      if (latitude && longitude) {
        const apiKey = "90fb5b07-f5be-45d5-9e4e-ca59051b2776";
        const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${longitude},${latitude}&format=json`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          const featureMember =
            data.response.GeoObjectCollection.featureMember[0];
          const addressDetails =
            featureMember.GeoObject.metaDataProperty.GeocoderMetaData
              .AddressDetails;
          const city =
            addressDetails.Country.AdministrativeArea.Locality.LocalityName;
          const country = addressDetails.Country.CountryName;
          setLocation(`${city}, ${country}`);
        } catch (error) {
          toast.error("Error fetching geolocation data");
          setLocation("Location not found");
        }
      }
    };

    fetchLocation();
  }, [latitude, longitude]);

  // --
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    Cookies.remove("role");
    Cookies.remove("token");
    setAnchorEl(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner_header}>
        <div>
          <Link to="/" className={styles.logo}>
            Чебер
          </Link>
        </div>
        <div className={styles.wrapper_nav}>
          <div
            className={styles.wrapper_located}
            onClick={() => showModalHandler()}
          >
            <LocationOnIcon />
            {location}
          </div>
          <ModalComponent active={showModal} handleClose={hideModalHandler}>
            asd
          </ModalComponent>
          <Link to="/partner">Стать партнером</Link>
          <Link to="/contacts">Контакты</Link>
          {role ? (
            <div>
              <FaUserCircle
                color="grey"
                fontSize="28px"
                cursor="pointer"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/profile" className={styles.link}>
                    Личный кабинет
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/history" className={styles.link}>
                    История записей
                  </Link>
                </MenuItem>
                <MenuItem onClick={logOut}>Выйти</MenuItem>
              </Menu>
            </div>
          ) : (
            <div
              className={styles.wrapper_located}
              onClick={() => setShowLoginModal(true)}
            >
              Войти
            </div>
          )}
          <LoginForm active={showLoginModal} setActive={setShowLoginModal} />
        </div>
      </div>
    </header>
  );
};
