import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        width: "100vw",
        backgroundColor: "#d0beaa",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        zIndex: "5",
      }}
    >
      <nav
        style={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          color: "#ab7543",
          fontSize: "20px",
          fontWeight: "bold",
          borderBottom: "1px solid #ab7543",
        }}
      >
        <Link className="link-home" href="/">
          <div
            className="div-home"
            style={{
              width: "150px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            HOME
          </div>
        </Link>
        <div style={{ display: "flex", gap: "60px" }}>
          <Link style={{ padding: "30px" }} href="/profile">
            PROFILE
          </Link>
          <Link style={{ padding: "30px" }} href="/skill">
            SKILL
          </Link>
          <Link style={{ padding: "30px" }} href="/portfolio">
            PORTFOLIO
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
