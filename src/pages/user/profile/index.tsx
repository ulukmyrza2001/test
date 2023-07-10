import { useEffect } from "react";
import { Container } from "../../../styles/ContainerStyle/Container";
import Styles from "./style.module.css";
import { ImagePicker } from "../../../components/UI/ImagePicker/ImagePicker";

export const ProfilePage = () => {
  useEffect(() => {
    document.title = "Profile | Cheber";
    return () => {
      document.title = "Cheber"; // Reset the title when the component unmounts
    };
  }, []);
  return (
    <Container>
      <div className={Styles.wrapper}>
        <h1 className={Styles.page_text}>Личный кабинет</h1>
        <div>
          <div className={Styles.to_left}>
            <div className={Styles.current_data}>
              <div className={Styles.img_picker}>
                <ImagePicker borderRadius="999px" border="1px solid silver" />
              </div>
              <h3 className={Styles.name}>Азамат</h3>
              <p className={Styles.number}>+996708521328</p>
            </div>
            <div className={Styles.tabs}>
              <div className={Styles.tab}>Редактировать данные</div>
              <div className={Styles.tab}>Сменить пароль</div>
            </div>
          </div>
          <div className={Styles.to_right}></div>
        </div>
      </div>
    </Container>
  );
};
