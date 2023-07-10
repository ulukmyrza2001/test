import { Fragment, useEffect } from "react";
import { Container } from "../../styles/ContainerStyle/Container";
import { ContainerSlider } from "../../components/ContainersSliders/ContainerSlider";
import { ServiceCard } from "../../components/Cards/ServiceCard/ServiceCard";
import { NavBar } from "../../components/Navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "../../store/features/branch-slice";
import { AnyAction } from "@reduxjs/toolkit";

const DATA = [
  {
    name: "Стрижка волос",
  },
  {
    name: "Маникюр",
  },
  {
    name: "Педикюр",
  },
  {
    name: "Укладка волос",
  },
  {
    name: "Снятие покрытия",
  },
  {
    name: "Коррекция бровей",
  },
  {
    name: "Шугаринг",
  },
  {
    name: "Снятие покрытия",
  },
];

export const UserPage = () => {
  const dispatch = useDispatch();

  const { branchData, isLoadingBranch } = useSelector(
    (state: any) => state.branch
  );

  console.log(branchData);

  useEffect(() => {
    dispatch(
      getBranches({
        search: "",
        page: 1,
        size: 10,
      }) as never as AnyAction
    );
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container>
        {DATA.map((item, index) => (
          <div key={index} style={{ width: "100%" }}>
            <ContainerSlider
              dots={false}
              infinite={true}
              speed={400}
              slidesToShow={4}
              slidesToScroll={1}
              swipeToSlide={true}
              autoplay={false}
              pauseOnHover={true}
              arrowAndprev={true}
              typeButton={true}
              variableWidth={true}
              label={item.name}
            >
              {branchData?.map((elem: any, index: number) => (
                <ServiceCard {...elem} key={index} />
              ))}
            </ContainerSlider>
          </div>
        ))}
      </Container>
    </Fragment>
  );
};
