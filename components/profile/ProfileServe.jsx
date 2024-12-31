"use client";
import { profileStyle } from "@/styles/profile";
import ProfileServePhoto from "./ProfileServePhoto";
import ProfileServeText from "./ProfileServeText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProfileServe = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const action = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 1,
        start: "-20% top",
        end: "bottom bottom",
      },
    });
    action.to(ref.current, {
      x: -2000,
      duration: 10,
    });
  }, []);

  return (
    <div
      ref={ref}
      className="ProfileServe"
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "150px",
          marginBottom: "400px",
        }}
      >
        <div style={profileStyle.serve}>
          <ProfileServePhoto photo={"image_profile/img_profile1.jpg"} />
          <ProfileServeText text={"　협업에 적극적으로 참여하고　"} />
        </div>

        <div style={profileStyle.serve}>
          <ProfileServePhoto photo={"image_profile/img_profile13.jpg"} />
          <ProfileServeText text={"　　성장하기 위해 노력하고　　"} />
        </div>

        <div style={profileStyle.serve}>
          <ProfileServePhoto photo={"image_profile/img_profile2.jpg"} />
          <ProfileServeText text={"　　　　업무 효율이 높고　　　　"} />
        </div>

        <div style={profileStyle.serve}>
          <ProfileServePhoto photo={"image_profile/img_profile3.jpg"} />
          <ProfileServeText text={"　　　서로 다름을 인정하고　　　"} />
        </div>

        <div style={profileStyle.serve}>
          <ProfileServePhoto photo={"image_profile/img_profile8.jpg"} />
          <ProfileServeText text={"　　　긍정적으로 사고하는　　　"} />
        </div>

        <div style={profileStyle.serve}>
          <ProfileServePhoto photo={"image_profile/img_profile12.jpg"} />
          <ProfileServeText text={"　　웹 퍼블리셔 최나리입니다　　"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileServe;
