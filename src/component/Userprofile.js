import React, { useState, useEffect } from "react";
import "../css/userprofile.css";
import HomePage from "/home/nineleaps/project/project/src/component/HomePage.js";

function UserProfile(props) {
  const [name, setName] = useState("name");
  const [photo, setPhoto] = useState(
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
  );

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setPhoto(data.photo);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleProfileClick = () => {
    props.history.push("/profile");
  };

  const handleFeedsClick = () => {
    props.history.push("/feeds");
  };

  const handleLogoutClick = () => {
    fetch("/api/logout", { method: "POST" })
      .then(() => props.history.push("/login"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="user-profile">
      <div className="Photo-name">
        <img src={photo} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="Buttons-userprofile">
        <button className="button-up" onClick={handleProfileClick}>
          Profile
        </button>
        <button className="button-up" onClick={handleFeedsClick}>
          Feeds
        </button>
        <button className="button-up" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>

    </div>
  );
}

export default UserProfile;
