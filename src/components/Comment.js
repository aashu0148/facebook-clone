import React from "react";
import "./Comment.css";
import { Avatar } from "@material-ui/core";

function Comment() {
  return (
    <div className="comment">
      <div className="comment_top">
        <form>
          <Avatar src="" />
          <input type="text" placeholder="Write a comment..." />
        </form>
      </div>
      <div className="comment_body">
        <div className="comment_mini">
          <div className="comment_mini-top">
            <Avatar src="" />
          </div>
          <div className="comment_mini-body">
            <h5>user</h5>
            <div className="comment_message">This is a message</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
