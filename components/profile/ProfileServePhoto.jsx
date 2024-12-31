const ProfileServePhoto = ({ photo }) => {
  return (
    <img
      style={{ width: "400px", height: "300px", borderRadius: "20px" }}
      src={photo}
      alt=""
    />
  );
};

export default ProfileServePhoto;
