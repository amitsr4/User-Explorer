import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import homePhoto1 from "../assets/homePhoto1.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homePhoto1})` }}>
      <div className="headerContainer">
        <h1> User Explorer </h1>
        <p>READ THE BEST POSTS</p>
        <Link to="/Users">
          <button> Our Users</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
