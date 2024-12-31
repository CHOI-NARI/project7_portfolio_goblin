const SpanBox = ({ text }) => {
  return (
    <span
      style={{
        width: "100px",
        height: "50px",
        borderRadius: "25px",
        border: "2px solid #ab7543",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text}
    </span>
  );
};

export default SpanBox;
