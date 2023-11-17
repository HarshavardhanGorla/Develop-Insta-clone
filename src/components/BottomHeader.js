// Header.js
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../actions/userActions";
import Home from "../assets/icons/home.png";
import Search from "../assets/icons/search.png";
import Add from "../assets/icons/add.png";
import Reels from "../assets/icons/reels.png";
import User from "../assets/icons/user.png";
import { addPost } from "../actions/postActions";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleSignOut = () => {
    dispatch(signOut());
    window.location.reload();
  };

  const handleAddClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    try {
      const imageUrl = URL.createObjectURL(selectedFile);

      const post = {
        id: 3,
        username: "harsha__19",
        fullname: "Harsha Vardhan",
        profileimage: imageUrl,
        image: imageUrl,
        comments: [],
        likes: 0,
        saves: 0,
        share: 0,
      };

      dispatch(addPost(post));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="bottom-header">
      <img src={Home} className="bottom-header-img bottom-space" alt="Home" />
      <img
        src={Search}
        className="bottom-header-img bottom-space"
        alt="Search"
      />
      <img
        src={Add}
        className="bottom-header-img bottom-space"
        alt="Add"
        onClick={handleAddClick}
      />
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <img src={Reels} className="bottom-header-img bottom-space" alt="Reels" />
      <div className="user-img-container" onClick={handleSignOut}>
        <img src={User} className="bottom-header-img bottom-space" alt="User" />
      </div>
    </div>
  );
};

export default BottomHeader;
