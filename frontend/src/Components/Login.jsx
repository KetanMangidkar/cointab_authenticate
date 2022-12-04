import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(Context);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    await axios
      .post("http://localhost:9555/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        if (res.data.token) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: "LOGIN_FAILURE" });
        alert("wrong email or password");
      });
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="" type="text">
          Email
        </label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" type="Password">
          Password
        </label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" value="submit">
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          go_to_Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
