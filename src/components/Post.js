import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import Reaction from "./Reaction";

import LikeIcon from "@material-ui/icons/ThumbUpOutlined";
import MessageIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

function Post({ profile, username, timestamp, message, image, ...props }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profile} />
        <div>
          <h4 className="post_username">{username}</h4>
          <p>{timestamp}</p>
        </div>
      </div>
      <hr />
      <div className="post_body">
        <p>{message}</p>
        <img src={image} />
      </div>
      <div className="post_activity">
        <div className="post_reaction">
          <Reaction type="haha" />
          <Reaction type="love" />
        </div>
        <div>20 comments</div>
      </div>
      <hr />
      <div className="post_bottom">
        <div className="post_like">
          <div className="post_reaction-tab">
            <Reaction size="39" type="like" />
            <Reaction size="39" type="love" />
            <Reaction size="39" type="care" />
            <Reaction size="39" type="haha" />
            <Reaction size="39" type="wow" />
            <Reaction size="39" type="sad" />
            <Reaction size="39" type="angry" />
          </div>
          <LikeIcon />
          <p>Like</p>
        </div>
        <div className="post_comment">
          <MessageIcon /> <p>Comment</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Post;
