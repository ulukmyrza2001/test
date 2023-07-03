import { useEffect, useRef } from "react";
import NoServerVideo from "../../../assets/layout-video/NoServer.json";
import styles from "./NoServer.module.css";
import Lottie from "lottie-web";

export const NoServerPage = () => {
  const animateContainer = useRef<any>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animateContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NoServerVideo,
    });
  }, []);

  return (
    <div className="wrapper-lottie">
      <div className={styles.video} ref={animateContainer} />
      <span className={styles.title}>Сервер не работает</span>
    </div>
  );
};
