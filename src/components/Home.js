import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import PostList from "./PostList";
import BottomHeader from "./BottomHeader";
import { dummyData } from "../data";
import { addPost } from "../actions/postActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPost(dummyData));
  }, [dispatch]);

  return (
    <div className="home">
      <Header />
      <PostList />
      <BottomHeader />
    </div>
  );
};

export default Home;
