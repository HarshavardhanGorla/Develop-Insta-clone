// Comment.js
import React from "react";
import User from "../assets/icons/user.png";

const Comment = ({ comment}) => {
  return (
    <div className="comment" style={{ display: 'flex', alignItems:'center'}}>
      <img src={User} className="header-img bottom-space" alt="User" />
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
