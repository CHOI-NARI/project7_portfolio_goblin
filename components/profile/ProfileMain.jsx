const ProfileMain = () => {
  return (
    <div style={{ display: "flex", padding: "200px 100px" }}>
      <div style={{ width: "350px" }}>
        <img
          style={{ borderRadius: "20px" }}
          src="image_profile/sandra.jpg"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          padding: "100px",
          fontSize: "30px",
          color: "#ab7543",
        }}
      >
        <span>내 나이 벌써</span>
        <span>내일 모레 마흔살</span>
        <span>나이 먹으면서 배운건</span>
        <span>눈치와 지혜와 융통성</span>
        <span>다행히 그거라도 잘해서</span>
      </div>
    </div>
  );
};

export default ProfileMain;
