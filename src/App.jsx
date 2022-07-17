import { useState } from "react";
import "./App.css";

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Orders from "./pages/Orders";
import Complaints from "./pages/Complaints";
import Restaraunts from "./pages/Restaraunts";
import Saloons from "./pages/Saloons";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NewBusinessRequest from "./pages/NewBusinessRequest";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/complaints" element={<Complaints />} />
          <Route exact path="/restaraunts" element={<Restaraunts />} />
          <Route exact path="/saloons" element={<Saloons />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/business/new" element={<NewBusinessRequest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
