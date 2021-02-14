import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Post.css";
import Reaction from "./Reaction";
import Comment from "./Comment";
import db from "../firebase";
import { connect } from "react-redux";

import MessageIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

class Post extends Component {
  uploadingTimeout;
  uploadReaction() {
    clearTimeout(this.uploadingTimeout);
    this.uploadingTimeout = setTimeout(() => {
      db.collection("posts")
        .doc(this.props.id)
        .update({
          reactions: this.state.reactions,
          everyReaction: {
            ...this.props.everyReaction,
            [this.props.uid]: "" + this.state.yourReaction,
          },
        });
    }, 3000);
  }

  componentDidMount() {
    const changeReaction = (reaction) => {
      if (!reaction) return;
      this.uploadReaction();
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
    const addReaction = () => {
      this.uploadReaction();
      clearTimeout(openingTimeout);
      const myState = { ...this.state };
      if (myState.reactions[myState.yourReaction]) {
        if (myState.reactions[myState.yourReaction] > 1) {
          myState.reactions[myState.yourReaction] -= 1;
        } else {
          delete myState.reactions[myState.yourReaction];
        }
        myState.yourReaction = "";
      } else {
        if (myState.reactions.like) {
          myState.reactions.like += 1;
        } else {
          myState.reactions.like = 1;
        }
        myState.yourReaction = "like";
      }
      this.setState(myState);
    };

    var openingTimeout, closingTimeout;

    this.postReactionTab.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = e.target.dataset.type;
      changeReaction(type);
      this.postReactionTab.style.display = "none";
      this.postReactionTab.classList.remove("post_reaction-tab-active");
    });

    this.postLike.addEventListener("mouseenter", () => {
      clearTimeout(closingTimeout);
      this.postLike.children[0].style.display = "flex";
      openingTimeout = setTimeout(() => {
        this.postLike.children[0].classList.add("post_reaction-tab-active");
      }, 700);
    });
    this.postLike.addEventListener("mouseleave", () => {
      clearTimeout(openingTimeout);
      closingTimeout = setTimeout(() => {
        this.postLike.children[0].style.display = "none";
        this.postLike.children[0].classList.remove("post_reaction-tab-active");
      }, 300);
    });
    this.postLike.addEventListener("click", addReaction);
  }

  state = {
    reactions: this.props.reactions,
    yourReaction: this.props.yourReaction,
    comments: this.props.comments,
  };

  render() {
    const postReactions = [];
    let totalReactions = 0;
    let i = 0;
    for (let property in this.state.reactions) {
      if (this.state.reactions[property] > 0)
        postReactions.push(<Reaction key={i} type={property} />);
      ++i;
      totalReactions += this.state.reactions[property];
    }

    return (
      <div className="post">
        <div className="post_top">
          <Avatar src={this.props.profile} />
          <div>
            <h4 className="post_username">{this.props.username}</h4>
            <p>{new Date(this.props.timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <hr />
        <div className="post_body">
          <p>{this.props.message}</p>
          <img src={this.props.image} />
        </div>
        <div className="post_activity">
          <div className="post_reaction">
            {postReactions}
            <p>{totalReactions || " "}</p>
          </div>
          <div className="post_activity-comments">
            {this.state.comments} comments
          </div>
        </div>
        <hr />
        <div className="post_bottom">
          <div ref={(el) => (this.postLike = el)} className="post_like">
            <div
              ref={(el) => (this.postReactionTab = el)}
              className="post_reaction-tab"
            >
              <Reaction size="39" type="like" />
              <Reaction size="39" type="love" />
              <Reaction size="39" type="care" />
              <Reaction size="39" type="haha" />
              <Reaction size="39" type="wow" />
              <Reaction size="39" type="sad" />
              <Reaction size="39" type="angry" />
            </div>

            <Reaction
              type={
                this.state.yourReaction == ""
                  ? "default"
                  : this.state.yourReaction
              }
              class={this.state.yourReaction}
            >
              {this.state.yourReaction || "like"}
            </Reaction>
          </div>
          <div className="post_comment">
            <MessageIcon /> <p>Comment</p>
          </div>
        </div>
        <hr />
        <Comment />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.uid,
  };
};

export default connect(mapStateToProps)(Post);
