import React from "react";
import "./UseMain.css";
const UserMain = ({
  picture,
  name,
  location,
  email,
  phone,
  registered,
  gender,
  getData,
}) => {
  return (
    <div className="cardWrapper">
      <div className="cardMain">
        <div className="cardHeader">
          <img src={picture?.large} alt="img" />
          <h3>
            {name?.first} {name?.last}/
          </h3>
          <span>({gender})</span>
        </div>
        <div className="cardMiddle">
          <p>{email}</p>
          <p>{phone}</p>
          <p>
            {location?.city}/{location?.country}
          </p>
        </div>
        <div className="cardFooter">
          <p>Age: {registered?.age}</p>
          <p>{new Date(registered?.age).toLocaleDateString()}</p>
        </div>
      </div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default UserMain;
