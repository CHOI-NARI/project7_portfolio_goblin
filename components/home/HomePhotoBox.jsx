const HomePhotoBox = (props) => {
  return (
    <div
      ref={props.ref}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
        opacity: "0",
      }}
    >
      <img src={props.photo} alt="" />
    </div>
  );
};

export default HomePhotoBox;
