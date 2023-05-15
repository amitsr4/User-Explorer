import React from "react";
import "../pages/UserPosts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Post(props) {
  return (
    <div className="posts">
      <li className="one-post">
        <a className="title">{props.title}</a>
        <p>{props.body}</p>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => props.removePost(props.id)}
          className="delete"
        />
      </li>
    </div>
  );
}

export default Post;
