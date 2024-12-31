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
    </section>
  );
};

export default Page;
