import ProfileMain from "@/components/profile/ProfileMain";
import ProfileServe from "@/components/profile/ProfileServe";

const Page = () => {
  return (
    <section
      style={{
        backgroundColor: "#d0beaa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "150px",
      }}
    >
      <ProfileMain />
      <ProfileServe />
      <button
        style={{
          width: "50px",
          height: "50px",
          border: "2px solid #ab7543",
          color: "#ab7543",
          borderRadius: "9999px",
        }}
      >
        TOP
      </button>
    </section>
  );
};

export default Page;
