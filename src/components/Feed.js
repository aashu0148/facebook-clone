import React, { Component } from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import Post from "./Post";
import db from "../firebase";
import firebase from "firebase";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

class Feed extends Component {
  state = {
    posts: [],
  };

  render() {
    const messageHandler = (e) => {
      e.preventDefault();
      db.collection("posts").add({
        userPhoto: this.props.photo,
        user: this.props.user,
        message: this.inputMessage.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image: this.inputImage.value,
        reactions: {},
        everyReaction: {},
      });
      this.formRef.reset();
    };

    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        let posts = [];
        snap.docs.map((item) => {
          posts.push({
            id: item.id,
            data: item.data(),
          });
        });
        if (posts.length !== this.state.posts.length) this.setState({ posts });
      });
    return (
      <div className="feed">
        <StoryReel />
        <div className="feed_message">
          <form ref={(el) => (this.formRef = el)}>
            <Avatar src={this.props.photo} />
            <input
              ref={(elem) => (this.inputMessage = elem)}
              type="text"
              placeholder="What's on your mind ?"
            />
            <input
              ref={(elem) => (this.inputImage = elem)}
              type="text"
              placeholder="Image url (optional)"
            />
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

        {this.state.posts.map((post, i) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              profile={post.data.userPhoto}
              username={post.data.user}
              timestamp={post.data.timestamp}
              message={post.data.message}
              image={post.data.image}
              reactions={post.data.reactions || {}}
              everyReaction={post.data.everyReaction || {}}
              yourReaction={post.data.everyReaction[this.props.uid] || ""}
              comments={0}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
