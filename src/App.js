import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Users from "./pages/Users";
import About from "./pages/About";
import UserPosts from "./pages/User-Posts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path="/about"  element={<About/>} />
          <Route path="/users"  element ={<Users/>} />
          <Route path="users/:userId" element={<UserPosts />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
