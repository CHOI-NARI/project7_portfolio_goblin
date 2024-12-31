"use client";
import PortfolioTextBox from "./PortfolioTextBox";
import PortfolioPhotoBox from "./PortfolioPhotoBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PortfolioTotalBox = () => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <PortfolioTextBox
            title={"CCOLORE"}
            skill={"React, Tailwind"}
            text={
              "React Tool 기반으로 Tailwind 라이브러리를 활용하여 캠핑과 백패킹 관련 장비 판매로만족도 높은 아웃도어 활동을 제공하는'꼴로르' 홈페이지를 '클론 코딩' 하였습니다"
            }
            link={"https://choi-nari.github.io/project1_CCOLORE/"}
          />
          <PortfolioPhotoBox image={"/image_portfolio/img_portfolio1.jpg"} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <PortfolioTextBox
            title={"To Do List"}
            skill={"React, WEB API"}
            text={
              "React Tool 기반으로 브라우저에서 제공하는 WEB API 라이브러리를 활용하여 날짜, 시간, 날씨를 화면에 나타낼 수 있도록 구현하였습니다"
            }
            link={"https://choi-nari.github.io/project2_ToDoList/"}
          />
          <PortfolioPhotoBox image={"/image_portfolio/img_portfolio2.jpg"} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <PortfolioTextBox
            title={"Portfolio"}
            skill={"HTML, CSS, GSAP"}
            text={
              "HTML, CSS Tool 기반으로, GSAP 라이브러리와 Hover, Marquee 태그 등을 활용하여 매력적인 시각효과를 낼 수 있도록 세련되고 역동적인 애니메이션 화면을 구현하였습니다"
            }
            link={" https://choi-nari.github.io/project4_christmas/"}
          />
          <PortfolioPhotoBox image={"/image_portfolio/img_portfolio5.jpg"} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PortfolioTotalBox;
