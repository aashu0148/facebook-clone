import React, { Component } from "react";
import "./Comment.css";
import db from "../firebase";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

class Comment extends Component {
  state = {
    comments: [],
  };
  render() {
    let comments = [];
    db.collection("posts")
      .doc(this.props.id)
      .onSnapshot((snap) => {
        comments = snap.data().comments.reverse();
        if (this.state.comments.length !== comments.length)
          this.setState({ comments: comments });
      });
    const onCommentHandler = (e) => {
      e.preventDefault();
      let newComment = {
        user: this.props.user,
        userPhoto: this.props.userPhoto,
        message: this.myInput.value,
        timestamp: new Date().getTime(),
      };
      let comments = [...this.state.comments];
      comments.push(newComment);
      db.collection("posts").doc(this.props.id).update({
        comments: comments,
      });
      this.myForm.reset();
    };
    return (
      <div className="comment">
        <div className="comment_top">
          <form ref={(el) => (this.myForm = el)}>
            <Avatar src={this.props.userPhoto} />
            <input
              ref={(el) => (this.myInput = el)}
              type="text"
              placeholder="Write a comment..."
            />
            <button type="submit" onClick={(e) => onCommentHandler(e)}></button>
          </form>
        </div>
        <div className="comment_body">
          {this.state.comments.map((comment, i) => {
            return (
              <div className="comment_mini" key={i}>
                <div className="comment_mini-top">
                  <Avatar src={comment.userPhoto} />
                </div>
                <div className="comment_mini-body">
                  <h5>{comment.user}</h5>
                  <div className="comment_message">{comment.message}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userPhoto: state.userPhoto,
  };
};

export default connect(mapStateToProps)(Comment);
