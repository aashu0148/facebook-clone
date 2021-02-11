import React from "react";
import like from "../assets/reactions/like.svg";
import haha from "../assets/reactions/haha.svg";
import angry from "../assets/reactions/angry.svg";
import care from "../assets/reactions/care.svg";
import love from "../assets/reactions/love.svg";
import wow from "../assets/reactions/wow.svg";
import sad from "../assets/reactions/sad.svg";

function Reaction({ type, size }) {
  let reaction;
  switch (type) {
    case "like":
      reaction = like;
      break;
    case "angry":
      reaction = angry;
      break;
    case "sad":
      reaction = sad;
      break;
    case "love":
      reaction = love;
      break;
    case "wow":
      reaction = wow;
      break;
    case "care":
      reaction = care;
      break;
    case "haha":
      reaction = haha;
      break;
  }
  let dimension = 18;
  if (size) dimension = size;
  return (
    <div
      style={{
        display: "inline-block",
        backgroundImage: `url(${reaction})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: `${dimension}px`,
        minWidth: `${dimension}px`,
      }}
      className="reaction"
    ></div>
  );
}

export default Reaction;
