const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "250px",
        backgroundColor: "#d0beaa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ab7543",
          fontSize: "13px",
          padding: "30px",
          borderTop: "1px solid #ab7543",
          fontSize: "100px",
          position: "absolute",
          zIndex: "2",
        }}
      >
        THANK YOU
      </span>
      <marquee
        style={{
          color: "#ab7543",
          fontSize: "150px",
          opacity: "0.2",
          position: "absolute",
          zIndex: "1",
        }}
        behavior="scroll"
        scrollamount="25"
        className="footerMarquee"
      >
        CHOI,NARI PORTFOLIO
      </marquee>
    </div>
  );
};

export default Footer;
