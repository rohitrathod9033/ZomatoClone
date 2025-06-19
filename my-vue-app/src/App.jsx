import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Product from "./Products";
import Home from "./Home";
import Login from "./Login";
import AddSeller from "./AddSeller";
import Count from "./Count";
import Tweet from "./Tweet";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/count" element={<Count />} />
        <Route path="/addseller" element={<AddSeller />} />
        <Route path="/tweet" element={<Tweet />} />
      </Routes>
    </>
  );
}

export default App;
