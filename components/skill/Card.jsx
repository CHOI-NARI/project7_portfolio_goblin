const Card = ({ title, text }) => {
  return (
    <div className="three" style={{ perspective: "1000px", width: "100%" }}>
      <div
        style={{
          width: "500px",
          height: "300px",
          borderRadius: "30px",
          border: "2px solid #ab7543",
          color: "#ab7543",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          padding: "25px",
          transform: "rotateY(90deg)",
          transition: "all 0.5s ease",
        }}
      >
        <div>{title}</div>
        <div> {text}</div>
      </div>
    </div>
  );
};

export default Card;
