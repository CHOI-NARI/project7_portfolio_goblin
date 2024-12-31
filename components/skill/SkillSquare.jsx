const SkillSquare = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="SkillSquare"
    >
      <div>
        <img
          style={{
            border: "2px solid #ab7543",
            width: "300px",
            height: "300px",
            borderRadius: "9999px",
            objectFit: "contain",
          }}
          src="/image_skill/img_skill1.jpg"
          alt=""
        />
      </div>
      <div style={{ color: "#ab7543", fontSize: "30px" }}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SkillSquare;
