import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
