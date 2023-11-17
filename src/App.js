import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles.css";

const App = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="app">
      <Router>
        <Routes>
          {!username ? (
            <Route path="/" Component={SignIn} />
          ) : (
            <Route path="/" Component={Home} />
          )}

          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
