"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import HomePhotoBox from "./HomePhotoBox";
import HomeTextBox from "./HomeTextBox";

const HomeTotalBox = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box10 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(box1.current, { opacity: 1, duration: 0.5 })
      .to(box1.current, { opacity: 0, duration: 0.5 })
      .to(box2.current, { opacity: 1, duration: 0.5 })
      .to(box2.current, { opacity: 0, duration: 0.5 })
      .to(box3.current, { opacity: 1, duration: 0.5 })
      .to(box3.current, { opacity: 0, duration: 0.5 })
      .to(box4.current, { opacity: 1, duration: 0.5 })
      .to(box4.current, { opacity: 0, duration: 0.5 })
      .to(box5.current, { opacity: 1, duration: 0.5 })
      .to(box5.current, { opacity: 0, duration: 0.5 })
      .to(box6.current, { opacity: 1, duration: 0.5 })
      .to(box6.current, { opacity: 0, duration: 0.5 })
      .to(box7.current, { opacity: 1, duration: 0.5 })
      .to(box7.current, { opacity: 0, duration: 0.5 })
      .to(box8.current, { opacity: 1, duration: 0.5 })
      .to(box8.current, { opacity: 0, duration: 0.5 })
      .to(box9.current, { opacity: 1, duration: 0.5 })
      .to(box9.current, { opacity: 0, duration: 0.5 })
      .to(box10.current, { opacity: 1, duration: 0.5 });
  }, []);

  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        fontSize: "100px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeTextBox ref={box1} text={"나리좋아서"} />
      <HomeTextBox ref={box2} text={"나리좋지않아서"} />
      <HomeTextBox ref={box3} text={"나리적당해서"} />
      <HomeTextBox ref={box4} text={"모든나리좋았다"} />
      <HomePhotoBox ref={box5} photo={"/image_goblin/img_goblin1.jpg"} />
      <HomePhotoBox ref={box6} photo={"/image_goblin/img_goblin2.png"} />
      <HomePhotoBox ref={box7} photo={"/image_goblin/img_goblin3.jpg"} />
      <HomePhotoBox ref={box8} photo={"/image_goblin/img_goblin4.jpg"} />
      <HomePhotoBox ref={box9} photo={"/image_goblin/img_goblin22.jpg"} />
      <HomeTextBox ref={box10} text={"CHOI, NARI"} />
    </div>
  );
};

export default HomeTotalBox;
