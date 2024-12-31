"use client";
import { useEffect } from "react";
import Circle from "@/components/skill/Circle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { triggers } from "@/components/animation/triggers";
import { motion } from "@/components/animation/motion";
import MainSlideTexts from "@/components/skill/MainSlideTexts";
import SpanBox from "@/components/skill/SpanBox";
import Card from "@/components/skill/Card";
import { targets } from "@/components/animation/targets";
import SkillSquare from "@/components/skill/SkillSquare";
import CardText from "@/components/skill/CardText";
import SpanText from "@/components/skill/SpanText";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const animation1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main",
          scrub: 3,
          start: "top top",
          end: "+=500",
        },
      })
      .to("." + targets.textName, motion.slideToRightX)
      .to("." + targets.textFrontend, motion.slideToLeftX, "<")
      .to(".SkillSquare", { y: "-900" }, "<");

    const animation2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".strength",
          scrub: true,
          start: "top center",
          end: "bottom bottom",
        },
      })
      .to(".three div", { rotateY: 0 });

    return () => {
      animation1.kill();
      animation2.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        className="main"
        style={{
          backgroundColor: "#d0beaa",
          padding: "300px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Circle />
          <MainSlideTexts />
        </section>
        <section
          className="info"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            margin: "0 auto",
            padding: "50px",
            borderRadius: "20px",
            transform: "translateY(250px)",
            position: "relative",
            zIndex: "4",
          }}
        >
          <SkillSquare text={"Publisher"} />
        </section>
      </div>
      <section className="strength">
        <article
          style={{
            backgroundColor: "#d0beaa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ab7543",
            gap: "50px",
          }}
        >
          <SpanText />
          <CardText />
        </article>
      </section>
    </>
  );
};

export default Page;
