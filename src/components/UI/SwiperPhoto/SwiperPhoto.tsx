import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Thumbs, Pagination, FreeMode } from "swiper/modules";

import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./SwiperPhoto.css";

interface PhotoSwiper {
  imagesData: { img: string; id: number }[] | [];
}

SwiperCore.use([Pagination, FreeMode, Navigation, Thumbs]);

export const SwiperPhoto = (props: PhotoSwiper) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const MEDIATABLEACCORDION = useMediaQuery("(max-width:768px)");

  const swiperStyles: React.CSSProperties & {
    "--swiper-pagination-color"?: string;
  } = {
    "--swiper-pagination-color": "#fff",
  };

  return (
    <div className="containerSwiper">
      <Swiper
      // loop={true}
      // style={swiperStyles}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      // modules={[Pagination, FreeMode, Navigation, Thumbs]}
      // grabCursor={true}
      // freeMode={true}
      // watchSlidesProgress={true}
      // thumbs={{ swiper: thumbsSwiper }}
      >
        {props.imagesData?.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="mySwiperTop" src={item.img} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
      // onSwiper={(swiper) => {
      //   setThumbsSwiper(swiper);
      // }}
      // loop={true}
      // navigation={true}
      // spaceBetween={10}
      // slidesPerView={3}
      // freeMode={true}
      // modules={[Navigation, FreeMode]}
      // className="BottomSwiper"
      // grabCursor={true}
      // watchSlidesProgress={true}
      // breakpoints={{
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //   },
      // }}
      >
        {MEDIATABLEACCORDION || (
          <>
            {props.imagesData?.map((item, index) => (
              <SwiperSlide style={{ width: "200px" }} key={index}>
                <img
                  className="mySwiperBottomPhoto"
                  src={item.img}
                  alt="product images"
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};
