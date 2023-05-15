import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams, useLocation } from "react-router-dom";
import Post from "../Components/Post";
import "./UserPosts.css";


function UserPosts(props) {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const UserName = useLocation().state;
  const params = useParams();

  useEffect(() => {
    const singleUserApiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`;
    axios
      .get(singleUserApiUrl)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };


  return (
    <div className="user-posts">
      <h1>{UserName.username}</h1>

      <h2>All Posts:</h2>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search by title"
      />
      {filteredPosts.map((post) => (
        <Post id={post.id} title={post.title} body={post.body} removePost={removePost} />
      ))}
      <Link to="/users">Go back</Link>
    </div>
  );
}

export default UserPosts;
