const ProfileServeText = ({ text }) => {
  return (
    <span
      style={{
        padding: "20px",
        borderTop: "3px solid #ab7543",
        borderBottom: "3px solid #ab7543",
        fontSize: "25px",
      }}
    >
      {text}
    </span>
  );
};

export default ProfileServeText;
