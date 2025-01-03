import { targets } from "../animation/targets";
import SlideText from "./SlideText";

const MainSlideTexts = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SlideText className={targets.textName} text={"CHOI NA RI"} />
      <SlideText
        className={targets.textFrontend}
        text={"PUBLISHER"}
        justifyContent={"end"}
      />
    </div>
  );
};

export default MainSlideTexts;
