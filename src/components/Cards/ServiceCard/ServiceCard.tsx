import { Card, CardActionArea } from "@mui/material";
import ContentLoader from "react-content-loader";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GradeIcon from "@mui/icons-material/Grade";
import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";

interface IServiceCard {
  isloading?: boolean;
  companyName: string;
  address: string;
  phoneNumber: string;
}

export const ServiceCard = ({
  isloading,
  companyName,
  address,
  phoneNumber,
}: IServiceCard) => {
  return (
    <Link to="/beauty-salon">
      <Card className={styles.main}>
        <CardActionArea className={styles.mainwrapper}>
          {isloading ? (
            <ContentLoader viewBox="0 0 500 280" height={350} width={400}>
              <rect x="3" y="3" rx="10" ry="10" width="400" height="180" />
              <rect x="6" y="190" rx="0" ry="0" width="400" height="20" />
              <rect x="4" y="215" rx="0" ry="0" width="400" height="20" />
              <rect x="4" y="242" rx="0" ry="0" width="400" height="20" />
            </ContentLoader>
          ) : (
            <div className={styles.wrapper}>
              <div className={styles.marking}>
                <BookmarkIcon />
              </div>
              <div className={styles.imgcontainer}>
                <img
                  className={styles.img}
                  src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/07/29184719/Cover-20.png"
                  alt="AMG"
                />
              </div>
              <div className={styles.info}>
                <div>
                  <h4 className={styles.type}>Барбершоп</h4>
                  <h3 className={styles.name}>{companyName}</h3>
                  <p className={styles.location}>{address}</p>
                </div>
                <div className={styles.reviewcontainer}>
                  <h3 className={styles.review}>
                    <GradeIcon
                      className={styles.star}
                      sx={{ color: "goldenrod" }}
                    />
                    4.7
                  </h3>
                  <p>{phoneNumber}</p>
                </div>
              </div>
            </div>
          )}
        </CardActionArea>
      </Card>
    </Link>
  );
};
