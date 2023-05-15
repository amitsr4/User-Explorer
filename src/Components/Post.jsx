import React from "react";
import "../styles/UserPosts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Post(props) {
  return (
    <div className="posts">
      <li className="one-post">
        <a className="title">{props.title}</a>
        <div class="post-content">
          <p>{props.body}</p>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => props.removePost(props.id)}
            className="deleteButton"
          />
        </div>
      </li>
    </div>
  );
}

export default Post;
