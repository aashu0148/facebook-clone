import { Avatar, ListItemAvatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

function Post({ profile, username, timestamp, message, image, ...props }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profile} />
        <h3 className="post_username">{username}</h3>
        <p>{timestamp}</p>
      </div>
      <div className="post_body">
        <p>{message}</p>
        <img src={image} />
      </div>
    </div>
  );
}

export default Post;
