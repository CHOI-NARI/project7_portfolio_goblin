const PortfolioTextBox = (props) => {
  return (
    <section>
      <div
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          color: "#ab7543",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>Title</span>
          <span style={{ fontSize: "40px" }}>{props.title}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>Skill</span>
          <span style={{ fontSize: "40px" }}>{props.skill}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Text
          </span>
          {props.text}
        </div>
        <a
          style={{
            border: "1px solid #ab7543",
            borderRadius: "20px",
            width: "200px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
          href={props.link}
        >
          바로가기
        </a>
      </div>
    </section>
  );
};

export default PortfolioTextBox;
