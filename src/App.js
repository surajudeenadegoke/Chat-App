import {  Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Home from "./pages/Home"  
import "./style.scss";

function App() {
  return (
   <Routes>
       <Route path="/" element={<Home />}></Route>
  <Route path="/register" element={<Register />}></Route>
  <Route path="/login" element={<Login />}></Route>
  
  
</Routes>

  );
}

export default App;
