import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import signIn from "../actions/userActions";
import "../styles.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(username, password));
    navigate("/");
  };

  return (
    <div id="wrapper">
      <div className="container">
        <div className="form-data">
          <form onSubmit={handleSubmit}>
            <div className="logo">
              <h1>Instagram</h1>
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username or email address"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <button className="form-btn" type="submit">
              Log in
            </button>
            <a className="password-reset" href="#">
              Forgot password?
            </a>
          </form>
          <div className="sign-up">
            Don't have an account? <a href="/sign-up">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
