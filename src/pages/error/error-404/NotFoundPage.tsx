import { useEffect, useRef } from "react";
import NoPage from "../../../assets/layout-video/NoPage.json";
import { Button } from "../../../components/UI/Buttons/Button/Button";
import { useNavigate } from "react-router";
import styles from "./NotFoundPage.module.css";
import Lottie from "lottie-web";

export const NotFoundPage = () => {
  const animateContainer = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    Lottie.loadAnimation({
      container: animateContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NoPage,
    });
  }, []);

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="wrapper-lottie">
      <div className={styles.video} ref={animateContainer} />
      <span className={styles.title}>Код ошибки: 404</span>
      <Button width="150px" color="white" onClick={() => handleClick()}>
        Назад
      </Button>
    </div>
  );
};
