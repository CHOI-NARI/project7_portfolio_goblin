const OutlineText = ({ text }) => {
  return (
    <h1
      style={{
        fontSize: "130px",
        color: "transparent",
        WebkitTextStroke: "3px #ab7543",
      }}
    >
      {text}
    </h1>
  );
};

export default OutlineText;
