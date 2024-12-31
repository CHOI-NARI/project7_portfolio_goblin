import { useSwiper } from "swiper/react";

const NextButton = () => {
  const swiper = useSwiper();

  const handleNext = () => {
    swiper.slideNext();
  };

  return <button onClick={handleNext}>다음</button>;
};

export default NextButton;
