import PortfolioTotalBox from "@/components/portfolio/PortfolioTotalBox";

const Page = () => {
  return (
    <section
      style={{
        backgroundColor: "#d0beaa",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PortfolioTotalBox />
      </div>
    </section>
  );
};

export default Page;
