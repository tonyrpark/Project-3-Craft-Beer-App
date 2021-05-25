import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const handleSignup = () => {
    const { firstName, lastName, email, password, conPassword } = state;
    if (password == conPassword) {
      axios
        .post("https://project-3-dwmc.herokuapp.com/api/user/signup", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((result) => {
          alert(result.data.message);
          window.location.replace("/login");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("Password mismatch");
    }
  };
  return (
    <div className="container">
      <h1 className="main-heading">Signup</h1>
      <div className="formgroup">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={state.firstName}
        />
      </div>

      <div className="formgroup">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={state.lastName}
        />
      </div>

      <div className="formgroup">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
      </div>
      <div className="formgroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
        />
      </div>
      <div className="formgroup">
        <label htmlFor="conPassword">Confirm Password</label>
        <input
          type="password"
          name="conPassword"
          onChange={handleChange}
          value={state.conPassword}
        />
      </div>
      <button className="btnprimary" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}
