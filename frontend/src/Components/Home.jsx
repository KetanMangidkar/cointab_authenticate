import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import "./home.css"

const Home = () => {
  const data = useContext(Context);
  console.log(data);

  //   const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("user", null);
    navigate("/");
  };

  return (
    <div className="homepage">
      <h1>{data?.state?.user?.user?.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
