import SpanBox from "./SpanBox";

const SpanText = () => {
  return (
    <>
      <div style={{ fontSize: "50px" }}>Skill</div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <SpanBox text={"HTML"} />
        <SpanBox text={"CSS"} />
        <SpanBox text={"React"} />
        <SpanBox text={"Next.js"} />
        <SpanBox text={"JavaScript"} />
        <SpanBox text={"Typescript"} />
        <SpanBox text={"Gsap"} />
        <SpanBox text={"Tailwind"} />
        <SpanBox text={"WEB API"} />
      </div>
    </>
  );
};

export default SpanText;
