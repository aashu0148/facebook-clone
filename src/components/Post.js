import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Post.css";
import Reaction from "./Reaction";

import LikeIcon from "@material-ui/icons/ThumbUpOutlined";
import MessageIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

class Post extends Component {
  componentDidMount() {
    const changeReaction = (reaction) => {
      if (!reaction) return;
      const myState = { ...this.state };
      if (myState.reactions[myState.yourReaction]) {
        if (myState.reactions[myState.yourReaction] > 1) {
          myState.reactions[myState.yourReaction] -= 1;
        } else {
          delete myState.reactions[myState.yourReaction];
        }
      }

      if (myState.reactions[reaction]) {
        myState.reactions[reaction] += 1;
      } else {
        myState.reactions[reaction] = 1;
      }
      myState.yourReaction = reaction;
      this.setState(myState);
    };

    document.querySelectorAll(".post_reaction-tab").forEach((item) => {
      item.addEventListener("click", (e) => {
        const type = e.target.dataset.type;
        changeReaction(type);
        item.style.display = "none";
        item.classList.remove("post_reaction-tab-active");
      });
    });
    document.querySelectorAll(".post_like").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.children[0].style.display = "flex";
        setTimeout(() => {
          item.children[0].classList.add("post_reaction-tab-active");
        }, 850);
      });
      item.addEventListener("mouseleave", () => {
        setTimeout(() => {
          item.children[0].style.display = "none";
          item.children[0].classList.remove("post_reaction-tab-active");
        }, 400);
      });
    });
  }

  state = {
    reactions: { haha: 1, like: 1 },
    yourReaction: "haha",
    noOfReactions: 2,
    comments: 0,
  };

  render() {
    const postReactions = [];
    let i = 0;
    for (let property in this.state.reactions) {
      postReactions.push(<Reaction key={i} type={property} />);
      ++i;
    }

    return (
      <div className="post">
        <div className="post_top">
          <Avatar src={this.props.profile} />
          <div>
            <h4 className="post_username">{this.props.username}</h4>
            <p>{this.props.timestamp}</p>
          </div>
        </div>
        <hr />
        <div className="post_body">
          <p>{this.props.message}</p>
          <img src={this.props.image} />
        </div>
        <div className="post_activity">
          <div className="post_reaction">{postReactions}</div>
          <div>{this.state.comments} comments</div>
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

            {/* <LikeIcon /> */}
            <Reaction
              type={this.state.yourReaction}
              class={this.state.yourReaction}
            >
              {this.state.yourReaction}
            </Reaction>
          </div>
          <div className="post_comment">
            <MessageIcon /> <p>Comment</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Post;
