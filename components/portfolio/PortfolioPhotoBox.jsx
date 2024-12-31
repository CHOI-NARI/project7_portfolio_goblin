const PortfolioPhotoBox = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <img src={props.image} alt="" />
    </div>
  );
};
export default PortfolioPhotoBox;
