import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import Post from "./Post";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function Feed() {
  const messageHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <StoryReel />
      <div className="feed_message">
        <form>
          <Avatar src="https://cdn.pixabay.com/photo/2016/11/22/21/42/adult-1850703__340.jpg" />
          <input type="text" placeholder="What's on your mind ?" />
          <input type="text" placeholder="Image url (optional)" />
          <button onClick={messageHandler}>Post</button>
        </form>
        <hr />
        <div className="feed_message-options">
          <div className="feed_message-option">
            <VideocamIcon style={{ color: "red" }} />
            <p>Live video</p>
          </div>
          <div className="feed_message-option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <p>Photos/Videos</p>
          </div>
          <div className="feed_message-option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <p>Feelings</p>
          </div>
        </div>
      </div>

      <Post
        profile=" "
        username="User"
        timestamp="24 ghante"
        message="Yo ek message hai."
        image="https://cdn.pixabay.com/photo/2019/05/04/15/24/art-4178302__340.jpg"
      />
    </div>
  );
}

export default Feed;
