import React from "react";
import { useSelector } from "react-redux";
import InstagramLogo from "../assets/icons/instagram-logo.png";
import Favourite from "../assets/icons/favourite.png";
import Messenger from "../assets/icons/messenger.png";

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="header">
      <div className="header-left">
        <img src={InstagramLogo} className="header-img" alt="InstagramLogo" />
        {username && <h2>{username}</h2>}
      </div>
      <div className="header-right">
        <img src={Favourite} className="header-img" alt="Favourite" />
        <img src={Messenger} className="header-img" alt="Messenger" />
      </div>
    </div>
  );
};

export default Header;
