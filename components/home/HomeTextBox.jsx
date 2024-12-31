const HomeTextBox = (props) => {
  return (
    <div
      ref={props.ref}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
        opacity: "0",
      }}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default HomeTextBox;
