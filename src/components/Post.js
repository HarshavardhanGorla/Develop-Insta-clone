import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, likePost, sharePost } from "../actions/postActions";
import Comment from "./Comment";

import Favourite from "../assets/icons/favourite.png";
import Comments from "../assets/icons/comment.png";
import Send from "../assets/icons/send.png";
import Bookmark from "../assets/icons/bookmark.png";
import Save from "../assets/icons/save.png";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const handleComment = () => {
    dispatch(addComment(post.id, commentText));
    setCommentText("");
  };

  const handleLike = () => {
    dispatch(likePost(post.id));
  };

  const handleShare = () => {
    dispatch(sharePost(post.id));
  };

  const handleSave = () => {
    window.open(post.image, "_blank");
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <img
            src={post.profileimage}
            className="header-img profile-radius"
            alt="User"
          />
          <p>{post.username}</p>
        </div>
        <div>
          <img
            src={Save}
            className="header-img"
            alt="Save"
            onClick={handleSave}
          />
        </div>
      </div>
      <img src={post.image} alt="Post" />
      <div className="actions">
        <div className="actions-left">
          <ActionIcon icon={Favourite} onClick={handleLike} />
          <ActionIcon icon={Comments} onClick={handleComment} />
          <ActionIcon icon={Send} onClick={handleShare} />
        </div>
        <div className="actions-right">
          <ActionIcon
            icon={Bookmark}
            style={{ width: "34px", height: "34px" }}
            onClick={handleSave}
          />
        </div>
      </div>
      <p>{post.likes} likes</p>
      <div
        className="comments"
        style={{ border: "none", margin: "10px 0px 0px 10px" }}
      >
        {post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <input
          type="text"
          width={100}
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={{
            border: "none",
            color: "black",
            outline: "none",
            height: "30px",
            width: "80%",
            background: "inherit",
          }}
        />
        <button
          onClick={handleComment}
          style={{
            border: "none",
            color: "blue",
            width: "10%",
            height: "30px",
            background: "inherit",
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

const ActionIcon = ({ icon, onClick, style }) => (
  <div>
    <img
      src={icon}
      alt="Action"
      className="header-img actions-space"
      onClick={onClick}
      style={style}
    />
  </div>
);

export default Post;
