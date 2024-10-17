import React from "react";
import "./UserHeader.css"
const UserHeader = ({ user }) => {
  return (
    <div className="headWrapper">
      <img src={user.picture?.medium} alt="img" />
      <p>
        {user.name?.first} {user.name?.last}
      </p>
    </div>
  );
};

export default UserHeader;
