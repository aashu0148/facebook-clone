import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";
function Story(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.background})` }}
      className="story"
    >
      <div className="story_profile">
        <Avatar src={props.profile} />
      </div>
      <h4>{props.name}</h4>
    </div>
  );
}

export default Story;
