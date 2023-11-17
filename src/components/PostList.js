import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div
      className="post-list"
      style={{ maxHeight: "700px", overflowY: "auto" }}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
