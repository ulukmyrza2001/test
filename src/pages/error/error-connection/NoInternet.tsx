import { useEffect, useRef } from "react";
import NoInternetVideo from "../../../assets/layout-video/NoInternet.json";
import { Button } from "../../../components/UI/Buttons/Button/Button";
import styles from "./NoInternet.module.css";
import Lottie from "lottie-web";

export const NoInternetPage = () => {
  const animateContainer = useRef<any>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animateContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NoInternetVideo,
    });
  }, []);

  function handleClick() {
    window.location.reload();
  }

  return (
    <div className="wrapper-lottie">
      <div className={styles.video} ref={animateContainer} />
      <Button
        width="150px"
        color="black"
        border="1px solid black"
        onClick={() => handleClick()}
      >
        Обновить
      </Button>
    </div>
  );
};
