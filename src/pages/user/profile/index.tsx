import { useEffect } from "react";
import { Container } from "../../../styles/ContainerStyle/Container";
import styles from "./style.module.css";
import { ImagePicker } from "../../../components/UI/ImagePicker/ImagePicker";
import { Input } from "../../../components/UI/Inputs/Input/Input";

export const ProfilePage = () => {
  useEffect(() => {
    document.title = "Profile | Cheber";
    return () => {
      document.title = "Cheber"; // Reset the title when the component unmounts
    };
  }, []);
  return (
    <Container>
      <h1 className={styles.page_text}>Личный кабинет</h1>
      <div className={styles.wrapper}>
        <div className={styles.to_left}>
          <div className={styles.current_data}>
            <div className={styles.img_picker}>
              <ImagePicker borderRadius="999px" border="1px solid silver" />
            </div>
            <h3 className={styles.name}>Билли</h3>
            <p className={styles.number}>+996708521328</p>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab}>Редактировать данные</div>
            <div className={styles.tab}>Сменить пароль</div>
          </div>
        </div>
        <div className={styles.to_right}>
          <h2>Редактировать данные</h2>
          <div className={styles.inputs}>
            <Input className={styles.input} />
            <Input className={styles.input} />
            <Input className={styles.input} />
            <Input className={styles.input} />
            <Input className={styles.input} />
          </div>
        </div>
      </div>
    </Container>
  );
};
