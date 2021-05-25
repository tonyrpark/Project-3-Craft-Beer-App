import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    const { email, password } = user;
    axios
      .post("https://project-3-dwmc.herokuapp.com/api/user/login", {
        email,
        password,
      })
      .then((result) => {
        alert(`Hi ${result.data.user.firstName}! Welcome to the application`);
        window.localStorage.setItem("userId", result.data.user._id);
        window.localStorage.setItem("userName", result.data.user.firstName);
        window.location.replace("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  return (
    <div className="container">
      <h1 className="main-heading">Login</h1>
      <div className="formgroup">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className="formgroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
      </div>
      <button className="btnprimary" onClick={handleLogin}>
        Login
      </button>
      <p className="primary-text">
        New here? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
}
