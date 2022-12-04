import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css"

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9555/user/register", {
        name: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);

        if (res.data.token) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert("email or password already exist");
      });
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="" type="text">
          Username
        </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="" type="text">
          Email
        </label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" type="Password">
          Password
        </label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit" value="submit">
          Register
        </button>
      </form>

      <button className="registerLoginButton">
        <Link to="/" className="link">
          go_to_Login
        </Link>
      </button>
    </div>
  );
}

export default Register;
