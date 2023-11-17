import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import signIn from "../actions/userActions";


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });

  const { username, email, password, fullName } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(username, email, password, fullName));
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
            <div className="description">
              Sign up to see photos and videos from your friends.
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
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
              Sign up
            </button>
            <div className="terms">
              <p>
                By signing up, you agree to our Terms, Data Policy, and Cookies
                Policy. (Don't use any real username & password)
              </p>
            </div>
          </form>
          <div className="sign-up">
            Have an account? <a href="/">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
