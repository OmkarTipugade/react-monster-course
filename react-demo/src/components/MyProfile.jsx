import React, { useContext } from "react";
import { UserContext } from "./ProfileContext/ProfileContext";
const MyProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <h1>Name: {user.name}</h1>
      <h1>Age:{user.age}</h1>
      <h1>DOB:{user.dob}</h1>
    </div>
  );
};

export default MyProfile;
